"use client";

import { useState } from "react";
import { UploadCloud, Link as LinkIcon } from "lucide-react";
import { Button } from "@/components/ui/button";

export function ReadView() {
  const [url, setUrl] = useState("");

  return (
    <div className="flex flex-1 flex-col gap-5 overflow-y-auto px-4 py-4">
      <div>
        <p className="mb-1.5 text-[11px] font-semibold uppercase tracking-wide text-slate-400">Read a link</p>
        <div className="flex items-center gap-2">
          <div className="flex flex-1 items-center gap-2 rounded-lg border border-slate-200 bg-white px-2.5 dark:border-slate-700 dark:bg-slate-900">
            <LinkIcon className="h-3.5 w-3.5 shrink-0 text-slate-400" aria-hidden="true" />
            <input
              value={url}
              onChange={(e) => setUrl(e.target.value)}
              placeholder="Enter a web page link"
              className="h-9 w-full bg-transparent text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none dark:text-slate-100 dark:placeholder:text-slate-500"
            />
          </div>
          <Button size="sm" disabled={!url.trim()}>Read</Button>
        </div>
      </div>

      <div>
        <p className="mb-1.5 text-[11px] font-semibold uppercase tracking-wide text-slate-400">Read a file</p>
        <label className="flex cursor-pointer flex-col items-center gap-2 rounded-xl border-2 border-dashed border-slate-200 py-8 text-center text-xs text-slate-400 hover:border-brand-300 hover:bg-brand-50/30 dark:border-slate-700 dark:hover:border-brand-700">
          <input type="file" className="sr-only" />
          <UploadCloud className="h-5 w-5" aria-hidden="true" />
          Click or drag files here to upload
        </label>
      </div>
    </div>
  );
}
