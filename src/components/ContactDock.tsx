"use client";

import { useEffect, useRef, useState } from "react";
import { Icon } from "./Icon";
import { primaryPhone, secondaryPhone, site, telHref, waHref } from "@/lib/site";

/**
 * Floating contact dock, present on every page.
 * Primary action opens WhatsApp with the pre-filled project message.
 * A second WhatsApp option and click-to-call buttons are one tap away.
 */
export function ContactDock() {
  const [open, setOpen] = useState(false);
  const wrapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    const onClick = (event: MouseEvent) => {
      if (wrapRef.current && !wrapRef.current.contains(event.target as Node)) setOpen(false);
    };
    document.addEventListener("keydown", onKey);
    document.addEventListener("mousedown", onClick);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.removeEventListener("mousedown", onClick);
    };
  }, []);

  return (
    <div ref={wrapRef} className="fixed bottom-4 right-4 z-40 flex flex-col items-end gap-3 sm:bottom-6 sm:right-6">
      <div
        id="contact-dock-panel"
        className={`w-[min(20rem,calc(100vw-2rem))] origin-bottom-right overflow-hidden rounded-2xl border border-navy-100 bg-white shadow-lift transition-all duration-300 ease-premium ${
          open
            ? "pointer-events-auto translate-y-0 scale-100 opacity-100"
            : "pointer-events-none translate-y-2 scale-95 opacity-0"
        }`}
        aria-hidden={!open}
        inert={!open}
      >
        <div className="bg-navy-900 px-4 py-3.5">
          <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-gold-400">
            Talk to us directly
          </p>
          <p className="mt-1 text-sm font-medium text-white">
            We usually reply within business hours.
          </p>
        </div>
        <div className="divide-y divide-navy-100/80">
          {site.phones.map((phone, index) => (
            <a
              key={phone.whatsapp}
              href={waHref(phone)}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 px-4 py-3.5 transition-colors hover:bg-mist"
            >
              <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-[#25D366]/15 text-[#1BAA55]">
                <Icon name="whatsapp" size={17} />
              </span>
              <span className="min-w-0 flex-1">
                <span className="block text-[13px] font-semibold text-navy-800">
                  WhatsApp {index === 0 ? "our main line" : "our second line"}
                </span>
                <span className="block text-xs text-navy-500">{phone.display}</span>
              </span>
              <Icon name="arrow" size={15} className="text-navy-300" />
            </a>
          ))}
          {site.phones.map((phone) => (
            <a
              key={phone.tel}
              href={telHref(phone)}
              className="flex items-center gap-3 px-4 py-3.5 transition-colors hover:bg-mist"
            >
              <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-navy-800/10 text-navy-700">
                <Icon name="phone" size={15} />
              </span>
              <span className="min-w-0 flex-1">
                <span className="block text-[13px] font-semibold text-navy-800">
                  Call {phone.display}
                </span>
                <span className="block text-xs text-navy-500">Tap to dial</span>
              </span>
              <Icon name="arrow" size={15} className="text-navy-300" />
            </a>
          ))}
        </div>
        <div className="px-4 py-3">
          <p className="text-[11px] leading-relaxed text-navy-500">
            {site.address.street}, {site.address.city}
          </p>
        </div>
      </div>

      <div className="flex items-center gap-2">
        <a
          href={waHref(primaryPhone)}
          target="_blank"
          rel="noopener noreferrer"
          className="group hidden items-center gap-2 rounded-full bg-white px-4 py-3 text-xs font-semibold text-navy-800 shadow-lift transition-transform duration-300 hover:-translate-y-0.5 sm:inline-flex"
        >
          <Icon name="whatsapp" size={16} className="text-[#25D366]" />
          Chat on WhatsApp
        </a>
        <button
          type="button"
          onClick={() => setOpen((value) => !value)}
          aria-expanded={open}
          aria-controls="contact-dock-panel"
          aria-label={open ? "Close contact options" : "Open contact options — WhatsApp and phone"}
          className="relative grid h-14 w-14 place-items-center rounded-full bg-[#25D366] text-white shadow-[0_16px_36px_-12px_rgba(37,211,102,0.7)] transition-transform duration-300 ease-premium hover:scale-105 active:scale-95"
        >
          <Icon name={open ? "close" : "whatsapp"} size={open ? 22 : 26} className="relative" />
        </button>
      </div>
    </div>
  );
}
