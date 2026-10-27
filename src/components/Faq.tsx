export type FaqItem = { question: string; answer: string };

/**
 * Native <details> accordion — keyboard accessible and works without JS.
 */
export function Faq({ items, className = "" }: { items: FaqItem[]; className?: string }) {
  return (
    <div className={`divide-y divide-navy-100 overflow-hidden rounded-2xl border border-navy-100 bg-white ${className}`}>
      {items.map((item) => (
        <details key={item.question} className="group">
          <summary className="flex cursor-pointer list-none items-center justify-between gap-4 px-5 py-4 text-[13.5px] font-semibold text-navy-800 transition-colors hover:bg-mist/60 sm:px-6 sm:py-5">
            {item.question}
            <span
              className="relative grid h-7 w-7 shrink-0 place-items-center rounded-full border border-navy-200 text-navy-500 transition-all duration-300 group-open:rotate-45 group-open:border-gold-400 group-open:text-gold-700"
              aria-hidden="true"
            >
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round">
                <path d="M6 1v10M1 6h10" />
              </svg>
            </span>
          </summary>
          <div className="px-5 pb-5 -mt-1 text-[13px] leading-relaxed text-navy-500 sm:px-6">
            {item.answer}
          </div>
        </details>
      ))}
    </div>
  );
}
