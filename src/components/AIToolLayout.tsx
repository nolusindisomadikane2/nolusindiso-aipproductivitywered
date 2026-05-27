import type { ReactNode } from "react";
import { AIDisclaimer } from "./AIDisclaimer";

export function AIToolLayout({
  form,
  output,
}: {
  form: ReactNode;
  output: ReactNode;
}) {
  return (
    <div className="grid gap-6 lg:grid-cols-2">
      <div className="space-y-4">
        <div className="rounded-xl border border-border bg-card p-5 shadow-sm">{form}</div>
        <AIDisclaimer />
      </div>
      <div>{output}</div>
    </div>
  );
}
