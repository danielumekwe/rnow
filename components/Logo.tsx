import Image from "next/image";
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
      className={`group inline-flex items-center ${className}`}
      aria-label="RNOW Industrial Supply — home"
    >
      <Image
        src="/images/logo.png"
        alt="RNOW"
        width={192}
        height={108}
        priority
        className={`h-[106px] w-auto sm:h-[114px] ${isLight ? "brightness-0 invert" : ""}`}
      />
      <span className="sr-only">Industrial Supply</span>
    </Link>
  );
}
