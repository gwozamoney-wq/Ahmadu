import type { SVGProps } from "react";
import type { IconName } from "@/lib/content";

type Props = SVGProps<SVGSVGElement> & { name: IconName; size?: number };

const paths: Record<IconName, React.ReactNode> = {
  blueprint: (
    <>
      <rect x="3" y="4" width="18" height="16" rx="1.5" />
      <path d="M3 9.5h18M9.5 9.5V20M9.5 14.5h7" />
    </>
  ),
  crane: (
    <>
      <path d="M3 21h18" />
      <path d="M6.5 21V4.5h11" />
      <path d="M6.5 4.5 17.5 9" />
      <path d="M14.5 9v4.5" />
      <path d="M12.2 13.5h4.6" />
    </>
  ),
  house: (
    <>
      <path d="M3 10.5 12 3l9 7.5" />
      <path d="M5.5 9.4V21h13V9.4" />
      <path d="M9.75 21v-6.2h4.5V21" />
    </>
  ),
  sofa: (
    <>
      <path d="M5 13V8.5A2.5 2.5 0 0 1 7.5 6h9A2.5 2.5 0 0 1 19 8.5V13" />
      <path d="M2.5 14.5A2.5 2.5 0 0 1 5 12h14a2.5 2.5 0 0 1 2.5 2.5V18h-19z" />
      <path d="M6 18v2M18 18v2" />
    </>
  ),
  refresh: (
    <>
      <path d="M20.5 12a8.5 8.5 0 1 1-2.8-6.3" />
      <path d="M21 4.5V10h-5.4" />
    </>
  ),
  compass: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="m15.6 8.4-2.1 5.1-5.1 2.1 2.1-5.1z" />
    </>
  ),
  wallet: (
    <>
      <path d="M3 8.5V7a2 2 0 0 1 2-2h11" />
      <rect x="3" y="8.5" width="18" height="11.5" rx="2.5" />
      <circle cx="16.5" cy="14.25" r="1.25" />
    </>
  ),
  sparkle: (
    <>
      <path d="M11 3.5l1.9 5.1 5.1 1.9-5.1 1.9L11 17.5 9.1 12.4 4 10.5l5.1-1.9z" />
      <path d="M18.2 15.2l.7 2 2 .7-2 .7-.7 2-.7-2-2-.7 2-.7z" />
    </>
  ),
  shield: (
    <>
      <path d="M12 3l7.5 3v6c0 4.4-3.1 8-7.5 9.4C7.6 20 4.5 16.4 4.5 12V6z" />
      <path d="m9 12 2.2 2.2L15.5 10" />
    </>
  ),
  heart: (
    <path d="M12 20.2S4.5 15.8 4.5 10.7A4.3 4.3 0 0 1 12 7.6a4.3 4.3 0 0 1 7.5 3.1c0 5.1-7.5 9.5-7.5 9.5z" />
  ),
  chat: (
    <>
      <path d="M20.5 14.8a3 3 0 0 1-3 3H8.4L4 21V6.2a3 3 0 0 1 3-3h10.5a3 3 0 0 1 3 3z" />
      <path d="M8.2 8.8h8M8.2 12.4h5.2" />
    </>
  ),
  person: (
    <>
      <circle cx="12" cy="8" r="4" />
      <path d="M4.5 21a7.5 7.5 0 0 1 15 0" />
    </>
  ),
  document: (
    <>
      <path d="M14 3H7.5A2.5 2.5 0 0 0 5 5.5v13A2.5 2.5 0 0 0 7.5 21h9a2.5 2.5 0 0 0 2.5-2.5V8z" />
      <path d="M13.8 3v5.2H19" />
      <path d="M8.8 13h6.4M8.8 16.6h4.2" />
    </>
  ),
  phone: (
    <path d="M6.6 3.5h2.2l1.6 4-2 1.4a11.4 11.4 0 0 0 5.7 5.7l1.4-2 4 1.6v2.2a2.6 2.6 0 0 1-2.8 2.6A15.6 15.6 0 0 1 4 6.3a2.6 2.6 0 0 1 2.6-2.8z" />
  ),
  whatsapp: (
    <path
      d="M12.04 2.5a9.4 9.4 0 0 0-8.1 14.1L2.5 21.5l5.03-1.4A9.4 9.4 0 1 0 12.04 2.5zm0 1.7a7.7 7.7 0 1 1-3.9 14.3l-.4-.24-2.9.8.8-2.8-.25-.42A7.7 7.7 0 0 1 12.04 4.2zm-3.5 3.9c-.2 0-.5.07-.73.34-.24.27-.9.86-.9 2.1s.92 2.43 1.05 2.6c.13.17 1.78 2.83 4.35 3.85 2.13.84 2.56.67 3.02.63.46-.04 1.5-.61 1.71-1.2.21-.6.21-1.1.15-1.21-.06-.11-.23-.17-.48-.3-.24-.12-1.5-.74-1.73-.83-.23-.08-.4-.12-.57.13-.17.24-.65.82-.8 1-.14.16-.29.19-.53.06-.24-.12-1.04-.38-1.98-1.22-.73-.65-1.23-1.46-1.37-1.7-.14-.25-.02-.38.1-.5.12-.13.25-.3.38-.45.12-.15.16-.26.24-.43.08-.17.04-.32-.02-.45-.06-.12-.54-1.35-.75-1.85-.2-.48-.4-.42-.56-.42h-.53z"
      strokeWidth="0"
    />
  ),
  pin: (
    <>
      <path d="M12 21.2s7.2-6.3 7.2-11.2a7.2 7.2 0 1 0-14.4 0C4.8 14.9 12 21.2 12 21.2z" />
      <circle cx="12" cy="9.8" r="2.6" />
    </>
  ),
  clock: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7.2v5.3l3.4 2" />
    </>
  ),
  arrow: (
    <>
      <path d="M4.5 12h15" />
      <path d="m13.5 6 6 6-6 6" />
    </>
  ),
  check: <path d="m4.8 12.6 4.8 4.8L19.4 6.6" />,
  close: <path d="M6.2 6.2l11.6 11.6M17.8 6.2 6.2 17.8" />,
  menu: <path d="M4 7h16M4 12h16M4 17h16" />,
  quote: (
    <>
      <path d="M9.6 6.5H6.8A2.8 2.8 0 0 0 4 9.3v3a2 2 0 0 0 2 2h1.7v.9a2.6 2.6 0 0 1-2.4 2.6" />
      <path d="M19.6 6.5h-2.8a2.8 2.8 0 0 0-2.8 2.8v3a2 2 0 0 0 2 2h1.7v.9a2.6 2.6 0 0 1-2.4 2.6" />
    </>
  ),
  star: <path d="m12 3.6 2.55 5.35 5.85.79-4.28 4.16 1.06 5.85L12 16.9l-5.18 2.85 1.06-5.85-4.28-4.16 5.85-.79z" />,
};

export function Icon({ name, size = 24, ...rest }: Props) {
  const filled = name === "whatsapp" || name === "phone" || name === "heart" || name === "star";
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill={name === "whatsapp" || name === "star" ? "currentColor" : "none"}
      stroke={name === "whatsapp" ? "none" : "currentColor"}
      strokeWidth={1.6}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
      {...rest}
      className={rest.className}
    >
      {paths[name]}
      {filled && null}
    </svg>
  );
}
