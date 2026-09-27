"use client";

import { useState } from "react";
import { Video } from "lucide-react";
import { Chip } from "@/components/ui/chip";
import { EmptyState } from "../shared/empty-state";

const RATIOS = ["16:9", "9:16", "1:1"];
const MODELS = ["Echo Video", "Echo Video Fast"];

export function VideoView() {
  const [prompt, setPrompt] = useState("");
  const [ratio, setRatio] = useState("16:9");
  const [model, setModel] = useState(MODELS[0]!);

  return (
    <div className="flex flex-1 flex-col gap-4 overflow-y-auto px-4 py-4">
      <div>
        <h2 className="text-sm font-bold text-slate-900 dark:text-white">Video Studio</h2>
        <p className="text-xs text-slate-500 dark:text-slate-400">Type what you imagine, the video makes itself.</p>
      </div>

      <div>
        <p className="mb-1.5 text-[11px] font-semibold uppercase tracking-wide text-slate-400">Prompt</p>
        <textarea
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          placeholder="Describe your video..."
          rows={3}
          className="w-full resize-none rounded-xl border border-slate-200 bg-white p-3 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-100 dark:placeholder:text-slate-500"
        />
      </div>

      <div>
        <p className="mb-1.5 text-[11px] font-semibold uppercase tracking-wide text-slate-400">Aspect ratio</p>
        <div className="flex gap-1.5">
          {RATIOS.map((r) => (
            <Chip key={r} label={r} selected={ratio === r} onClick={() => setRatio(r)} />
          ))}
        </div>
      </div>

      <label className="block">
        <span className="sr-only">Model</span>
        <select
          value={model}
          onChange={(e) => setModel(e.target.value)}
          className="h-9 w-full rounded-lg border border-slate-200 bg-white px-2 text-sm text-slate-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-200"
        >
          {MODELS.map((m) => (
            <option key={m} value={m}>{m}</option>
          ))}
        </select>
      </label>

      <button
        disabled={!prompt.trim()}
        className="rounded-xl bg-brand-600 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-brand-700 disabled:opacity-40 dark:bg-brand-500 dark:hover:bg-brand-600"
      >
        Generate
      </button>
      <p className="-mt-2 text-[11px] text-slate-400">Each video uses one message from your plan and takes a few minutes to render.</p>

      <div className="flex flex-1 flex-col">
        <p className="mb-1 text-sm font-semibold text-slate-900 dark:text-white">Your creations</p>
        <EmptyState icon={Video} text="No creations yet. Generate your first video!" />
      </div>
    </div>
  );
}
