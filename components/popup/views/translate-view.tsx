"use client";

import { useState } from "react";
import { ArrowLeftRight } from "lucide-react";
import { ModelSelector } from "../shared/model-selector";
import { AI_MODELS } from "@/lib/constants";

const LANGUAGES = ["Automatic", "English", "Spanish", "French", "German", "Japanese", "Bengali", "Hindi"];

export function TranslateView() {
  const [from, setFrom] = useState("Automatic");
  const [to, setTo] = useState("English");
  const [text, setText] = useState("");
  const [model, setModel] = useState(AI_MODELS[0]!.id);

  return (
    <div className="flex flex-1 flex-col gap-4 overflow-y-auto px-4 py-4">
      <div className="flex items-center gap-2">
        <LanguageSelect value={from} onChange={setFrom} />
        <button
          aria-label="Swap languages"
          onClick={() => {
            setFrom(to);
            setTo(from);
          }}
          className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800"
        >
          <ArrowLeftRight className="h-4 w-4" />
        </button>
        <LanguageSelect value={to} onChange={setTo} />
      </div>

      <textarea
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Paste or enter your text to translate"
        rows={7}
        className="w-full resize-none rounded-xl border border-slate-200 bg-white p-3 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-100 dark:placeholder:text-slate-500"
      />

      <div className="mt-auto flex items-center gap-2">
        <ModelSelector value={model} onChange={setModel} compact />
        <button
          disabled={!text.trim()}
          className="flex-1 rounded-xl bg-brand-600 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-brand-700 disabled:opacity-40 dark:bg-brand-500 dark:hover:bg-brand-600"
        >
          Translate
        </button>
      </div>
    </div>
  );
}

function LanguageSelect({ value, onChange }: { value: string; onChange: (v: string) => void }) {
  return (
    <label className="flex-1">
      <span className="sr-only">Language</span>
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="h-9 w-full rounded-lg border border-slate-200 bg-white px-2 text-sm text-slate-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-200"
      >
        {LANGUAGES.map((lang) => (
          <option key={lang} value={lang}>{lang}</option>
        ))}
      </select>
    </label>
  );
}
