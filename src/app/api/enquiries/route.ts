import { NextResponse } from "next/server";
import { createHash } from "node:crypto";
import { appendFile, mkdir } from "node:fs/promises";
import path from "node:path";
import { validateEnquiry, type EnquiryInput } from "@/lib/validation";

/**
 * POST /api/enquiries
 *
 * Stores project enquiries on the server. Two delivery modes:
 *
 * 1. If ENQUIRY_WEBHOOK_URL is configured (a form inbox such as Formspree,
 *    Make, Zapier or a Google Apps Script endpoint), the enquiry is forwarded
 *    there so the business receives an email/notification immediately.
 * 2. Every valid enquiry is also appended to .data/enquiries.jsonl on the
 *    server as a durable fallback — read it with `GET` + ENQUIRY_ADMIN_TOKEN.
 *
 * If neither delivery mode works the API returns an error, and the form shows
 * an honest failure state (with a WhatsApp fallback) instead of a fake success.
 */

const STORE_DIR = path.join(process.cwd(), ".data");
const STORE_FILE = path.join(STORE_DIR, "enquiries.jsonl");

// Simple in-memory rate limit: 5 submissions per IP hash per 10 minutes.
const RATE_WINDOW_MS = 10 * 60 * 1000;
const RATE_MAX = 5;
const hits = new Map<string, number[]>();

function rateLimited(key: string) {
  const now = Date.now();
  const recent = (hits.get(key) ?? []).filter((time) => now - time < RATE_WINDOW_MS);
  recent.push(now);
  hits.set(key, recent);
  if (hits.size > 500) {
    for (const [k, v] of hits) {
      if (!v.some((time) => now - time < RATE_WINDOW_MS)) hits.delete(k);
    }
  }
  return recent.length > RATE_MAX;
}

const hashIp = (ip: string) =>
  createHash("sha256").update(`${ip}:${process.env.ENQUIRY_SALT ?? "bgd"}`).digest("hex").slice(0, 32);

async function persist(record: Record<string, unknown>) {
  await mkdir(STORE_DIR, { recursive: true });
  await appendFile(STORE_FILE, `${JSON.stringify(record)}\n`, "utf8");
}

export async function POST(request: Request) {
  let payload: EnquiryInput & { elapsedMs?: number };

  try {
    payload = await request.json();
  } catch {
    return NextResponse.json(
      { ok: false, message: "We could not read that request. Please try again." },
      { status: 400 },
    );
  }

  // Bot checks: filled honeypot or an implausibly fast submission.
  if (payload.company?.trim()) {
    return NextResponse.json({ ok: true, message: "Thank you." }, { status: 200 });
  }
  if (typeof payload.elapsedMs === "number" && payload.elapsedMs < 1500) {
    return NextResponse.json(
      { ok: false, message: "That was a little too quick. Please review your details and submit again." },
      { status: 400 },
    );
  }

  const forwarded = request.headers.get("x-forwarded-for") ?? "";
  const ip = forwarded.split(",")[0]?.trim() || request.headers.get("x-real-ip") || "unknown";
  if (rateLimited(hashIp(ip))) {
    return NextResponse.json(
      {
        ok: false,
        message:
          "You have sent several enquiries already. Please call or WhatsApp us so we can pick up your project.",
      },
      { status: 429 },
    );
  }

  const { ok, errors, data } = validateEnquiry(payload);
  if (!ok || !data) {
    return NextResponse.json(
      { ok: false, message: "Please check the highlighted fields and try again.", errors },
      { status: 422 },
    );
  }

  const record = {
    ...data,
    receivedAt: new Date().toISOString(),
    source: "website-enquiry-form",
  };

  let stored = false;
  try {
    await persist(record);
    stored = true;
  } catch (error) {
    console.error("[enquiries] Could not write to local store:", error);
  }

  let forwardedOk = false;
  let forwardError: string | undefined;
  const webhook = process.env.ENQUIRY_WEBHOOK_URL;

  if (webhook) {
    try {
      const response = await fetch(webhook, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          ...(process.env.ENQUIRY_WEBHOOK_TOKEN
            ? { Authorization: `Bearer ${process.env.ENQUIRY_WEBHOOK_TOKEN}` }
            : {}),
        },
        body: JSON.stringify(record),
        signal: AbortSignal.timeout(10_000),
      });
      forwardedOk = response.ok;
      if (!response.ok) forwardError = `Webhook responded ${response.status}`;
    } catch (error) {
      forwardError = error instanceof Error ? error.message : "Webhook request failed";
      console.error("[enquiries] Webhook delivery failed:", forwardError);
    }
  }

  if (forwardError) console.warn("[enquiries] Delivery issue:", forwardError);

  if (!stored && !forwardedOk) {
    return NextResponse.json(
      {
        ok: false,
        message:
          "Your enquiry could not be saved right now. Please call or WhatsApp us on 0905 502 1959 and we will respond straight away.",
      },
      { status: 500 },
    );
  }

  return NextResponse.json({
    ok: true,
    message: "Thank you — your enquiry has been received.",
    delivered: forwardedOk ? "webhook" : "stored",
  });
}

/** Lightweight admin read endpoint, protected by a bearer token. */
export async function GET(request: Request) {
  const token = process.env.ENQUIRY_ADMIN_TOKEN;
  if (!token) {
    return NextResponse.json({ ok: false, message: "Not available." }, { status: 404 });
  }
  if (request.headers.get("authorization") !== `Bearer ${token}`) {
    return NextResponse.json({ ok: false, message: "Unauthorised." }, { status: 401 });
  }

  try {
    const { readFile } = await import("node:fs/promises");
    const content = await readFile(STORE_FILE, "utf8");
    const rows = content
      .split("\n")
      .filter(Boolean)
      .map((line) => JSON.parse(line));
    return NextResponse.json({ ok: true, count: rows.length, rows });
  } catch {
    return NextResponse.json({ ok: true, count: 0, rows: [] });
  }
}
