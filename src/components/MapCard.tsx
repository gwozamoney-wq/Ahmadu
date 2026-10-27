import { Icon } from "./Icon";
import { site } from "@/lib/site";

/**
 * Location card.
 *
 * A live map embed is only shown when NEXT_PUBLIC_MAP_EMBED_URL is set to a
 * verified Google Maps embed URL for the exact business pin. Until then the
 * card shows the written address plus a Maps search link and clearly says the
 * pin is approximate — no fake "we are here" marker.
 */
export function MapCard({ className = "" }: { className?: string }) {
  const embed = process.env.NEXT_PUBLIC_MAP_EMBED_URL;

  return (
    <div className={`overflow-hidden rounded-2xl border border-navy-100 bg-white shadow-card ${className}`}>
      <div className="relative h-52 bg-mist sm:h-60">
        {embed ? (
          <iframe
            src={embed}
            title={`Map showing the location of ${site.name}`}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="h-full w-full border-0 grayscale-[15%]"
            allowFullScreen
          />
        ) : (
          <>
            <div className="absolute inset-0 blueprint-grid opacity-90" aria-hidden="true" />
            <div
              className="absolute inset-0 bg-[radial-gradient(circle_at_50%_45%,rgba(212,175,101,0.18),transparent_60%)]"
              aria-hidden="true"
            />
            <svg
              className="absolute inset-0 h-full w-full text-navy-200/70"
              aria-hidden="true"
              preserveAspectRatio="none"
              viewBox="0 0 100 100"
            >
              <path d="M0 62 H100" stroke="currentColor" strokeWidth="0.7" />
              <path d="M0 40 H100" stroke="currentColor" strokeWidth="0.5" />
              <path d="M28 0 V100" stroke="currentColor" strokeWidth="0.6" />
              <path d="M68 0 V100" stroke="currentColor" strokeWidth="0.5" />
              <path d="M0 88 L100 22" stroke="currentColor" strokeWidth="0.4" />
            </svg>
            <div className="absolute inset-0 flex flex-col items-center justify-center px-6 text-center">
              <span className="grid h-12 w-12 place-items-center rounded-full bg-navy-900 text-gold-400 shadow-lift ring-4 ring-gold-400/20">
                <Icon name="pin" size={20} />
              </span>
              <p className="mt-3 max-w-[16rem] text-[12.5px] font-semibold leading-snug text-navy-800">
                {site.address.street}
              </p>
              <p className="mt-0.5 text-[11px] uppercase tracking-[0.14em] text-navy-500">
                {site.address.city}, {site.address.country}
              </p>
            </div>
          </>
        )}
      </div>

      <div className="space-y-3 p-5">
        <div className="flex items-start gap-3">
          <Icon name="pin" size={16} className="mt-0.5 shrink-0 text-gold-700" />
          <address className="not-italic text-[13px] leading-relaxed text-navy-600">
            <span className="font-semibold text-navy-800">{site.name}</span>
            <br />
            {site.address.full}
          </address>
        </div>
        <div className="flex flex-wrap items-center gap-2">
          <a
            href={site.map.link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 rounded-full border border-navy-200 px-3.5 py-2 text-[11px] font-semibold uppercase tracking-[0.1em] text-navy-700 transition-colors hover:border-gold-400 hover:text-gold-700"
          >
            <Icon name="pin" size={13} />
            Open in Google Maps
          </a>
          <span className="text-[10.5px] leading-tight text-navy-500">
            {embed ? "Verified location pin" : "Approximate area — call us to confirm the exact office pin"}
          </span>
        </div>
      </div>
    </div>
  );
}
