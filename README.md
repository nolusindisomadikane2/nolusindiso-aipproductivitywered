# Flowcore — AI Workplace Productivity Assistant

Flowcore is a modern SaaS-style workspace that helps professionals automate everyday workplace tasks with AI. Built with TanStack Start, React, Tailwind CSS, and Lovable Cloud.

© Nolusindiso Madikane. All rights reserved.

## 📌 Project Overview

Flowcore is an AI-powered workplace productivity assistant designed for professionals, teams, and small businesses. It centralizes the most common knowledge-work tasks — writing emails, summarizing meetings, planning work, researching topics, and answering ad-hoc questions — into a single clean SaaS dashboard powered by large language models. Instead of jumping between ChatGPT tabs, note apps, and email drafts, users get one consistent, branded workspace with structured prompts and editable AI outputs.

## ❗ Problem Statement

Modern professionals lose hours every week to repetitive, low-leverage work: drafting routine emails, cleaning up meeting notes, turning vague goals into actionable plans, and gathering background research. Existing AI tools are powerful but fragmented — they require users to craft prompts from scratch, copy outputs between apps, and trust raw results without guardrails. There is no lightweight, role-agnostic workspace that packages these everyday tasks into ready-to-use, responsible AI workflows.

## 💡 Solution Statement

Flowcore solves this by providing a unified, opinionated AI workspace with purpose-built tools for the highest-impact workplace tasks. Each tool ships with a structured prompt template, sensible defaults, and an editable output area so users can refine results before using them. A persistent Responsible AI disclaimer reminds users to review outputs and avoid sharing sensitive data, making AI productivity safer and more accessible — without forcing users to become prompt engineers.

## 🎯 Project Objectives

- Reduce time spent on routine writing, summarizing, and planning tasks by at least 50%.
- Provide a single, consistent UI for multiple AI workflows instead of scattered tools.
- Make AI outputs easy to review, edit, and reuse — never "take it or leave it".
- Promote responsible AI use through clear disclaimers and safe-by-default UX.
- Deliver a modern, responsive SaaS experience that works on desktop and mobile.

## ✅ Core Functional Requirements

1. **Smart Email Generator** — Generate professional emails from a short brief, with editable output and tone control.
2. **Meeting Notes Summarizer** — Convert raw notes or transcripts into clean summaries, key decisions, and action items.
3. **AI Task Planner** — Break a high-level goal into a structured, prioritized task list with suggested next steps.
4. **AI Research Assistant** — Produce concise research briefs on any topic with key points and suggested follow-ups.
5. **AI Chatbot Interface** — Free-form conversational assistant for quick questions, brainstorming, and clarifications.
6. **Modern Dashboard UI** — Clean SaaS-style home with quick access to all AI tools.
7. **Sidebar Navigation** — Persistent, collapsible sidebar to switch between tools on desktop and mobile.
8. **Responsive Design** — Fully usable on mobile, tablet, and desktop breakpoints.
9. **Structured AI Prompts** — Each tool wraps user input in a tuned system prompt for consistent results.
10. **Editable AI Outputs** — All generated content is rendered in editable text areas so users can refine before using.
11. **Responsible AI Disclaimer** — Visible disclaimer reminding users to review outputs and avoid sharing confidential data.

## ✨ Features

- **Smart Email Generator** — Draft professional emails from a short prompt.
- **Meeting Notes Summarizer** — Turn raw notes/transcripts into clean summaries with action items.
- **AI Task Planner** — Break goals into structured, prioritized task plans.
- **AI Research Assistant** — Get concise, sourced research briefs on any topic.
- **AI Chatbot** — General-purpose assistant for quick questions and brainstorming.

All AI outputs are **editable** and include a **Responsible AI disclaimer** — review before sending or sharing.

## 🧱 Tech Stack

- **Framework:** TanStack Start (React 19 + Vite 7)
- **Styling:** Tailwind CSS v4 with semantic design tokens (`src/styles.css`)
- **UI:** shadcn/ui components
- **Backend:** Lovable Cloud (Supabase under the hood)
- **AI:** Lovable AI Gateway (Google Gemini models)
- **Routing:** File-based routes in `src/routes/`

## 🚀 Getting Started

```bash
bun install
bun run dev
```

Then open the local preview URL printed in the terminal.

## 📁 Project Structure

```
src/
├── assets/              # Logo & static assets
├── components/          # AppSidebar, AIToolLayout, AIOutput, PageHeader…
│   └── ui/              # shadcn/ui primitives
├── integrations/
│   └── supabase/        # Auto-generated clients (do not edit)
├── lib/
│   ├── ai.functions.ts        # Server functions (createServerFn)
│   ├── ai-gateway.server.ts   # Lovable AI Gateway helper
│   └── useAITool.ts           # Shared hook for AI tool pages
├── routes/              # File-based routes
│   ├── __root.tsx       # App shell
│   ├── index.tsx        # Dashboard
│   ├── email.tsx        # Smart Email Generator
│   ├── meetings.tsx     # Meeting Notes Summarizer
│   ├── tasks.tsx        # AI Task Planner
│   ├── research.tsx     # AI Research Assistant
│   ├── chat.tsx         # AI Chatbot
│   └── api/chat.ts      # Streaming chat endpoint
└── styles.css           # Design tokens & Tailwind theme
```

## 🎨 Design System

Colors, typography, and spacing are defined as semantic tokens in `src/styles.css` using `oklch`. Components consume tokens like `bg-primary`, `text-muted-foreground`, etc. — never hardcoded colors.

## 🛡️ Responsible AI

AI outputs may be inaccurate or incomplete. Always review and edit before sending, sharing, or acting on them. Do not paste confidential or personal data into prompts.

## 📦 Deployment

This project is deployed via Lovable. Use the **Publish** button in the Lovable editor to ship updates.

---

Made with ❤️ by **Nolusindiso Madikane**
