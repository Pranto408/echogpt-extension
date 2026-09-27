"use client";

import { useCallback, useState } from "react";
import type { ChatMessage } from "@/lib/types";

let idCounter = 0;
const nextId = () => `msg-${Date.now()}-${idCounter++}`;

/** Local demo chat state. Swap sendMessage's body for a real fetch to the NestJS Chat API later. */
export function useChat() {
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [isStreaming, setIsStreaming] = useState(false);

  const sendMessage = useCallback((content: string) => {
    if (!content.trim()) return;
    setMessages((prev) => [...prev, { id: nextId(), role: "user", content, createdAt: new Date() }]);
    setIsStreaming(true);
    window.setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        {
          id: nextId(),
          role: "assistant",
          content: "Here's a quick take — let me know if you'd like more detail or a different angle.",
          createdAt: new Date(),
        },
      ]);
      setIsStreaming(false);
    }, 800);
  }, []);

  const reset = useCallback(() => setMessages([]), []);

  return { messages, sendMessage, isStreaming, reset };
}
