type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  tone?: "dark" | "light";
  as?: "h2" | "h3";
};

export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  tone = "dark",
  as: Tag = "h2",
}: SectionHeadingProps) {
  const isCenter = align === "center";
  const isLight = tone === "light";

  return (
    <div className={`max-w-2xl ${isCenter ? "mx-auto text-center" : ""}`}>
      {eyebrow && (
        <p
          className={`mb-3 text-sm font-semibold uppercase tracking-[0.14em] ${
            isLight ? "text-accent-light" : "text-accent"
          }`}
        >
          {eyebrow}
        </p>
      )}
      <Tag
        className={`text-3xl font-semibold leading-[1.08] tracking-tight sm:text-4xl md:text-[2.75rem] ${
          isLight ? "text-white" : "text-ink"
        }`}
      >
        {title}
      </Tag>
      {description && (
        <p
          className={`mt-5 text-base leading-relaxed sm:text-lg ${
            isLight ? "text-gray-200" : "text-gray-600"
          }`}
        >
          {description}
        </p>
      )}
    </div>
  );
}
