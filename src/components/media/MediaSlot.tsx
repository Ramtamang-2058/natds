import {useState} from "react";
import type {MediaSlotProps} from "@/types";

/**
 * Renders an image or video with subtle cinematic motion, falling back to a
 * tasteful paper-toned placeholder until the real file is dropped into `public/`.
 *
 * To add media: drop files in `public/images/…` / `public/videos/…` and pass the
 * absolute path (e.g. `/images/events/researcher-training/1.jpg`).
 * See AGENTS.md → "Adding media".
 */
export function MediaSlot(props: MediaSlotProps) {
  const {src, alt = "", poster, className = "", placeholderLabel, motion: motionKind = "kenburns"} = props;
  const [failed, setFailed] = useState(false);

  if (failed || !src) {
    return (
      <figure className={`relative overflow-hidden bg-paper-soft ${className}`} aria-hidden="true">
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 p-4 text-center">
          <span className="font-display text-4xl font-medium text-ink/30">NATDS</span>
          {placeholderLabel && (
            <span className="caption px-3 text-ink-mute">
              add photo · {placeholderLabel}
            </span>
          )}
        </div>
        <span className="absolute inset-0 hairline" />
      </figure>
    );
  }

  const motionClass = motionKind === "kenburns" ? "kenburns" : "";

  if (poster) {
    return (
      <video
        className={`object-cover ${motionClass} ${className}`}
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
      className={`object-cover ${motionClass} ${className}`}
      src={src}
      alt={alt}
      loading="lazy"
      onError={() => setFailed(true)}
    />
  );
}