"use client";

import { useId, useRef, useState, useEffect } from "react";
import { ChevronDown, Check } from "lucide-react";
import { AI_MODELS } from "@/lib/constants";
import { cn } from "@/lib/utils";

export function ModelSelector({
  value,
  onChange,
  compact,
}: {
  value: string;
  onChange: (id: string) => void;
  compact?: boolean;
}) {
  const [open, setOpen] = useState(false);
  const buttonId = useId();
  const listId = useId();
  const ref = useRef<HTMLDivElement>(null);
  const active = AI_MODELS.find((m) => m.id === value) ?? AI_MODELS[0]!;

  useEffect(() => {
    function onClickOutside(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    }
    document.addEventListener("mousedown", onClickOutside);
    return () => document.removeEventListener("mousedown", onClickOutside);
  }, []);

  return (
    <div ref={ref} className="relative">
      <button
        id={buttonId}
        type="button"
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-controls={listId}
        onClick={() => setOpen((v) => !v)}
        className={cn(
          "inline-flex items-center gap-1 rounded-full border border-slate-200 bg-white px-2.5 py-1 text-xs font-medium text-slate-700 hover:bg-slate-50 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-200 dark:hover:bg-slate-800",
          "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500"
        )}
      >
        <span className="h-1.5 w-1.5 rounded-full bg-brand-500" aria-hidden="true" />
        {active.name}
        {!compact && <ChevronDown className="h-3.5 w-3.5" aria-hidden="true" />}
      </button>

      {open && (
        <ul
          id={listId}
          role="listbox"
          aria-labelledby={buttonId}
          className="absolute bottom-full left-0 z-30 mb-2 w-56 overflow-hidden rounded-xl border border-slate-200 bg-white py-1 shadow-lg dark:border-slate-700 dark:bg-slate-900"
        >
          {AI_MODELS.map((model) => (
            <li key={model.id}>
              <button
                role="option"
                aria-selected={model.id === value}
                onClick={() => {
                  onChange(model.id);
                  setOpen(false);
                }}
                className={cn(
                  "flex w-full items-start gap-2 px-3 py-2 text-left text-xs hover:bg-slate-50 dark:hover:bg-slate-800",
                  model.id === value && "bg-slate-50 dark:bg-slate-800"
                )}
              >
                <Check className={cn("mt-0.5 h-3.5 w-3.5 shrink-0 text-brand-600", model.id !== value && "opacity-0")} aria-hidden="true" />
                <span>
                  <span className="flex items-center gap-1.5 font-medium text-slate-900 dark:text-slate-100">
                    {model.name}
                    {model.badge && (
                      <span className="rounded bg-brand-100 px-1 py-0.5 text-[9px] font-semibold uppercase text-brand-700 dark:bg-brand-500/20 dark:text-brand-300">
                        {model.badge}
                      </span>
                    )}
                  </span>
                  <span className="block text-[11px] text-slate-500 dark:text-slate-400">{model.description}</span>
                </span>
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
