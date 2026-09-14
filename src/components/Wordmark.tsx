import {BRAND} from "@/data";

interface WordmarkProps {
  className?: string;
}

export function Wordmark({className = "text-[1.3rem]"}: WordmarkProps) {
  const name = BRAND.name;
  return (
    <span aria-hidden="true" className={`wordmark ${className}`}>
      {name.slice(0, name.length - 1)}
      <em>{name.slice(name.length - 1)}</em>
    </span>
  );
}