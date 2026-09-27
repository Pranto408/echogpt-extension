"use client";

import { TitleBar, PopupHeader } from "./header";
import { IconRail } from "./icon-rail";
import { HistoryPanel } from "./history-panel";
import { ChatView } from "./views/chat-view";
import { WriteView } from "./views/write-view";
import { ReadView } from "./views/read-view";
import { TranslateView } from "./views/translate-view";
import { ImageView } from "./views/image-view";
import { VideoView } from "./views/video-view";
import { CompareView } from "./views/compare-view";
import { ConnectorsView } from "./views/connectors-view";
import { SettingsView } from "./views/settings-view";
import { UpgradeView } from "./views/upgrade-view";
import { usePopupNav } from "@/hooks/use-popup-nav";

/**
 * The full popup, at the extension's real dimensions. Swap the view
 * components' local state for calls to the NestJS API once it exists —
 * each view already mirrors that API's expected shape (see lib/constants.ts).
 */
export function PopupShell() {
  const nav = usePopupNav();

  return (
    <div className="relative flex h-[640px] w-[420px] flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-2xl dark:border-slate-800 dark:bg-slate-950">
      <TitleBar pinned={nav.pinned} onTogglePin={nav.togglePinned} />
      <div className="relative flex flex-1 overflow-hidden">
        <div className="flex flex-1 flex-col overflow-hidden">
          <PopupHeader view={nav.view} onNewChat={() => nav.setView("chat")} onOpenHistory={nav.openHistory} />
          {nav.view === "chat" && <ChatView onQuickAction={nav.setView} />}
          {nav.view === "write" && <WriteView />}
          {nav.view === "read" && <ReadView />}
          {nav.view === "translate" && <TranslateView />}
          {nav.view === "image" && <ImageView />}
          {nav.view === "video" && <VideoView />}
          {nav.view === "compare" && <CompareView />}
          {nav.view === "connectors" && <ConnectorsView />}
          {nav.view === "settings" && <SettingsView />}
          {nav.view === "upgrade" && <UpgradeView />}
        </div>
        <IconRail active={nav.view} onSelect={nav.setView} />
        <HistoryPanel open={nav.historyOpen} onClose={nav.closeHistory} />
      </div>
    </div>
  );
}
