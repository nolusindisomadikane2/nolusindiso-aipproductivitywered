import { createServerFn } from "@tanstack/react-start";
import { generateText } from "ai";
import { z } from "zod";
import { getModel } from "./ai-gateway.server";

const PROMPTS = {
  email: (input: {
    recipient: string;
    purpose: string;
    tone: string;
    keyPoints: string;
  }) => `Write a professional email.

Recipient / context: ${input.recipient || "Unspecified"}
Purpose: ${input.purpose}
Tone: ${input.tone}
Key points to include: ${input.keyPoints || "None specified"}

Return ONLY the email in this format:
Subject: <subject line>

<email body with greeting, body paragraphs, and sign-off>`,

  summary: (input: { notes: string; style: string }) => `Summarize the following meeting notes.

Style: ${input.style}

Notes:
"""
${input.notes}
"""

Return markdown with these sections:
## Summary
A 2-3 sentence overview.

## Key Decisions
- bullet list

## Action Items
- [ ] Owner — Task — Due (if mentioned)

## Open Questions
- bullet list (or "None")`,

  tasks: (input: { goal: string; deadline: string; context: string }) => `You are an AI task planner. Break the user's goal into a concrete, ordered plan.

Goal: ${input.goal}
Deadline / timeframe: ${input.deadline || "Not specified"}
Context: ${input.context || "None"}

Return markdown:
## Plan Overview
1-2 sentence strategy.

## Tasks
A numbered list. For each task: **Title** — short description — Priority (High/Med/Low) — Est. time.

## Suggested Schedule
A short day-by-day or week-by-week breakdown.`,

  research: (input: { topic: string; depth: string; audience: string }) => `Act as a research assistant. Produce a clear, structured briefing.

Topic: ${input.topic}
Depth: ${input.depth}
Audience: ${input.audience || "General professional"}

Return markdown:
## Overview
## Key Concepts
## Current State / Trends
## Pros & Cons (or Opportunities & Risks)
## Recommended Next Steps
## Suggested Sources to Verify
(List source types/queries; do not fabricate URLs.)

Be factual and clearly flag uncertainty.`,
} as const;

export const generateContent = createServerFn({ method: "POST" })
  .inputValidator(
    z.object({
      kind: z.enum(["email", "summary", "tasks", "research"]),
      payload: z.record(z.string(), z.string()),
    }),
  )
  .handler(async ({ data }) => {
    const builder = PROMPTS[data.kind] as (p: Record<string, string>) => string;
    const prompt = builder(data.payload as never);
    try {
      const { text } = await generateText({
        model: getModel(),
        prompt,
      });
      return { text };
    } catch (err) {
      console.error("[ai]", err);
      throw new Error("AI generation failed. Please try again.");
    }
  });
