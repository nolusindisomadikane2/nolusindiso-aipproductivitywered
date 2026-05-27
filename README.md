# Flowcore — AI Workplace Productivity Assistant

Flowcore is a modern SaaS-style workspace that helps professionals automate everyday workplace tasks with AI. Built with TanStack Start, React, Tailwind CSS, and Lovable Cloud.

© Nolusindiso Madikane. All rights reserved.

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
