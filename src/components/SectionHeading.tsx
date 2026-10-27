import type { ReactNode } from "react";

type Props = {
  eyebrow: string;
  title: ReactNode;
  description?: ReactNode;
  align?: "left" | "center";
  light?: boolean;
  className?: string;
  children?: ReactNode;
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  light = false,
  className = "",
  children,
}: Props) {
  const centered = align === "center";
  return (
    <div
      className={`${centered ? "mx-auto max-w-3xl text-center" : "max-w-3xl"} ${className}`}
    >
      <p className={`eyebrow ${light ? "eyebrow-light" : ""} ${centered ? "eyebrow-center" : ""}`}>
        {eyebrow}
      </p>
      <h2
        className={`display-2 mt-4 ${light ? "!text-white" : ""}`}
      >
        {title}
      </h2>
      {description && (
        <p className={`mt-5 ${light ? "lede !text-white/65" : "lede"}`}>{description}</p>
      )}
      {children}
    </div>
  );
}
