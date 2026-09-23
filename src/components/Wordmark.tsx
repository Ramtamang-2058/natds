import {BRAND} from "@/data";

interface WordmarkProps {
  className?: string;
  /** "dark" for use on the night bands */
  tone?: "light" | "dark";
}

/** Peak-and-waterline mark + expanded NATDS wordmark. */
export function Wordmark({className = "text-[1.15rem]", tone = "light"}: WordmarkProps) {
  const ink = tone === "dark" ? "#F4F5F2" : "#0E1A2B";
  return (
    <span aria-hidden="true" className={`inline-flex items-center gap-2 ${className}`}>
      <svg viewBox="0 0 28 24" className="h-[1.1em] w-auto" fill="none">
        <path d="M1 19 L10 4 L15 12 L18 8 L27 19 Z" fill={ink} />
        <rect x="1" y="21" width="26" height="2.2" fill="#C0192C" />
      </svg>
      <span
        style={{fontVariationSettings: '"wdth" 125', color: ink}}
        className="font-extrabold leading-none tracking-[-0.02em]"
      >
        {BRAND.name}
      </span>
    </span>
  );
}
