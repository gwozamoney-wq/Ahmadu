"use client";

import { useEffect } from "react";
import Link from "next/link";
import { Icon } from "@/components/Icon";
import { primaryPhone, telHref } from "@/lib/site";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error("[app] Unexpected error:", error);
  }, [error]);

  return (
    <section className="relative isolate flex min-h-[80svh] items-center overflow-hidden bg-navy-950 pb-16 pt-32 text-white">
      <div className="absolute inset-0 blueprint-grid opacity-70" aria-hidden="true" />
      <div className="container-x relative text-center">
        <span className="mx-auto grid h-14 w-14 place-items-center rounded-full border border-gold-400/40 bg-white/5 text-gold-300">
          <Icon name="shield" size={24} />
        </span>
        <h1 className="display-2 mt-6 !text-white">Something went wrong</h1>
        <p className="mx-auto mt-4 max-w-md text-sm leading-relaxed text-white/60">
          This page could not load properly. Please try again — if it keeps happening, call us on{" "}
          {primaryPhone.display} and we will help you directly.
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-2.5">
          <button type="button" onClick={reset} className="btn-gold">
            Try Again
          </button>
          <Link href="/" className="btn-ghost-light">
            Back to Home
          </Link>
          <a href={telHref(primaryPhone)} className="btn-ghost-light">
            <Icon name="phone" size={15} />
            Call Us
          </a>
        </div>
      </div>
    </section>
  );
}
