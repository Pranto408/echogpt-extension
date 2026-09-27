"use client";

import { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, Pin, Trash2, X } from "lucide-react";
import { MOCK_HISTORY } from "@/lib/constants";
import { cn } from "@/lib/utils";

function timeAgo(date: Date) {
  const mins = Math.round((Date.now() - date.getTime()) / 60000);
  if (mins < 60) return `${mins}m ago`;
  const hours = Math.round(mins / 60);
  if (hours < 24) return `${hours}h ago`;
  return `${Math.round(hours / 24)}d ago`;
}

export function HistoryPanel({ open, onClose }: { open: boolean; onClose: () => void }) {
  const [query, setQuery] = useState("");

  const filtered = useMemo(
    () => MOCK_HISTORY.filter((c) => c.title.toLowerCase().includes(query.toLowerCase())),
    [query]
  );
  const pinned = filtered.filter((c) => c.pinned);
  const rest = filtered.filter((c) => !c.pinned);

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ x: "100%" }}
          animate={{ x: 0 }}
          exit={{ x: "100%" }}
          transition={{ type: "tween", duration: 0.22 }}
          className="absolute inset-0 z-20 flex flex-col bg-white dark:bg-slate-950"
          role="dialog"
          aria-label="Conversation history"
        >
          <div className="flex items-center justify-between border-b border-slate-100 px-4 py-3 dark:border-slate-800">
            <h2 className="text-sm font-semibold text-slate-900 dark:text-white">History</h2>
            <button
              aria-label="Close history"
              onClick={onClose}
              className="inline-flex h-7 w-7 items-center justify-center rounded-lg text-slate-500 hover:bg-slate-100 dark:text-slate-400 dark:hover:bg-slate-800"
            >
              <X className="h-4 w-4" />
            </button>
          </div>

          <div className="px-4 pt-3">
            <div className="flex items-center gap-2 rounded-lg border border-slate-200 bg-white px-2.5 dark:border-slate-700 dark:bg-slate-900">
              <Search className="h-3.5 w-3.5 text-slate-400" aria-hidden="true" />
              <input
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search conversations"
                className="h-8 w-full bg-transparent text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none dark:text-slate-100 dark:placeholder:text-slate-500"
              />
            </div>
          </div>

          <div className="flex-1 overflow-y-auto px-2 py-3">
            {pinned.length > 0 && <HistoryGroup label="Pinned" items={pinned} />}
            <HistoryGroup label={pinned.length ? "Recent" : ""} items={rest} />
            {filtered.length === 0 && (
              <p className="px-2 py-8 text-center text-xs text-slate-400">No conversations match &ldquo;{query}&rdquo;.</p>
            )}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

function HistoryGroup({ label, items }: { label: string; items: typeof MOCK_HISTORY }) {
  if (items.length === 0) return null;
  return (
    <div className="mb-3">
      {label && <p className="px-2 pb-1 text-[10px] font-semibold uppercase tracking-wide text-slate-400">{label}</p>}
      <ul className="space-y-0.5">
        {items.map((c) => (
          <li key={c.id} className="group flex items-center gap-1 rounded-lg px-2 py-2 hover:bg-slate-100 dark:hover:bg-slate-900">
            <button className="min-w-0 flex-1 text-left">
              <p className="truncate text-xs font-medium text-slate-800 dark:text-slate-100">{c.title}</p>
              <p className="truncate text-[11px] text-slate-400">{c.preview}</p>
            </button>
            <span className="shrink-0 text-[10px] text-slate-300 dark:text-slate-600">{timeAgo(c.updatedAt)}</span>
            <button
              aria-label={c.pinned ? "Unpin conversation" : "Pin conversation"}
              className={cn(
                "hidden h-6 w-6 shrink-0 items-center justify-center rounded text-slate-400 hover:text-brand-600 group-hover:flex",
                c.pinned && "flex text-brand-600"
              )}
            >
              <Pin className="h-3 w-3" />
            </button>
            <button
              aria-label="Delete conversation"
              className="hidden h-6 w-6 shrink-0 items-center justify-center rounded text-slate-400 hover:text-red-500 group-hover:flex"
            >
              <Trash2 className="h-3 w-3" />
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
