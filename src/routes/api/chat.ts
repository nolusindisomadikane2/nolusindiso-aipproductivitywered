import { createFileRoute } from "@tanstack/react-router";
import { convertToModelMessages, streamText, type UIMessage } from "ai";
import { getModel } from "@/lib/ai-gateway.server";

const SYSTEM = `You are Flowcore Assistant, an AI workplace productivity assistant.
You help professionals automate tasks: drafting emails, summarizing meetings, planning work, researching topics, and answering general workplace questions.
Be concise, structured, and practical. Use markdown (headings, bullet lists) when it helps clarity.
If a request is outside workplace productivity, you can still help but stay professional.`;

export const Route = createFileRoute("/api/chat")({
  server: {
    handlers: {
      POST: async ({ request }) => {
        const { messages } = (await request.json()) as { messages?: UIMessage[] };
        if (!Array.isArray(messages)) {
          return new Response("Messages required", { status: 400 });
        }
        try {
          const result = streamText({
            model: getModel(),
            system: SYSTEM,
            messages: await convertToModelMessages(messages),
          });
          return result.toUIMessageStreamResponse({ originalMessages: messages });
        } catch (err) {
          console.error("[chat]", err);
          return new Response("AI error", { status: 500 });
        }
      },
    },
  },
});
