import { Check, Sparkles } from "lucide-react";

const PRO_FEATURES = [
  "Echo Pro & Echo Vision models",
  "Unlimited chat history",
  "Priority response speed",
  "Image & Video Studio access",
  "Compare up to 3 models at once",
];

export function UpgradeView() {
  return (
    <div className="flex flex-1 flex-col gap-4 overflow-y-auto px-4 py-4">
      <div className="rounded-2xl bg-gradient-to-br from-brand-600 to-brand-800 p-5 text-white">
        <Sparkles className="h-5 w-5" aria-hidden="true" />
        <p className="mt-2 text-lg font-bold">Upgrade to Pro</p>
        <p className="mt-1 text-xs text-brand-100">
          Unlock every model and studio tool, with priority speed.
        </p>
        <p className="mt-4 flex items-baseline gap-1">
          <span className="text-3xl font-bold">$12</span>
          <span className="text-xs text-brand-100">/mo, billed yearly</span>
        </p>
      </div>

      <ul className="space-y-2">
        {PRO_FEATURES.map((f) => (
          <li key={f} className="flex items-start gap-2 text-sm text-slate-600 dark:text-slate-300">
            <Check className="mt-0.5 h-4 w-4 shrink-0 text-brand-600 dark:text-brand-400" aria-hidden="true" />
            {f}
          </li>
        ))}
      </ul>

      <button className="mt-auto rounded-xl bg-brand-600 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-brand-700 dark:bg-brand-500 dark:hover:bg-brand-600">
        Upgrade now
      </button>
      <p className="text-center text-[10px] text-slate-400">Cancel anytime from Settings.</p>
    </div>
  );
}
