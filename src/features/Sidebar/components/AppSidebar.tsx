"use client"

import { ArrowRight, Book, BookText, Calendar, Gamepad, Home, Inbox, Play, Search, Settings, Tally1, Users } from "lucide-react"

import {
    Sidebar,
    SidebarContent,
    SidebarGroup,
    SidebarGroupContent,
    SidebarGroupLabel,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
} from "@/components/ui/sidebar"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"

// Menu items.
const settingsData = [
    {
        title: "Manage Teams",
        url: "/game/team",
        icon: Users,
    },
]

const gameData = [
    {
        title: "Game Rules",
        url: "/game/rules",
        icon: BookText,
    },
    {
        title: "Play the game",
        url: "/game/play",
        icon: Play,
    },
]

export function AppSidebar() {
    const pathname = usePathname();
    const isActive = (path: string) => pathname === path;

    return (
        <Sidebar>
            <SidebarContent className="w-[16rem] py-4 bg-neutral-100 dark:bg-neutral-700">
                <SidebarGroup>
                    <SidebarGroupLabel className="flex items-center gap-2 text-lg font-medium border-b-2 border-neutral-300 dark:border-neutral-600 pb-2 rounded-none">
                        <Settings />
                        Settings
                    </SidebarGroupLabel>
                    <SidebarGroupContent className="mb-4">
                        <SidebarMenu>
                            {settingsData.map((item: any) => (
                                <SidebarMenuItem key={item.title}>
                                    <SidebarMenuButton className="mt-2" asChild>
                                        <a href={item.url} >
                                            < item.icon />
                                            <span>{item.title}</span>
                                            {
                                                isActive(item.url) && <Tally1 className="w-6 h-6 text-[#ec672a]" />
                                            }
                                        </a>
                                    </SidebarMenuButton>
                                </SidebarMenuItem>
                            ))}
                        </SidebarMenu>
                    </SidebarGroupContent>
                    <SidebarGroupLabel className="flex items-center gap-2 text-lg font-medium border-b-2 border-neutral-300 dark:border-neutral-600 pb-2 rounded-none">
                        <Gamepad />
                        Game
                    </SidebarGroupLabel>
                    <SidebarGroupContent>
                        <SidebarMenu>
                            {gameData.map((item: any) => (
                                <SidebarMenuItem className="text-sm font-medium" key={item.title}>
                                    <SidebarMenuButton className="mt-2" asChild>
                                        <a href={item.url}>
                                            <item.icon />
                                            <span>{item.title}</span>
                                        </a>
                                    </SidebarMenuButton>
                                </SidebarMenuItem>
                            ))}
                        </SidebarMenu>
                    </SidebarGroupContent>
                </SidebarGroup>
            </SidebarContent>
        </Sidebar >
    )
}   