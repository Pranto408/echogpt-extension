"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { Check, Monitor, Moon, Sun, Circle, LogOut } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Switch } from "@/components/ui/switch";
import { AI_PROVIDERS, MOCK_USAGE } from "@/lib/constants";
import { cn } from "@/lib/utils";

const THEME_OPTIONS = [
  { id: "light", label: "Light", icon: Sun },
  { id: "dark", label: "Dark", icon: Moon },
  { id: "system", label: "System", icon: Monitor },
] as const;

const STATUS_COLOR: Record<string, string> = {
  healthy: "text-emerald-500",
  degraded: "text-amber-500",
  unconfigured: "text-slate-300 dark:text-slate-600",
};

export function SettingsView() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [saveHistory, setSaveHistory] = useState(true);
  const [providers, setProviders] = useState(AI_PROVIDERS);
  useEffect(() => setMounted(true), []);

  const usagePct = Math.round((MOCK_USAGE.messagesUsed / MOCK_USAGE.messagesLimit) * 100);

  return (
    <div className="flex flex-1 flex-col gap-4 overflow-y-auto px-4 py-4">
      <Card className="p-3">
        <p className="mb-2 text-[11px] font-semibold uppercase tracking-wide text-slate-400">Appearance</p>
        <div className="grid grid-cols-3 gap-1.5">
          {THEME_OPTIONS.map(({ id, label, icon: Icon }) => {
            const selected = mounted && theme === id;
            return (
              <label
                key={id}
                className={cn(
                  "relative flex cursor-pointer flex-col items-center gap-1 rounded-lg border py-2 text-[11px] font-medium",
                  selected
                    ? "border-brand-500 bg-brand-50 text-brand-700 dark:bg-brand-500/10 dark:text-brand-400"
                    : "border-slate-200 text-slate-500 hover:bg-slate-50 dark:border-slate-700 dark:hover:bg-slate-800"
                )}
              >
                <input type="radio" name="theme" value={id} checked={selected} onChange={() => setTheme(id)} className="sr-only" />
                <Icon className="h-4 w-4" aria-hidden="true" />
                {label}
                {selected && <Check className="absolute right-1 top-1 h-3 w-3" aria-hidden="true" />}
              </label>
            );
          })}
        </div>
      </Card>

      <Card className="p-3">
        <p className="mb-2 text-[11px] font-semibold uppercase tracking-wide text-slate-400">AI Providers</p>
        <ul className="space-y-2">
          {providers.map((p) => (
            <li key={p.id} className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Circle className={cn("h-2 w-2 fill-current", STATUS_COLOR[p.status])} aria-hidden="true" />
                <div>
                  <p className="text-xs font-medium text-slate-800 dark:text-slate-100">{p.name}</p>
                  {p.isDefault && <p className="text-[10px] text-brand-600 dark:text-brand-400">Default</p>}
                </div>
              </div>
              <Switch
                id={`provider-${p.id}`}
                label={`Enable ${p.name}`}
                checked={p.enabled}
                onCheckedChange={(v) =>
                  setProviders((prev) => prev.map((pr) => (pr.id === p.id ? { ...pr, enabled: v } : pr)))
                }
              />
            </li>
          ))}
        </ul>
        <p className="mt-2 text-[10px] text-slate-400">API keys are stored securely server-side, never in the browser.</p>
      </Card>

      <Card className="p-3">
        <div className="flex items-center justify-between">
          <p className="text-[11px] font-semibold uppercase tracking-wide text-slate-400">Plan &amp; usage</p>
          <span className="rounded-full bg-slate-100 px-2 py-0.5 text-[10px] font-semibold text-slate-600 dark:bg-slate-800 dark:text-slate-300">
            {MOCK_USAGE.plan}
          </span>
        </div>
        <div className="mt-2">
          <div className="mb-1 flex justify-between text-[11px] text-slate-500 dark:text-slate-400">
            <span>{MOCK_USAGE.messagesUsed} / {MOCK_USAGE.messagesLimit} messages</span>
            <span>Resets in {MOCK_USAGE.resetsInDays}d</span>
          </div>
          <div className="h-1.5 w-full overflow-hidden rounded-full bg-slate-100 dark:bg-slate-800">
            <div className="h-full rounded-full bg-brand-600" style={{ width: `${usagePct}%` }} />
          </div>
        </div>
      </Card>

      <Card className="p-3">
        <p className="mb-2 text-[11px] font-semibold uppercase tracking-wide text-slate-400">Data &amp; privacy</p>
        <div className="flex items-center justify-between">
          <div>
            <p className="text-xs font-medium text-slate-800 dark:text-slate-100">Save conversation history</p>
            <p className="text-[10px] text-slate-400">Off clears chats at the end of each session.</p>
          </div>
          <Switch id="save-history" label="Save conversation history" checked={saveHistory} onCheckedChange={setSaveHistory} />
        </div>
      </Card>

      <button className="mt-auto flex items-center justify-center gap-1.5 rounded-lg py-2 text-xs font-medium text-slate-400 hover:bg-slate-100 hover:text-slate-600 dark:hover:bg-slate-800">
        <LogOut className="h-3.5 w-3.5" aria-hidden="true" />
        Sign out · v1.0.0
      </button>
    </div>
  );
}
