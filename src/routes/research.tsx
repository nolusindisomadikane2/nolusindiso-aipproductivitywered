import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Search, Loader2, Wand2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
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

export const Route = createFileRoute("/research")({
  head: () => ({ meta: [{ title: "AI Research Assistant — Flowcore" }] }),
  component: ResearchPage,
});

function ResearchPage() {
  const { output, setOutput, loading, generate } = useAITool("research");
  const [topic, setTopic] = useState("");
  const [depth, setDepth] = useState("Standard");
  const [audience, setAudience] = useState("");

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!topic.trim()) return;
    generate({ topic, depth, audience });
  };

  return (
    <div className="mx-auto max-w-6xl">
      <PageHeader
        icon={Search}
        title="AI Research Assistant"
        description="Get a structured briefing on any topic. Always verify with primary sources."
      />
      <AIToolLayout
        form={
          <form onSubmit={submit} className="space-y-4">
            <div className="space-y-1.5">
              <Label htmlFor="topic">Topic *</Label>
              <Input
                id="topic"
                required
                value={topic}
                onChange={(e) => setTopic(e.target.value)}
                placeholder="e.g. AI regulation in the EU"
              />
            </div>
            <div className="space-y-1.5">
              <Label>Depth</Label>
              <Select value={depth} onValueChange={setDepth}>
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {["Quick brief", "Standard", "Deep dive"].map((d) => (
                    <SelectItem key={d} value={d}>
                      {d}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-1.5">
              <Label htmlFor="aud">Audience</Label>
              <Input
                id="aud"
                value={audience}
                onChange={(e) => setAudience(e.target.value)}
                placeholder="e.g. Executive team, engineers…"
              />
            </div>
            <Button type="submit" disabled={loading} className="w-full">
              {loading ? (
                <Loader2 className="h-4 w-4 animate-spin" />
              ) : (
                <Wand2 className="h-4 w-4" />
              )}
              {loading ? "Researching…" : "Generate Briefing"}
            </Button>
          </form>
        }
        output={<AIOutput value={output} onChange={setOutput} />}
      />
    </div>
  );
}
