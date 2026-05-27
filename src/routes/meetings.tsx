import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { FileText, Loader2, Wand2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { PageHeader } from "@/components/PageHeader";
import { AIToolLayout } from "@/components/AIToolLayout";
import { AIOutput } from "@/components/AIOutput";
import { useAITool } from "@/lib/useAITool";

export const Route = createFileRoute("/meetings")({
  head: () => ({ meta: [{ title: "Meeting Summarizer — Flowcore" }] }),
  component: MeetingsPage,
});

function MeetingsPage() {
  const { output, setOutput, loading, generate } = useAITool("summary");
  const [notes, setNotes] = useState("");
  const [style, setStyle] = useState("Executive");

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!notes.trim()) return;
    generate({ notes, style });
  };

  return (
    <div className="mx-auto max-w-6xl">
      <PageHeader
        icon={FileText}
        title="Meeting Notes Summarizer"
        description="Paste raw meeting notes or transcripts. Get a clean summary with action items."
      />
      <AIToolLayout
        form={
          <form onSubmit={submit} className="space-y-4">
            <div className="space-y-1.5">
              <Label htmlFor="notes">Meeting notes / transcript *</Label>
              <Textarea
                id="notes"
                required
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                placeholder="Paste your notes here…"
                rows={14}
              />
            </div>
            <div className="space-y-1.5">
              <Label>Summary style</Label>
              <Select value={style} onValueChange={setStyle}>
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {["Executive", "Detailed", "Bullet points", "Action-focused"].map((s) => (
                    <SelectItem key={s} value={s}>
                      {s}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <Button type="submit" disabled={loading} className="w-full">
              {loading ? (
                <Loader2 className="h-4 w-4 animate-spin" />
              ) : (
                <Wand2 className="h-4 w-4" />
              )}
              {loading ? "Summarizing…" : "Summarize"}
            </Button>
          </form>
        }
        output={<AIOutput value={output} onChange={setOutput} />}
      />
    </div>
  );
}
