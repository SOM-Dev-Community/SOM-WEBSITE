"use client";

import { TvMinimalPlay } from "lucide-react";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Link from "next/link";

type HeaderWatchLiveButtonProps = {
  className?: string;
};

export function HeaderWatchLiveButton({
  className,
}: HeaderWatchLiveButtonProps) {
  return (
    <Button
      asChild
      className={cn(
        "h-11 rounded-full bg-gradient-to-r from-blue-600 via-blue-500 to-sky-400 text-white shadow-[0_14px_30px_rgba(37,99,235,0.22)] hover:from-blue-700 hover:via-blue-600 hover:to-sky-500",
        className
      )}
    >
      <Link href="/events">
        <TvMinimalPlay className="size-4" />
        Watch Live
      </Link>
    </Button>
  );
}
