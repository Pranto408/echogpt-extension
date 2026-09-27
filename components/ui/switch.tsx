"use client";

import { cn } from "@/lib/utils";

export function Switch({
  checked,
  onCheckedChange,
  label,
  id,
}: {
  checked: boolean;
  onCheckedChange: (checked: boolean) => void;
  label: string;
  id?: string;
}) {
  return (
    <label htmlFor={id} className="inline-flex cursor-pointer items-center">
      <span className="sr-only">{label}</span>
      <span className={cn("relative h-5 w-9 rounded-full transition-colors", checked ? "bg-brand-600" : "bg-slate-300 dark:bg-slate-700")}>
        <input
          id={id}
          type="checkbox"
          role="switch"
          aria-checked={checked}
          checked={checked}
          onChange={(e) => onCheckedChange(e.target.checked)}
          className="peer absolute inset-0 h-full w-full cursor-pointer opacity-0"
        />
        <span
          className={cn(
            "pointer-events-none absolute left-0.5 top-0.5 h-4 w-4 rounded-full bg-white shadow transition-transform",
            "peer-focus-visible:ring-2 peer-focus-visible:ring-brand-500 peer-focus-visible:ring-offset-1",
            checked ? "translate-x-4" : "translate-x-0"
          )}
        />
      </span>
    </label>
  );
}
