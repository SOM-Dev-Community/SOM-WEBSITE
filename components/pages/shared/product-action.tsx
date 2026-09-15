import Link from "next/link";
import { Button } from "@/components/ui/button";
import type { Product } from "@/lib/content";
import { cn } from "@/lib/utils";
import { ArrowIcon, gradientButtonClass } from "./section-primitives";

/** The product's button, or a "Coming soon" label. Shared by the home page grid and the Explore page. */
export function ProductAction({
  product,
  className,
}: {
  product: Pick<Product, "href" | "actionLabel" | "availability">;
  className?: string;
}) {
  if (product.availability === "COMING_SOON" || !product.href) {
    return (
      <span
        className={cn(
          "inline-flex w-fit items-center rounded-full border border-slate-200 bg-slate-50 px-4 py-2 text-xs font-medium uppercase tracking-[0.2em] text-slate-500",
          className
        )}
      >
        Coming soon
      </span>
    );
  }

  const label = (
    <>
      <span>{product.actionLabel}</span>
      <ArrowIcon />
    </>
  );

  return (
    <Button asChild className={cn(gradientButtonClass, "py-5 px-6 text-sm", className)}>
      {product.href.startsWith("http") ? (
        <a href={product.href} target="_blank" rel="noopener noreferrer">
          {label}
        </a>
      ) : (
        <Link href={product.href}>{label}</Link>
      )}
    </Button>
  );
}
