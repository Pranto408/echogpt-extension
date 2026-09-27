"use client";

import { cn } from "@/lib/utils";

export function SegmentedControl<T extends string>({
  options,
  value,
  onChange,
}: {
  options: readonly T[];
  value: T;
  onChange: (v: T) => void;
}) {
  return (
    <div role="tablist" className="flex rounded-xl bg-slate-100 p-1 dark:bg-slate-800">
      {options.map((opt) => (
        <button
          key={opt}
          role="tab"
          aria-selected={value === opt}
          onClick={() => onChange(opt)}
          className={cn(
            "flex-1 rounded-lg py-1.5 text-xs font-semibold capitalize transition-colors",
            value === opt
              ? "bg-brand-600 text-white shadow-sm"
              : "text-slate-500 hover:text-slate-700 dark:text-slate-400 dark:hover:text-slate-200"
          )}
        >
          {opt}
        </button>
      ))}
    </div>
  );
}
