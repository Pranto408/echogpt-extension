"use client";

import { motion } from "framer-motion";
import { Sparkles, Settings, ArrowUpCircle } from "lucide-react";
import { NAV_ITEMS } from "@/lib/constants";
import { cn } from "@/lib/utils";
import type { ViewId } from "@/lib/types";

export function IconRail({
  active,
  onSelect,
}: {
  active: ViewId;
  onSelect: (id: ViewId) => void;
}) {
  return (
    <nav
      aria-label="Tools"
      className="flex w-16 shrink-0 flex-col items-center justify-between border-l border-slate-200 bg-slate-50/60 py-3 dark:border-slate-800 dark:bg-slate-950/40"
    >
      <ul className="flex flex-col items-center gap-1">
        {NAV_ITEMS.map((item) => {
          const isActive = item.id === active;
          return (
            <li key={item.id} className="relative w-full px-1.5">
              <button
                onClick={() => onSelect(item.id)}
                aria-current={isActive ? "page" : undefined}
                className={cn(
                  "relative flex w-full flex-col items-center gap-1 rounded-lg py-2 text-[10px] font-medium transition-colors",
                  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500",
                  isActive
                    ? "text-brand-700 dark:text-brand-300"
                    : "text-slate-500 hover:bg-slate-100 hover:text-slate-700 dark:text-slate-400 dark:hover:bg-slate-800 dark:hover:text-slate-200"
                )}
              >
                {isActive && (
                  <motion.span
                    layoutId="rail-active"
                    className="absolute inset-0 rounded-lg bg-brand-100 dark:bg-brand-500/15"
                    transition={{ type: "spring", duration: 0.35, bounce: 0.2 }}
                  />
                )}
                <item.icon className="relative z-10 h-4 w-4" aria-hidden="true" />
                <span className="relative z-10">{item.label}</span>
              </button>
            </li>
          );
        })}
      </ul>

      <ul className="flex flex-col items-center gap-1">
        <li className="w-full px-1.5">
          <button
            onClick={() => onSelect("upgrade")}
            aria-current={active === "upgrade" ? "page" : undefined}
            className={cn(
              "flex w-full flex-col items-center gap-1 rounded-lg py-2 text-[10px] font-medium text-brand-600 transition-colors hover:bg-brand-50 dark:text-brand-400 dark:hover:bg-brand-500/10",
              "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500"
            )}
          >
            <ArrowUpCircle className="h-4 w-4" aria-hidden="true" />
            Upgrade
          </button>
        </li>
        <li className="w-full px-1.5">
          <button
            onClick={() => onSelect("settings")}
            aria-current={active === "settings" ? "page" : undefined}
            className={cn(
              "relative flex w-full flex-col items-center gap-1 rounded-lg py-2 text-[10px] font-medium transition-colors",
              "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500",
              active === "settings"
                ? "text-brand-700 dark:text-brand-300"
                : "text-slate-500 hover:bg-slate-100 hover:text-slate-700 dark:text-slate-400 dark:hover:bg-slate-800 dark:hover:text-slate-200"
            )}
          >
            {active === "settings" && (
              <motion.span
                layoutId="rail-active"
                className="absolute inset-0 rounded-lg bg-brand-100 dark:bg-brand-500/15"
                transition={{ type: "spring", duration: 0.35, bounce: 0.2 }}
              />
            )}
            <Settings className="relative z-10 h-4 w-4" aria-hidden="true" />
            <span className="relative z-10">Settings</span>
          </button>
        </li>
        <li className="mt-1">
          <div
            aria-hidden="true"
            className="flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-br from-brand-500 to-brand-700 text-xs font-bold text-white"
          >
            <Sparkles className="h-4 w-4" />
          </div>
        </li>
      </ul>
    </nav>
  );
}
