type PurposeBlockProps = {
  title: string;
  description: string;
};

export function PurposeBlock({ title, description }: PurposeBlockProps) {
  return (
    <div className="mx-auto max-w-3xl text-center">
      <p className="text-sm font-semibold uppercase tracking-[0.22em] text-slate-500">
        Purpose
      </p>
      <h3 className="mt-4 text-3xl font-semibold tracking-tight text-slate-900 sm:text-[2.5rem]">
        {title}
      </h3>
      <p className="mt-6 text-pretty text-base leading-8 text-slate-600 sm:text-lg">
        {description}
      </p>
    </div>
  );
}
