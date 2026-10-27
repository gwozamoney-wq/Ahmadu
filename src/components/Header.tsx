"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useCallback, useEffect, useState } from "react";
import { Logo } from "./Logo";
import { Icon } from "./Icon";
import { navLinks, primaryPhone, secondaryPhone, site, telHref, waHref } from "@/lib/site";

export function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const isHome = pathname === "/";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  const solid = scrolled || !isHome || open;
  const close = useCallback(() => setOpen(false), []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ease-premium ${
        solid
          ? "border-b border-navy-100/80 bg-white/95 shadow-[0_10px_30px_-24px_rgba(7,21,36,0.5)] backdrop-blur-xl"
          : "border-b border-white/15 bg-gradient-to-b from-navy-950/70 to-transparent"
      }`}
    >
      <div className="container-x">
        <div className="flex h-[72px] items-center justify-between gap-4 sm:h-20">
          <Logo variant={solid ? "dark" : "light"} />

          {/* Desktop navigation */}
          <nav aria-label="Main navigation" className="hidden items-center gap-0.5 xl:flex">
            {navLinks.map((link) => {
              const active =
                link.href === "/" ? pathname === "/" : pathname.startsWith(link.href);
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  aria-current={active ? "page" : undefined}
                  className={`relative rounded-full px-3.5 py-2 text-[12.5px] font-semibold uppercase tracking-[0.09em] transition-colors duration-300 ${
                    solid
                      ? active
                        ? "text-navy-900"
                        : "text-navy-500 hover:text-navy-900"
                      : active
                        ? "text-white"
                        : "text-white/75 hover:text-white"
                  }`}
                >
                  {link.label}
                  <span
                    className={`absolute inset-x-3.5 -bottom-0.5 h-[2px] rounded-full bg-gold-500 transition-transform duration-300 ease-premium ${
                      active ? "scale-x-100" : "scale-x-0"
                    }`}
                  />
                </Link>
              );
            })}
          </nav>

          <div className="flex items-center gap-2.5">
            <a
              href={telHref(primaryPhone)}
              className={`hidden items-center gap-2 rounded-full px-3.5 py-2 text-[12.5px] font-semibold transition-colors lg:flex ${
                solid ? "text-navy-700 hover:text-gold-700" : "text-white/85 hover:text-white"
              }`}
            >
              <Icon name="phone" size={15} className="text-gold-500" />
              {primaryPhone.display}
            </a>
            <Link href="/contact#quote" className="btn-gold btn-sm hidden sm:inline-flex">
              Get a Free Quote
              <Icon name="arrow" size={15} />
            </Link>

            <button
              type="button"
              onClick={() => setOpen((value) => !value)}
              aria-expanded={open}
              aria-controls="mobile-menu"
              aria-label={open ? "Close menu" : "Open menu"}
              className={`grid h-11 w-11 place-items-center rounded-xl border transition-colors xl:hidden ${
                solid
                  ? "border-navy-200 text-navy-800 hover:border-navy-800"
                  : "border-white/30 text-white hover:bg-white/10"
              }`}
            >
              <Icon name={open ? "close" : "menu"} size={20} />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile drawer */}
      <div
        id="mobile-menu"
        className={`xl:hidden ${open ? "pointer-events-auto" : "pointer-events-none"}`}
        aria-hidden={!open}
        inert={!open}
      >
        <div
          onClick={close}
          className={`fixed inset-0 top-[72px] bg-navy-950/50 backdrop-blur-[2px] transition-opacity duration-300 sm:top-20 ${
            open ? "opacity-100" : "opacity-0"
          }`}
          aria-hidden="true"
        />
        <div
          className={`fixed inset-x-0 top-[72px] max-h-[calc(100dvh-72px)] overflow-y-auto border-t border-gold-400/20 bg-navy-900 px-5 pb-8 pt-4 transition-all duration-[400ms] ease-premium sm:top-20 sm:max-h-[calc(100dvh-80px)] sm:px-8 ${
            open ? "translate-y-0 opacity-100" : "-translate-y-3 opacity-0"
          }`}
        >
          <nav aria-label="Mobile navigation" className="flex flex-col">
            {navLinks.map((link, index) => {
              const active =
                link.href === "/" ? pathname === "/" : pathname.startsWith(link.href);
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={close}
                  className={`flex items-center justify-between border-b border-white/10 py-3.5 font-display text-base font-medium transition-colors ${
                    active ? "text-gold-400" : "text-white/85 hover:text-white"
                  }`}
                >
                  <span className="flex items-center gap-3">
                    <span className="text-[10px] font-sans font-semibold tracking-[0.18em] text-gold-500/60">
                      0{index + 1}
                    </span>
                    {link.label}
                  </span>
                  <Icon name="arrow" size={16} className="text-gold-500/70" />
                </Link>
              );
            })}
          </nav>

          <Link href="/contact#quote" onClick={close} className="btn-gold mt-6 w-full">
            Get a Free Quote
            <Icon name="arrow" size={16} />
          </Link>

          <div className="mt-6 grid gap-2.5 sm:grid-cols-2">
            {[primaryPhone, secondaryPhone].map((phone) => (
              <a
                key={phone.tel}
                href={telHref(phone)}
                className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white transition-colors hover:border-gold-400/50 hover:bg-white/10"
              >
                <Icon name="phone" size={16} className="text-gold-400" />
                <span className="flex flex-col leading-tight">
                  <span className="text-[9.5px] uppercase tracking-[0.18em] text-white/45">
                    Call {phone.label}
                  </span>
                  <span className="font-semibold">{phone.display}</span>
                </span>
              </a>
            ))}
          </div>

          <div className="mt-4 flex flex-col gap-3 text-xs text-white/55">
            <a
              href={waHref(primaryPhone)}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-[#25D366]"
            >
              <Icon name="whatsapp" size={15} />
              Chat on WhatsApp
            </a>
            <p className="flex items-start gap-2">
              <Icon name="pin" size={14} className="mt-0.5 shrink-0 text-gold-500" />
              {site.address.full}
            </p>
          </div>
        </div>
      </div>
    </header>
  );
}
