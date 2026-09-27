"use client";

import { useState } from "react";
import { Columns2 } from "lucide-react";
import { Chip } from "@/components/ui/chip";
import { EmptyState } from "../shared/empty-state";
import { AI_MODELS } from "@/lib/constants";

export function CompareView() {
  const [selected, setSelected] = useState<string[]>([AI_MODELS[0]!.id, AI_MODELS[1]!.id]);
  const [prompt, setPrompt] = useState("");

  const toggle = (id: string) => {
    setSelected((prev) =>
      prev.includes(id) ? prev.filter((m) => m !== id) : prev.length < 3 ? [...prev, id] : prev
    );
  };

  return (
    <div className="flex flex-1 flex-col overflow-hidden">
      <div className="flex-1 overflow-y-auto px-4 py-4">
        <EmptyState icon={Columns2} text="Ask one question and see how multiple models answer it." />
      </div>

      <div className="border-t border-slate-100 p-2.5 dark:border-slate-800">
        <div className="mb-2 flex flex-wrap gap-1.5">
          {AI_MODELS.map((m) => (
            <Chip key={m.id} label={m.name} selected={selected.includes(m.id)} onClick={() => toggle(m.id)} />
          ))}
        </div>
        <form
          onSubmit={(e) => e.preventDefault()}
          className="flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-3 py-1.5 shadow-sm focus-within:ring-2 focus-within:ring-brand-500 dark:border-slate-700 dark:bg-slate-900"
        >
          <input
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
            placeholder={`Message ${selected.length} model${selected.length === 1 ? "" : "s"}...`}
            className="h-8 flex-1 bg-transparent text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none dark:text-slate-100 dark:placeholder:text-slate-500"
          />
          <button
            type="submit"
            disabled={!prompt.trim() || selected.length === 0}
            className="rounded-lg bg-brand-600 px-3 py-1.5 text-xs font-semibold text-white transition-colors hover:bg-brand-700 disabled:opacity-40 dark:bg-brand-500 dark:hover:bg-brand-600"
          >
            Compare
          </button>
        </form>
      </div>
    </div>
  );
}
