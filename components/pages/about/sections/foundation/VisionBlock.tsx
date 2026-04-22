type VisionBlockProps = {
  title: string;
  description: string;
};

export function VisionBlock({ title, description }: VisionBlockProps) {
  return (
    <div className="mx-auto max-w-4xl rounded-[2rem] border border-sky-200/80 bg-white/80 p-8 text-center shadow-[0_18px_45px_-34px_rgba(14,116,144,0.35)] backdrop-blur-sm sm:p-10">
      <div className="mx-auto h-1 w-16 rounded-full bg-gradient-to-r from-sky-500 to-indigo-500" />
      <p className="mt-5 text-sm font-semibold uppercase tracking-[0.22em] text-sky-700">
        Vision
      </p>
      <h3 className="mt-4 text-3xl font-semibold tracking-tight text-slate-900 sm:text-[2.5rem]">
        {title}
      </h3>
      <p className="mt-6 text-pretty text-lg leading-8 text-slate-600 sm:text-xl">
        {description}
      </p>
    </div>
  );
}
