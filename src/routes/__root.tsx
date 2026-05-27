import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/AppSidebar";
import { Toaster } from "@/components/ui/sonner";

import appCss from "../styles.css?url";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-foreground">404</h1>
        <p className="mt-2 text-sm text-muted-foreground">Page not found.</p>
        <a
          href="/"
          className="mt-6 inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:bg-primary/90"
        >
          Go home
        </a>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-xl font-semibold">Something went wrong</h1>
        <p className="mt-2 text-sm text-muted-foreground">Please try again.</p>
        <button
          onClick={() => {
            router.invalidate();
            reset();
          }}
          className="mt-6 rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:bg-primary/90"
        >
          Try again
        </button>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Flowcore — AI Workplace Productivity Assistant" },
      {
        name: "description",
        content:
          "Flowcore is an AI workplace productivity assistant: draft emails, summarize meetings, plan tasks, and research faster.",
      },
      { property: "og:title", content: "Flowcore — AI Workplace Productivity Assistant" },
      { name: "twitter:title", content: "Flowcore — AI Workplace Productivity Assistant" },
      { name: "description", content: "AI Workplace Productivity Assistant automates professional tasks with AI-powered tools." },
      { property: "og:description", content: "AI Workplace Productivity Assistant automates professional tasks with AI-powered tools." },
      { name: "twitter:description", content: "AI Workplace Productivity Assistant automates professional tasks with AI-powered tools." },
      { property: "og:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/a471793d-0dd5-4827-a95d-fa81f91c2eec/id-preview-9f253ddd--5129861f-3404-482e-833d-add1cb0fd5ef.lovable.app-1779871173415.png" },
      { name: "twitter:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/a471793d-0dd5-4827-a95d-fa81f91c2eec/id-preview-9f253ddd--5129861f-3404-482e-833d-add1cb0fd5ef.lovable.app-1779871173415.png" },
      { name: "twitter:card", content: "summary_large_image" },
      { property: "og:type", content: "website" },
    ],
    links: [{ rel: "stylesheet", href: appCss }],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();
  return (
    <QueryClientProvider client={queryClient}>
      <SidebarProvider>
        <div className="flex min-h-screen w-full bg-background">
          <AppSidebar />
          <div className="flex min-w-0 flex-1 flex-col">
            <header className="sticky top-0 z-10 flex h-14 items-center gap-2 border-b border-border bg-background/80 px-4 backdrop-blur">
              <SidebarTrigger />
              <div className="ml-2 text-sm font-medium text-muted-foreground">Flowcore</div>
            </header>
            <main className="flex-1 p-4 md:p-8">
              <Outlet />
            </main>
          </div>
        </div>
      </SidebarProvider>
      <Toaster richColors position="top-right" />
    </QueryClientProvider>
  );
}
