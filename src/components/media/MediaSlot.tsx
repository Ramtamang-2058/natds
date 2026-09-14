import {useState} from "react";
import type {MediaSlotProps} from "@/types";

/**
 * Renders a poster image / optional video, and gracefully falls back to
 * generative CSS art when the asset file has not been added yet.
 *
 * To use real media: drop files in `public/images/` or `public/videos/` and
 * pass the same path (e.g. `/images/about.jpg`). See AGENTS.md → "Adding media".
 */
export function MediaSlot(props: MediaSlotProps) {
  const {src, alt = "", poster, className = "", priority = false} = props;
  const [failed, setFailed] = useState(false);

  if (failed || !src) {
    return (
      <div aria-hidden="true" className={`relative overflow-hidden bg-ink-900 ${className}`}>
        <div className="absolute inset-0 grid-constellation" />
        <div className="aurora-blob h-48 w-48 -top-10 -right-10 bg-[radial-gradient(circle,rgba(139,124,255,0.45),transparent_70%)]" />
        <div className="aurora-blob h-40 w-40 -bottom-10 -left-10 bg-[radial-gradient(circle,rgba(57,230,196,0.35),transparent_70%)]" />
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="font-display text-5xl font-bold text-transparent [-webkit-text-stroke:1px_rgba(139,124,255,0.35)]">
            NATDS
          </span>
        </div>
      </div>
    );
  }

  if (poster) {
    return (
      <video
        className={`object-cover ${className}`}
        src={src}
        poster={poster}
        autoPlay
        muted
        loop
        playsInline
        onError={() => setFailed(true)}
      />
    );
  }

  return (
    <img
      className={`object-cover ${className}`}
      src={src}
      alt={alt}
      loading={priority ? "eager" : "lazy"}
      onError={() => setFailed(true)}
    />
  );
}