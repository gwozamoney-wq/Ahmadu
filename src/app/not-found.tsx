import Link from "next/link";
import { Icon } from "@/components/Icon";
import { navLinks } from "@/lib/site";

export default function NotFound() {
  return (
    <section className="relative isolate flex min-h-[80svh] items-center overflow-hidden bg-navy-950 pb-16 pt-32">
      <div className="absolute inset-0 blueprint-grid opacity-70" aria-hidden="true" />
      <div
        className="pointer-events-none absolute left-1/2 top-1/3 h-72 w-72 -translate-x-1/2 rounded-full bg-gold-500/10 blur-[120px]"
        aria-hidden="true"
      />
      <div className="container-x relative text-center">
        <p className="font-display text-[5rem] font-bold leading-none text-transparent [-webkit-text-stroke:1.5px_rgba(212,175,101,0.5)] sm:text-[7rem]">
          404
        </p>
        <h1 className="display-2 mt-2 !text-white">This page is not built yet</h1>
        <p className="mx-auto mt-4 max-w-md text-sm leading-relaxed text-white/60">
          The page you were looking for has moved or never existed. Try one of the links below,
          or contact us and we will point you in the right direction.
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-2.5">
          <Link href="/" className="btn-gold">
            Back to Home
            <Icon name="arrow" size={16} />
          </Link>
          <Link href="/contact" className="btn-ghost-light">
            Contact Us
          </Link>
        </div>
        <nav aria-label="Site links" className="mt-10">
          <ul className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-[11px] uppercase tracking-[0.14em] text-white/45">
            {navLinks.slice(1).map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="transition-colors hover:text-gold-300">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </section>
  );
}
