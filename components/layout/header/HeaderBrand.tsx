
import { cn } from "@/lib/utils";
import { imageList } from "@/public/images_list";
import Image from "next/image";
import Link from "next/link";

type HeaderBrandProps = {
  isOverlayStyle: boolean;
};

export function HeaderBrand({ isOverlayStyle }: HeaderBrandProps) {
  return (
    <Link href="/" className="group flex min-w-0 items-center gap-3">
      <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/90 shadow-[0_10px_24px_rgba(37,99,235,0.18)] ring-1 ring-blue-100/80 transition-transform duration-300 group-hover:scale-[1.03]">
        <Image
          src={imageList.som_logo.src}
          width={100}
          height={100}
          unoptimized
          alt="SOM Logo"
          className="h-9 w-auto"
        />
      </div>

      <div className="hidden min-w-0 sm:block">
        <p
          className={cn(
            "text-[0.65rem] font-semibold uppercase tracking-[0.28em]",
            isOverlayStyle ? "text-white/70" : "text-blue-600/75"
          )}
        >
          Loveworld
        </p>
        <p
          className={cn(
            "truncate text-sm font-semibold",
            isOverlayStyle ? "text-white" : "text-slate-900"
          )}
        >
          Sons of Ministry
        </p>
      </div>
    </Link>
  );
}
