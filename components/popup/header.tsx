"use client";

import { Pin, X, Plus, History } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import type { ViewId } from "@/lib/types";

const TITLES: Record<ViewId, string> = {
  chat: "Chat",
  write: "Write",
  read: "Read",
  translate: "Translate",
  image: "Image Studio",
  video: "Video Studio",
  compare: "Compare",
  connectors: "Connectors",
  settings: "Settings",
  upgrade: "Upgrade",
};

export function PopupHeader({
  view,
  onNewChat,
  onOpenHistory,
}: {
  view: ViewId;
  onNewChat: () => void;
  onOpenHistory: () => void;
}) {
  const showChatControls = view === "chat" || view === "compare";

  return (
    <div className="flex items-center justify-between border-b border-slate-100 px-4 py-3 dark:border-slate-800">
      <h1 className="text-base font-semibold text-slate-900 dark:text-white">{TITLES[view]}</h1>
      <div className="flex items-center gap-2">
        {showChatControls && (
          <>
            <Button size="sm" onClick={onNewChat} className="gap-1.5">
              <Plus className="h-3.5 w-3.5" aria-hidden="true" />
              New Chat
            </Button>
            <button
              aria-label="Conversation history"
              onClick={onOpenHistory}
              className="inline-flex h-8 w-8 items-center justify-center rounded-lg text-slate-500 hover:bg-slate-100 dark:text-slate-400 dark:hover:bg-slate-800"
            >
              <History className="h-4 w-4" />
            </button>
          </>
        )}
      </div>
    </div>
  );
}

/** Top-of-popup title bar mimicking the browser-injected sidebar chrome (drag handle, pin, close). */
export function TitleBar({
  pinned,
  onTogglePin,
}: {
  pinned: boolean;
  onTogglePin: () => void;
}) {
  return (
    <div className="flex items-center justify-between bg-gradient-to-r from-brand-700 to-brand-900 px-3 py-2 text-white">
      <div className="flex items-center gap-2 text-xs font-semibold">
        <span className="flex h-5 w-5 items-center justify-center rounded-full bg-white/15">
          <span className="h-2 w-2 rounded-full bg-white" />
        </span>
        EchoGPT — Multi-AI Chat Sidebar
      </div>
      <div className="flex items-center gap-1">
        <button
          onClick={onTogglePin}
          aria-pressed={pinned}
          aria-label={pinned ? "Unpin sidebar" : "Pin sidebar"}
          className={cn(
            "inline-flex h-6 w-6 items-center justify-center rounded-md hover:bg-white/10",
            pinned && "bg-white/15"
          )}
        >
          <Pin className="h-3.5 w-3.5" aria-hidden="true" />
        </button>
        <button
          aria-label="Close sidebar"
          className="inline-flex h-6 w-6 items-center justify-center rounded-md hover:bg-white/10"
        >
          <X className="h-3.5 w-3.5" aria-hidden="true" />
        </button>
      </div>
    </div>
  );
}
