import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Mail, Loader2, Wand2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
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

export const Route = createFileRoute("/email")({
  head: () => ({ meta: [{ title: "Smart Email Generator — Flowcore" }] }),
  component: EmailPage,
});

function EmailPage() {
  const { output, setOutput, loading, generate } = useAITool("email");
  const [recipient, setRecipient] = useState("");
  const [purpose, setPurpose] = useState("");
  const [tone, setTone] = useState("Professional");
  const [keyPoints, setKeyPoints] = useState("");

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!purpose.trim()) return;
    generate({ recipient, purpose, tone, keyPoints });
  };

  return (
    <div className="mx-auto max-w-6xl">
      <PageHeader
        icon={Mail}
        title="Smart Email Generator"
        description="Generate clear, professional emails. Edit the output before sending."
      />
      <AIToolLayout
        form={
          <form onSubmit={submit} className="space-y-4">
            <div className="space-y-1.5">
              <Label htmlFor="recipient">Recipient / context</Label>
              <Input
                id="recipient"
                placeholder="e.g. Hiring manager at Acme"
                value={recipient}
                onChange={(e) => setRecipient(e.target.value)}
              />
            </div>
            <div className="space-y-1.5">
              <Label htmlFor="purpose">Purpose *</Label>
              <Textarea
                id="purpose"
                required
                placeholder="What is this email about?"
                value={purpose}
                onChange={(e) => setPurpose(e.target.value)}
                rows={3}
              />
            </div>
            <div className="space-y-1.5">
              <Label>Tone</Label>
              <Select value={tone} onValueChange={setTone}>
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {["Professional", "Friendly", "Concise", "Persuasive", "Apologetic", "Formal"].map(
                    (t) => (
                      <SelectItem key={t} value={t}>
                        {t}
                      </SelectItem>
                    ),
                  )}
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-1.5">
              <Label htmlFor="kp">Key points (optional)</Label>
              <Textarea
                id="kp"
                placeholder="Bullet points to include…"
                value={keyPoints}
                onChange={(e) => setKeyPoints(e.target.value)}
                rows={3}
              />
            </div>
            <Button type="submit" disabled={loading} className="w-full">
              {loading ? (
                <Loader2 className="h-4 w-4 animate-spin" />
              ) : (
                <Wand2 className="h-4 w-4" />
              )}
              {loading ? "Generating…" : "Generate Email"}
            </Button>
          </form>
        }
        output={<AIOutput value={output} onChange={setOutput} />}
      />
    </div>
  );
}
