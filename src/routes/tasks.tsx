import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { ListChecks, Loader2, Wand2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { PageHeader } from "@/components/PageHeader";
import { AIToolLayout } from "@/components/AIToolLayout";
import { AIOutput } from "@/components/AIOutput";
import { useAITool } from "@/lib/useAITool";

export const Route = createFileRoute("/tasks")({
  head: () => ({ meta: [{ title: "AI Task Planner — Flowcore" }] }),
  component: TasksPage,
});

function TasksPage() {
  const { output, setOutput, loading, generate } = useAITool("tasks");
  const [goal, setGoal] = useState("");
  const [deadline, setDeadline] = useState("");
  const [context, setContext] = useState("");

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!goal.trim()) return;
    generate({ goal, deadline, context });
  };

  return (
    <div className="mx-auto max-w-6xl">
      <PageHeader
        icon={ListChecks}
        title="AI Task Planner"
        description="Describe a goal — get a prioritized, scheduled task breakdown."
      />
      <AIToolLayout
        form={
          <form onSubmit={submit} className="space-y-4">
            <div className="space-y-1.5">
              <Label htmlFor="goal">Goal *</Label>
              <Textarea
                id="goal"
                required
                value={goal}
                onChange={(e) => setGoal(e.target.value)}
                placeholder="e.g. Launch our new pricing page"
                rows={3}
              />
            </div>
            <div className="space-y-1.5">
              <Label htmlFor="deadline">Deadline / timeframe</Label>
              <Input
                id="deadline"
                value={deadline}
                onChange={(e) => setDeadline(e.target.value)}
                placeholder="e.g. 2 weeks, by Aug 30"
              />
            </div>
            <div className="space-y-1.5">
              <Label htmlFor="ctx">Context (team, constraints)</Label>
              <Textarea
                id="ctx"
                value={context}
                onChange={(e) => setContext(e.target.value)}
                placeholder="Optional context to consider…"
                rows={3}
              />
            </div>
            <Button type="submit" disabled={loading} className="w-full">
              {loading ? (
                <Loader2 className="h-4 w-4 animate-spin" />
              ) : (
                <Wand2 className="h-4 w-4" />
              )}
              {loading ? "Planning…" : "Generate Plan"}
            </Button>
          </form>
        }
        output={<AIOutput value={output} onChange={setOutput} />}
      />
    </div>
  );
}
