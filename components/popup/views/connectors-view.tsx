"use client";

import { Plug } from "lucide-react";
import { Button } from "@/components/ui/button";
import { EmptyState } from "../shared/empty-state";

export function ConnectorsView() {
  return (
    <div className="flex flex-1 flex-col gap-4 overflow-y-auto px-4 py-4">
      <div>
        <h2 className="text-sm font-bold text-slate-900 dark:text-white">Connectors</h2>
        <p className="text-xs text-slate-500 dark:text-slate-400">
          Connect an MCP server and its tools become available while you chat.
        </p>
      </div>

      <div className="flex items-center justify-between">
        <span className="text-xs font-medium text-slate-400">0 connected</span>
        <Button size="sm">Add connector</Button>
      </div>

      <EmptyState icon={Plug} text="No connectors yet. Add your first MCP server!" />
    </div>
  );
}
