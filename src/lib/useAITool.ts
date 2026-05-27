import { useState } from "react";
import { useServerFn } from "@tanstack/react-start";
import { toast } from "sonner";
import { generateContent } from "./ai.functions";

type Kind = "email" | "summary" | "tasks" | "research";

export function useAITool(kind: Kind) {
  const run = useServerFn(generateContent);
  const [output, setOutput] = useState("");
  const [loading, setLoading] = useState(false);

  const generate = async (payload: Record<string, string>) => {
    setLoading(true);
    setOutput("");
    try {
      const { text } = await run({ data: { kind, payload } });
      setOutput(text);
    } catch (e) {
      console.error(e);
      toast.error(e instanceof Error ? e.message : "Generation failed");
    } finally {
      setLoading(false);
    }
  };

  return { output, setOutput, loading, generate };
}
