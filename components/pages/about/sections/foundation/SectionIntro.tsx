type SectionIntroProps = {
  label: string;
  title: string;
  description: string;
};

export function SectionIntro({
  label,
  title,
  description,
}: SectionIntroProps) {
  return (
    <div className="mx-auto max-w-3xl text-center">
      <p className="text-xs font-semibold uppercase tracking-[0.32em] text-sky-700 sm:text-sm">
        {label}
      </p>
      <h2 className="mt-5 text-balance text-4xl font-semibold tracking-tight text-slate-900 sm:text-5xl">
        {title}
      </h2>
      <p className="mt-5 text-pretty text-base leading-8 text-slate-600 sm:text-lg">
        {description}
      </p>
    </div>
  );
}
