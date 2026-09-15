import { cn } from "@/lib/utils";
import { isVideoFile } from "@/lib/content";

/** Plays an uploaded video file natively, or embeds a player link (Vimeo, YouTube) in an iframe. */
export function PostVideo({
  url,
  title,
  poster,
  className,
}: {
  url: string;
  title: string;
  poster?: string | null;
  className?: string;
}) {
  if (isVideoFile(url)) {
    return (
      <video
        src={url}
        poster={poster ?? undefined}
        controls
        playsInline
        preload="metadata"
        aria-label={title}
        className={cn("h-full w-full bg-black object-contain", className)}
      />
    );
  }
  return (
    <iframe
      src={url}
      allow="autoplay; fullscreen; picture-in-picture"
      allowFullScreen
      title={title}
      className={cn("h-full w-full", className)}
    ></iframe>
  );
}
