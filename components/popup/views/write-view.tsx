"use client";

import { useState } from "react";
import { SegmentedControl } from "../shared/segmented-control";
import { ChipGroup } from "../shared/chip-group";
import { ModelSelector } from "../shared/model-selector";
import { AI_MODELS } from "@/lib/constants";

const MODES = ["compose", "reply", "grammar"] as const;
const FORMATS = ["Automatic", "Email", "Message", "Paragraph", "Idea", "Outline", "Blog post", "Comment", "Article"];
const TONES = ["Automatic", "Formal", "Casual", "Friendly", "Professional", "Confident", "Funny"];
const LENGTHS = ["Automatic", "Short", "Medium", "Long"];

export function WriteView() {
  const [mode, setMode] = useState<(typeof MODES)[number]>("compose");
  const [format, setFormat] = useState("Automatic");
  const [tone, setTone] = useState("Automatic");
  const [length, setLength] = useState("Automatic");
  const [model, setModel] = useState(AI_MODELS[0]!.id);
  const [topic, setTopic] = useState("");

  return (
    <div className="flex flex-1 flex-col gap-4 overflow-y-auto px-4 py-4">
      <SegmentedControl options={MODES} value={mode} onChange={setMode} />

      <div>
        <p className="mb-1.5 text-[11px] font-semibold uppercase tracking-wide text-slate-400">Topic</p>
        <textarea
          value={topic}
          onChange={(e) => setTopic(e.target.value)}
          placeholder="The topic you want to write about"
          rows={3}
          className="w-full resize-none rounded-xl border border-slate-200 bg-white p-3 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-100 dark:placeholder:text-slate-500"
        />
      </div>

      <ChipGroup label="Format" options={FORMATS} value={format} onChange={setFormat} />
      <ChipGroup label="Tone" options={TONES} value={tone} onChange={setTone} />
      <ChipGroup label="Length" options={LENGTHS} value={length} onChange={setLength} />

      <div className="mt-auto flex items-center gap-2 pt-2">
        <ModelSelector value={model} onChange={setModel} compact />
        <button
          disabled={!topic.trim()}
          className="flex-1 rounded-xl bg-brand-600 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-brand-700 disabled:opacity-40 dark:bg-brand-500 dark:hover:bg-brand-600"
        >
          Generate
        </button>
      </div>
    </div>
  );
}
