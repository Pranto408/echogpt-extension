"use client";

import { useEffect, useRef, useState } from "react";
import { QuickActions } from "../shared/quick-actions";
import { Composer } from "../shared/composer";
import { MessageBubble } from "../shared/message-bubble";
import { STARTER_PROMPTS, AI_MODELS } from "@/lib/constants";
import { useChat } from "@/hooks/use-chat";
import type { ViewId } from "@/lib/types";

export function ChatView({ onQuickAction }: { onQuickAction: (id: ViewId) => void }) {
  const { messages, sendMessage, isStreaming } = useChat();
  const [model, setModel] = useState(AI_MODELS[0]!.id);
  const [webSearch, setWebSearch] = useState(false);
  const endRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isStreaming]);

  return (
    <div className="flex flex-1 flex-col overflow-hidden">
      <div className="flex-1 overflow-y-auto px-4 py-4">
        {messages.length === 0 ? (
          <div className="flex flex-col gap-5">
            <div>
              <p className="text-xs text-slate-400">Hi, good afternoon</p>
              <h2 className="text-lg font-bold text-slate-900 dark:text-white">How can I help you?</h2>
            </div>

            <QuickActions onSelect={onQuickAction} />

            <div className="flex flex-col gap-1.5">
              {STARTER_PROMPTS.map((prompt) => (
                <button
                  key={prompt}
                  onClick={() => sendMessage(prompt)}
                  className="rounded-lg bg-slate-100 px-3 py-2 text-left text-xs text-slate-600 hover:bg-slate-200/70 dark:bg-slate-800 dark:text-slate-300 dark:hover:bg-slate-700"
                >
                  {prompt}
                </button>
              ))}
            </div>
          </div>
        ) : (
          <div className="flex flex-col gap-3">
            {messages.map((m) => (
              <MessageBubble key={m.id} message={m} />
            ))}
            {isStreaming && (
              <div className="flex items-center gap-1 rounded-2xl rounded-bl-sm bg-slate-100 px-3 py-2.5 w-fit dark:bg-slate-800" aria-live="polite">
                <span className="sr-only">EchoGPT is typing</span>
                {[0, 1, 2].map((i) => (
                  <span
                    key={i}
                    className="h-1.5 w-1.5 animate-pulse rounded-full bg-slate-400 dark:bg-slate-500"
                    style={{ animationDelay: `${i * 0.15}s` }}
                  />
                ))}
              </div>
            )}
            <div ref={endRef} />
          </div>
        )}
      </div>

      <Composer
        model={model}
        onModelChange={setModel}
        onSend={sendMessage}
        disabled={isStreaming}
        webSearch={webSearch}
        onToggleWebSearch={() => setWebSearch((v) => !v)}
      />
    </div>
  );
}
