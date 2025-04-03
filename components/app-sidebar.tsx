"use client";

import * as React from "react";
import {
  IconChartBar,
  IconDatabase,
  IconFileWord,
  IconFolder,
  IconHelp,
  IconInnerShadowTop,
  IconReport,
  IconSearch,
  IconSettings,
  IconUsers,
} from "@tabler/icons-react";
import { LayoutDashboard, Users, UserRound } from "lucide-react"

import { NavMain } from "@/components/nav-main";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";

const data = {
  user: {
    name: "shadcn",
    email: "m@example.com",
    avatar: "/avatars/shadcn.jpg",
  },
  navMain: [
    {
      title: "Dashboard",
      url: "/",  
      icon: LayoutDashboard,
    },
    {
      title: "Portfolio",
      url: "/portfolio",  
      icon: UserRound,
    },
    {
      title: "Notifications",
      url: "/notifications",
      icon: IconChartBar,
    },
    {
      title: "Notices",
      url: "/notices",
      icon: IconFolder,
    },
    {
      title: "Auction",
      url: "/auction",
      icon: IconFolder,
    },
    {
      title: "Data Upload",
      url: "/data-upload",
      icon: IconUsers,
    },
    {
      title: "Control Panel",
      url: "/control-panel",
      icon: IconUsers,
    },
    {
      title: "User Management",
      url: "/user-management",
      icon: Users,
    },
    {
      title: "Permissions",
      url: "/data-upload",
      icon: IconUsers,
    },
  ],
  navSecondary: [
    {
      title: "Settings",
      url: "/settings",
      icon: IconSettings,
    },
    {
      title: "Get Help",
      url: "/help",
      icon: IconHelp,
    },
    {
      title: "Search",
      url: "/search",
      icon: IconSearch,
    },
  ],
  documents: [
    {
      name: "Data Library",
      url: "/data-library",
      icon: IconDatabase,
    },
    {
      name: "Reports",
      url: "/reports",
      icon: IconReport,
    },
    {
      name: "Word Assistant",
      url: "/word-assistant",
      icon: IconFileWord,
    },
  ],
};

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="offcanvas" {...props}>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton
              asChild
              className="data-[slot=sidebar-menu-button]:!p-1.5"
            >
              <a href="#">
                <IconInnerShadowTop className="!size-5" />
                <span className="text-base font-semibold">resollect</span>
              </a>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
       
        <NavMain 
        // @ts-ignore
        items={data.navMain} />
      </SidebarContent>
      <SidebarFooter>

        <span className="text-2xl">powered by resollect</span>
      </SidebarFooter>
    </Sidebar>
  );
}
