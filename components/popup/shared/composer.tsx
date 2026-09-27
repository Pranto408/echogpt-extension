"use client";

import type { ReactNode } from "react";
import { useRef, useState, KeyboardEvent } from "react";
import { ArrowUp, Paperclip, Globe, AtSign, Sparkles } from "lucide-react";
import { ModelSelector } from "./model-selector";

interface ComposerProps {
  model: string;
  onModelChange: (id: string) => void;
  onSend: (text: string) => void;
  disabled?: boolean;
  placeholder?: string;
  webSearch?: boolean;
  onToggleWebSearch?: () => void;
}

/** The redesigned prompt input: model + quick tools above, auto-growing textarea below. */
export function Composer({
  model,
  onModelChange,
  onSend,
  disabled,
  placeholder = "Ask a question...",
  webSearch,
  onToggleWebSearch,
}: ComposerProps) {
  const [value, setValue] = useState("");
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const resize = () => {
    const el = textareaRef.current;
    if (!el) return;
    el.style.height = "auto";
    el.style.height = `${Math.min(el.scrollHeight, 120)}px`;
  };

  const handleSubmit = () => {
    if (!value.trim() || disabled) return;
    onSend(value);
    setValue("");
    requestAnimationFrame(resize);
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSubmit();
    }
  };

  return (
    <div className="border-t border-slate-100 p-2.5 dark:border-slate-800">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleSubmit();
        }}
        className="rounded-xl border border-slate-200 bg-white p-2 shadow-sm focus-within:ring-2 focus-within:ring-brand-500 dark:border-slate-700 dark:bg-slate-900"
      >
        <textarea
          ref={textareaRef}
          rows={1}
          value={value}
          onChange={(e) => {
            setValue(e.target.value);
            resize();
          }}
          onKeyDown={handleKeyDown}
          placeholder={placeholder}
          aria-label={placeholder}
          className="max-h-32 w-full resize-none bg-transparent px-1 py-1 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none dark:text-slate-100 dark:placeholder:text-slate-500"
        />
        <div className="mt-1.5 flex items-center justify-between">
          <div className="flex items-center gap-1">
            <ModelSelector value={model} onChange={onModelChange} />
            <ToolIcon label="Attach a file">
              <Paperclip className="h-3.5 w-3.5" />
            </ToolIcon>
            <ToolIcon label="Reference a page">
              <AtSign className="h-3.5 w-3.5" />
            </ToolIcon>
            <ToolIcon label="Quick action">
              <Sparkles className="h-3.5 w-3.5" />
            </ToolIcon>
          </div>
          <div className="flex items-center gap-1.5">
            <button
              type="button"
              onClick={onToggleWebSearch}
              aria-pressed={webSearch}
              className={`inline-flex items-center gap-1 rounded-full border px-2 py-1 text-[11px] font-medium transition-colors ${
                webSearch
                  ? "border-brand-300 bg-brand-50 text-brand-700 dark:border-brand-700 dark:bg-brand-500/10 dark:text-brand-300"
                  : "border-slate-200 text-slate-500 hover:bg-slate-50 dark:border-slate-700 dark:text-slate-400 dark:hover:bg-slate-800"
              }`}
            >
              <Globe className="h-3 w-3" aria-hidden="true" />
              Search
            </button>
            <button
              type="submit"
              disabled={!value.trim() || disabled}
              aria-label="Send message"
              className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-brand-600 text-white transition-colors hover:bg-brand-700 disabled:opacity-40 dark:bg-brand-500 dark:hover:bg-brand-600"
            >
              <ArrowUp className="h-3.5 w-3.5" aria-hidden="true" />
            </button>
          </div>
        </div>
      </form>
      <p className="mt-1.5 text-center text-[10px] text-slate-400 dark:text-slate-500">
        Enter to send · Shift+Enter new line
      </p>
    </div>
  );
}

function ToolIcon({ label, children }: { label: string; children: ReactNode }) {
  return (
    <button
      type="button"
      aria-label={label}
      className="inline-flex h-7 w-7 items-center justify-center rounded-lg text-slate-400 hover:bg-slate-100 hover:text-slate-600 dark:hover:bg-slate-800 dark:hover:text-slate-300"
    >
      {children}
    </button>
  );
}
