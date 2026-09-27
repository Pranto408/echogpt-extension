import { QUICK_ACTIONS } from "@/lib/constants";
import type { ViewId } from "@/lib/types";

export function QuickActions({ onSelect }: { onSelect: (id: ViewId) => void }) {
  return (
    <div className="grid grid-cols-2 gap-2" role="list" aria-label="Quick actions">
      {QUICK_ACTIONS.map((action) => (
        <button
          key={action.id}
          role="listitem"
          onClick={() => onSelect(action.id as ViewId)}
          className="flex items-center gap-2.5 rounded-xl border border-slate-200 bg-white px-3 py-2.5 text-left transition-colors hover:border-brand-300 hover:bg-brand-50/40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 dark:border-slate-800 dark:bg-slate-900 dark:hover:border-brand-700"
        >
          <span className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-lg ${action.tint}`}>
            <action.icon className="h-4 w-4" aria-hidden="true" />
          </span>
          <span>
            <span className="block text-sm font-semibold text-slate-900 dark:text-white">{action.label}</span>
            <span className="block text-[11px] text-slate-500 dark:text-slate-400">{action.hint}</span>
          </span>
        </button>
      ))}
    </div>
  );
}
