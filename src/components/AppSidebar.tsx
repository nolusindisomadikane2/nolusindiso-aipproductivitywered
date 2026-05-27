import { Link, useRouterState } from "@tanstack/react-router";
import {
  LayoutDashboard,
  Mail,
  FileText,
  ListChecks,
  Search,
  MessagesSquare,
} from "lucide-react";
import flowcoreLogo from "@/assets/flowcore-logo.png";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarFooter,
} from "@/components/ui/sidebar";

const items = [
  { title: "Dashboard", url: "/", icon: LayoutDashboard },
  { title: "Email Generator", url: "/email", icon: Mail },
  { title: "Meeting Summarizer", url: "/meetings", icon: FileText },
  { title: "Task Planner", url: "/tasks", icon: ListChecks },
  { title: "Research Assistant", url: "/research", icon: Search },
  { title: "AI Chatbot", url: "/chat", icon: MessagesSquare },
];

export function AppSidebar() {
  const path = useRouterState({ select: (r) => r.location.pathname });

  return (
    <Sidebar collapsible="icon">
      <SidebarHeader>
        <Link to="/" className="flex items-center gap-2 px-2 py-2">
          <img
            src={flowcoreLogo}
            alt="Flowcore logo"
            width={32}
            height={32}
            className="h-8 w-8 rounded-lg"
          />
          <div className="flex flex-col leading-tight group-data-[collapsible=icon]:hidden">
            <span className="text-sm font-semibold">Flowcore</span>
            <span className="text-xs text-muted-foreground">AI Workplace</span>
          </div>
        </Link>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Workspace</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.url}>
                  <SidebarMenuButton asChild isActive={path === item.url} tooltip={item.title}>
                    <Link to={item.url}>
                      <item.icon />
                      <span>{item.title}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter>
        <div className="space-y-1 px-2 py-2 text-[10px] leading-snug text-muted-foreground group-data-[collapsible=icon]:hidden">
          <p>AI outputs may be inaccurate. Review before sending or sharing.</p>
          <p>© {new Date().getFullYear()} Nolusindiso Madikane. All rights reserved.</p>
        </div>
      </SidebarFooter>
    </Sidebar>
  );
}
