import { PopupShell } from "@/components/popup/popup-shell";
import { ThemeToggle } from "@/components/layout/theme-toggle";

export default function HomePage() {
  return (
    <main id="main-content" className="flex min-h-dvh flex-col items-center justify-center gap-6 bg-slate-100 p-6 dark:bg-slate-900">
      <div className="flex w-full max-w-md items-center justify-between">
        <div>
          <p className="text-xs font-semibold uppercase tracking-wide text-brand-600 dark:text-brand-400">
            Concept preview
          </p>
          <h1 className="text-sm font-medium text-slate-500 dark:text-slate-400">
            EchoGPT — Chrome extension popup, redesigned
          </h1>
        </div>
        <ThemeToggle />
      </div>

      <PopupShell />


    </main>
  );
}
