import {BRAND} from "@/data";

interface WordmarkProps {
  className?: string;
  /** "dark" for use on the night bands */
  tone?: "light" | "dark";
}

/** Circular NATDS emblem (from /logo.png) + expanded NATDS wordmark. */
export function Wordmark({className = "text-[1.15rem]", tone = "light"}: WordmarkProps) {
  const ink = tone === "dark" ? "#F4F5F2" : "#0E1A2B";
  return (
    <span aria-hidden="true" className={`inline-flex items-center gap-2.5 ${className}`}>
      <img src="/brand/emblem.webp" alt="" width={80} height={80} className="h-[2.5em] w-[2.5em]" />
      <span
        style={{fontVariationSettings: '"wdth" 125', color: ink}}
        className="font-extrabold leading-none tracking-[-0.02em]"
      >
        {BRAND.name}
      </span>
    </span>
  );
}
