import {useState} from "react";
import type {MediaSlotProps} from "@/types";

export function MediaSlot(props: MediaSlotProps) {
  const {src, alt = "", poster, className = "", placeholderLabel} = props;
  const [failed, setFailed] = useState(false);

  if (failed || !src) {
    return (
      <figure
        className={`relative flex items-center justify-center overflow-hidden border border-line bg-mist p-4 text-center ${className}`}
        aria-hidden="true"
      >
        {placeholderLabel && <span className="label">Photo goes here: {placeholderLabel}</span>}
      </figure>
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
      loading="lazy"
      decoding="async"
      onError={() => setFailed(true)}
    />
  );
}
