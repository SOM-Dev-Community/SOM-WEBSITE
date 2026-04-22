type MissionBlockProps = {
  title: string;
  description: string;
  points: string[];
};

export function MissionBlock({
  title,
  description,
  points,
}: MissionBlockProps) {
  return (
    <div className="rounded-4xl border border-slate-200/80 bg-gradient-to-br from-white via-white to-sky-50/80 p-8 shadow-[0_20px_70px_-40px_rgba(15,23,42,0.35)] sm:p-10 lg:p-12">
      <div className="max-w-3xl">
        <p className="text-sm font-semibold uppercase tracking-[0.22em] text-sky-700">
          Mission
        </p>
        <h3 className="mt-4 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
          {title}
        </h3>
        <p className="mt-5 text-base leading-8 text-slate-600 text-balance">
          {description}
        </p>
      </div>

      <ul className="mt-8 space-y-4">
        {points.map((point, index) => (
          <li
            key={point}
            className="flex gap-4 rounded-2xl border border-slate-200/70 bg-white/90 px-5 py-4 shadow-sm shadow-slate-200/40"
          >
            <span className="mt-1 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-sky-100 text-sm font-semibold text-sky-700">
              {index + 1}
            </span>
            <span className="text-sm leading-7 text-slate-600 sm:text-base">
              {point}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}
