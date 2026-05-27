import { createFileRoute, Link } from "@tanstack/react-router";
import {
  Mail,
  FileText,
  ListChecks,
  Search,
  MessagesSquare,
  ArrowRight,
  Sparkles,
} from "lucide-react";
import { AIDisclaimer } from "@/components/AIDisclaimer";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Dashboard — Flowcore" },
      {
        name: "description",
        content: "Your AI workplace productivity dashboard.",
      },
    ],
  }),
  component: Dashboard,
});

const tools = [
  {
    to: "/email",
    icon: Mail,
    title: "Smart Email Generator",
    desc: "Draft polished emails in any tone in seconds.",
  },
  {
    to: "/meetings",
    icon: FileText,
    title: "Meeting Notes Summarizer",
    desc: "Turn raw notes into summaries and action items.",
  },
  {
    to: "/tasks",
    icon: ListChecks,
    title: "AI Task Planner",
    desc: "Break goals into prioritized, scheduled tasks.",
  },
  {
    to: "/research",
    icon: Search,
    title: "AI Research Assistant",
    desc: "Get structured briefings on any topic.",
  },
  {
    to: "/chat",
    icon: MessagesSquare,
    title: "AI Chatbot",
    desc: "Ask anything — your conversational workplace copilot.",
  },
] as const;

function Dashboard() {
  return (
    <div className="mx-auto max-w-6xl">
      <section className="mb-8 rounded-2xl border border-border bg-gradient-to-br from-accent/60 via-card to-card p-8 shadow-sm">
        <div className="flex items-center gap-2 text-xs font-medium uppercase tracking-wider text-primary">
          <Sparkles className="h-3.5 w-3.5" /> Flowcore Workspace
        </div>
        <h1 className="mt-3 text-3xl font-semibold tracking-tight md:text-4xl">
          Your AI productivity copilot for work.
        </h1>
        <p className="mt-2 max-w-2xl text-sm text-muted-foreground md:text-base">
          Draft emails, summarize meetings, plan your day, and research topics — all in one
          clean workspace.
        </p>
      </section>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {tools.map((t) => (
          <Link
            key={t.to}
            to={t.to}
            className="group rounded-xl border border-border bg-card p-5 shadow-sm transition-all hover:-translate-y-0.5 hover:border-primary/40 hover:shadow-md"
          >
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent text-accent-foreground">
              <t.icon className="h-5 w-5" />
            </div>
            <div className="mt-4 flex items-center justify-between">
              <h3 className="font-semibold">{t.title}</h3>
              <ArrowRight className="h-4 w-4 text-muted-foreground transition-transform group-hover:translate-x-0.5" />
            </div>
            <p className="mt-1 text-sm text-muted-foreground">{t.desc}</p>
          </Link>
        ))}
      </div>

      <div className="mt-8">
        <AIDisclaimer />
      </div>
    </div>
  );
}
