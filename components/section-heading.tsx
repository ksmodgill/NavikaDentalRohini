type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description: string;
  align?: "left" | "center";
  tone?: "light" | "dark";
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
  tone = "dark"
}: SectionHeadingProps) {
  const eyebrowClass = tone === "light" ? "text-secondary" : "text-primary";
  const titleClass = tone === "light" ? "text-white" : "text-text-primary";
  const descriptionClass =
    tone === "light" ? "text-secondary-light" : "text-text-secondary";

  return (
    <div
      className={
        align === "center"
          ? "mx-auto mb-7 max-w-3xl text-center lg:mb-8"
          : "mb-7 max-w-3xl lg:mb-8"
      }
    >
      <p className={`mb-2 font-body text-xs font-medium uppercase tracking-[0.2em] sm:text-sm ${eyebrowClass}`}>
        {eyebrow}
      </p>
      <h2 className={`max-w-3xl font-heading text-xl font-bold leading-normal tracking-tight text-balance md:text-2xl lg:text-3xl ${titleClass}`}>
        {title}
      </h2>
      <p className={`mt-4 max-w-2xl font-body text-base font-normal leading-normal lg:text-lg ${align === "center" ? "mx-auto" : ""} ${descriptionClass}`}>
        {description}
      </p>
    </div>
  );
}
