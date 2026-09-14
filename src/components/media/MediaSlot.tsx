import {useState} from "react";
import type {MediaSlotProps} from "@/types";

export function MediaSlot(props: MediaSlotProps) {
  const {src, alt = "", poster, className = "", placeholderLabel, motion: motionKind = "kenburns"} = props;
  const [failed, setFailed] = useState(false);

  if (failed || !src) {
    return (
      <figure className={`relative overflow-hidden bg-paper-2 ${className}`} aria-hidden="true">
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 p-4 text-center">
          <span className="font-mono text-2xl font-medium text-ink/25">NATDS</span>
          {placeholderLabel && (
            <span className="caption px-3 text-ink-3">
              add photo · {placeholderLabel}
            </span>
          )}
        </div>
        <span className="absolute inset-0 border border-line" />
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