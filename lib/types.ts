import type { LucideIcon } from "lucide-react";

export type ViewId =
  | "chat"
  | "write"
  | "read"
  | "translate"
  | "image"
  | "video"
  | "compare"
  | "connectors"
  | "settings"
  | "upgrade";

export interface NavItem {
  id: ViewId;
  label: string;
  icon: LucideIcon;
}

export interface AiModel {
  id: string;
  name: string;
  description: string;
  badge?: string;
}

/** Mirrors the future backend's AI Provider entity (name, enabled, default, health). */
export interface AiProvider {
  id: string;
  name: string;
  enabled: boolean;
  isDefault: boolean;
  status: "healthy" | "degraded" | "unconfigured";
}

export interface ChatMessage {
  id: string;
  role: "user" | "assistant";
  content: string;
  createdAt: Date;
}

export interface ConversationSummary {
  id: string;
  title: string;
  preview: string;
  updatedAt: Date;
  pinned?: boolean;
}
