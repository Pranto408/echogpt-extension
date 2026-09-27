import type { LucideIcon } from "lucide-react";

export function EmptyState({ icon: Icon, text }: { icon: LucideIcon; text: string }) {
  return (
    <div className="flex flex-1 flex-col items-center justify-center gap-2 py-16 text-center text-slate-400 dark:text-slate-500">
      <Icon className="h-8 w-8" aria-hidden="true" />
      <p className="text-sm">{text}</p>
    </div>
  );
}
