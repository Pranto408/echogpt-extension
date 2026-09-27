"use client";

import { useState } from "react";
import type { ViewId } from "@/lib/types";

/** Centralizes the popup's navigation state: active view, history panel, pin state. */
export function usePopupNav(initial: ViewId = "chat") {
  const [view, setView] = useState<ViewId>(initial);
  const [historyOpen, setHistoryOpen] = useState(false);
  const [pinned, setPinned] = useState(true);

  return {
    view,
    setView: (v: ViewId) => {
      setView(v);
      setHistoryOpen(false);
    },
    historyOpen,
    openHistory: () => setHistoryOpen(true),
    closeHistory: () => setHistoryOpen(false),
    pinned,
    togglePinned: () => setPinned((p) => !p),
  };
}
