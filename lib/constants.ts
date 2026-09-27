import {
  MessageSquare,
  PenLine,
  BookOpen,
  Languages,
  ImageIcon,
  Video,
  Columns2,
  Plug,
} from "lucide-react";
import type { NavItem, AiModel, AiProvider, ConversationSummary } from "./types";

export const EXT_NAME = "EchoGPT";
export const EXT_TAGLINE = "Multi-AI Chat Sidebar";

export const NAV_ITEMS: NavItem[] = [
  { id: "chat", label: "Chat", icon: MessageSquare },
  { id: "write", label: "Write", icon: PenLine },
  { id: "read", label: "Read", icon: BookOpen },
  { id: "translate", label: "Translate", icon: Languages },
  { id: "image", label: "Image", icon: ImageIcon },
  { id: "video", label: "Video", icon: Video },
  { id: "compare", label: "Compare", icon: Columns2 },
  { id: "connectors", label: "MCP", icon: Plug },
];

export const AI_MODELS: AiModel[] = [
  { id: "echogpt", name: "EchoGPT", description: "Fast, everyday answers" },
  { id: "echo-pro", name: "Echo Pro", description: "Deeper reasoning, longer context", badge: "Pro" },
  { id: "echo-vision", name: "Echo Vision", description: "Reads images & screenshots", badge: "Pro" },
];

/** Shape matches the backend's planned AI Provider Management entity. */
export const AI_PROVIDERS: AiProvider[] = [
  { id: "openai", name: "OpenAI", enabled: true, isDefault: true, status: "healthy" },
  { id: "anthropic", name: "Claude (Anthropic)", enabled: true, isDefault: false, status: "healthy" },
  { id: "gemini", name: "Google Gemini", enabled: false, isDefault: false, status: "unconfigured" },
];

export const QUICK_ACTIONS = [
  { id: "write", label: "Write", hint: "Draft an email or post", icon: PenLine, tint: "bg-violet-100 text-violet-600 dark:bg-violet-500/15 dark:text-violet-300" },
  { id: "translate", label: "Translate", hint: "Convert between languages", icon: Languages, tint: "bg-sky-100 text-sky-600 dark:bg-sky-500/15 dark:text-sky-300" },
  { id: "read", label: "Read page", hint: "Summarize this tab", icon: BookOpen, tint: "bg-emerald-100 text-emerald-600 dark:bg-emerald-500/15 dark:text-emerald-300" },
  { id: "image", label: "Image", hint: "Generate visuals", icon: ImageIcon, tint: "bg-pink-100 text-pink-600 dark:bg-pink-500/15 dark:text-pink-300" },
  { id: "video", label: "Video", hint: "Generate a short clip", icon: Video, tint: "bg-amber-100 text-amber-600 dark:bg-amber-500/15 dark:text-amber-300" },
  { id: "compare", label: "Compare", hint: "Ask several models at once", icon: Columns2, tint: "bg-blue-100 text-blue-600 dark:bg-blue-500/15 dark:text-blue-300" },
] as const;

export const STARTER_PROMPTS = [
  "Summarize the key points of this article",
  "Explain this error message in plain English",
  "Draft a polite follow-up email",
  "Give me 5 title ideas for this blog post",
];

export const MOCK_HISTORY: ConversationSummary[] = (() => {
  const now = Date.now();
  const minutesAgo = (m: number) => new Date(now - m * 60_000);
  return [
    { id: "c1", title: "Summarize quarterly report", preview: "Revenue grew 12% quarter over quarter...", updatedAt: minutesAgo(8), pinned: true },
    { id: "c2", title: "Debug useEffect infinite loop", preview: "Most likely your dependency array...", updatedAt: minutesAgo(50) },
    { id: "c3", title: "Translate product description", preview: "Automatic → Spanish", updatedAt: minutesAgo(140) },
    { id: "c4", title: "Compare hosting providers", preview: "3 models compared", updatedAt: minutesAgo(400) },
    { id: "c5", title: "Brainstorm onboarding emails", preview: "5 subject line options...", updatedAt: minutesAgo(1600) },
  ];
})();

/** Placeholder for the backend's Subscription/Usage Limits API response shape. */
export const MOCK_USAGE = {
  plan: "Free" as "Free" | "Pro",
  messagesUsed: 34,
  messagesLimit: 50,
  resetsInDays: 4,
};
