import Link from "next/link";

type LogoProps = {
  tone?: "dark" | "light";
  className?: string;
};

export default function Logo({ tone = "dark", className = "" }: LogoProps) {
  const isLight = tone === "light";

  return (
    <Link
      href="/"
      className={`group inline-flex items-center gap-2.5 ${className}`}
      aria-label="RNOW Industrial Supply — home"
    >
      <span
        className="flex h-9 w-9 shrink-0 items-center justify-center rounded-sm bg-accent text-white"
        aria-hidden="true"
      >
        <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none">
          <path
            d="M4 20V4h8a5 5 0 0 1 0 10h-4M12 14l6 6"
            stroke="currentColor"
            strokeWidth="2.4"
            strokeLinecap="square"
          />
        </svg>
      </span>
      <span className="flex flex-col leading-none">
        <span
          className={`text-lg font-bold tracking-tight ${isLight ? "text-white" : "text-ink"}`}
        >
          RNOW
        </span>
        <span
          className={`text-[0.6rem] font-semibold uppercase tracking-[0.16em] ${
            isLight ? "text-gray-300" : "text-gray-500"
          }`}
        >
          Industrial Supply
        </span>
      </span>
    </Link>
  );
}
