import { type ReactNode } from "react";
import { cn } from "@/lib/utils";

type SectionWrapperProps = {
  children: ReactNode;
  className?: string;
};

export function SectionWrapper({ children, className }: SectionWrapperProps) {
  return (
    <section
      className={cn(
        "relative isolate overflow-hidden bg-gradient-to-b from-slate-50 via-white to-sky-50/70 py-24 sm:py-28 lg:py-32",
        className
      )}
    >
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent" />
      <div className="absolute left-1/2 top-16 -z-10 h-56 w-[36rem] -translate-x-1/2 rounded-full bg-sky-100/60 blur-3xl" />
      <div className="absolute inset-x-0 bottom-0 -z-10 h-40 bg-gradient-to-b from-transparent to-white/70" />

      <div className="mx-auto flex w-full max-w-6xl flex-col gap-14 px-6 sm:px-10 lg:px-16">
        {children}
      </div>
    </section>
  );
}
