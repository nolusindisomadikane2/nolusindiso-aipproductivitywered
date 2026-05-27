import { Info } from "lucide-react";

export function AIDisclaimer({ className = "" }: { className?: string }) {
  return (
    <div
      className={`flex items-start gap-2 rounded-lg border border-border bg-muted/40 px-3 py-2 text-xs text-muted-foreground ${className}`}
    >
      <Info className="mt-0.5 h-3.5 w-3.5 shrink-0" />
      <span>
        AI-generated content can be inaccurate or biased. Review and edit before sending,
        publishing, or making decisions. Do not enter confidential information you wouldn't
        share with a third party.
      </span>
    </div>
  );
}
