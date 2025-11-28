"use client"

import { ArrowRight, Book, BookOpen, BookText, Calendar, Gamepad, Home, Inbox, Play, Search, Settings, Tally1, Users } from "lucide-react"

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
        title: "Docs",
        url: "/game/docs",
        icon: BookOpen,
    },
    {
        title: "Play Game",
        url: "/game/play",
        icon: Play,
    },
]

export function AppSidebar() {
    const pathname = usePathname();
    const isActive = (path: string) => pathname === path || pathname.startsWith(path + '/');

    return (
        <Sidebar>
            <SidebarContent className="w-[16rem] py-4 bg-[#f3f2e3] border-r-2 border-[#7f2b13]">
                <SidebarGroup>
                    <SidebarGroupLabel className="flex items-center gap-2 text-lg font-cooper text-[#7f2b13] border-b-4 border-[#ec672a] pb-3 rounded-none">
                        <Settings className="h-5 w-5 text-[#ec672a]" />
                        Settings
                    </SidebarGroupLabel>
                    <SidebarGroupContent className="mb-6">
                        <SidebarMenu>
                            {settingsData.map((item: typeof settingsData[0]) => (
                                <SidebarMenuItem key={item.title}>
                                    <SidebarMenuButton
                                        className={cn(
                                            "mt-2 font-inter text-[#7f2b13] transition-all duration-200",
                                            isActive(item.url)
                                                ? "bg-[#ec672a] text-white hover:bg-[#e85a2d]"
                                                : "hover:bg-white/50 hover:text-[#ec672a]"
                                        )}
                                        asChild
                                    >
                                        <a href={item.url}>
                                            <item.icon className={cn(
                                                "h-4 w-4",
                                                isActive(item.url) ? "text-white" : "text-[#ec672a]"
                                            )} />
                                            <span >{item.title}</span>
                                            {isActive(item.url) && (
                                                <Tally1 className="w-5 h-5 text-white ml-auto" />
                                            )}
                                        </a>
                                    </SidebarMenuButton>
                                </SidebarMenuItem>
                            ))}
                        </SidebarMenu>
                    </SidebarGroupContent>
                    <SidebarGroupLabel className="flex items-center gap-2 text-lg font-cooper text-[#7f2b13] border-b-4 border-[#ec672a] pb-3 rounded-none">
                        <Gamepad className="h-5 w-5 text-[#ec672a]" />
                        Game
                    </SidebarGroupLabel>
                    <SidebarGroupContent>
                        <SidebarMenu>
                            {gameData.map((item: typeof gameData[0]) => (
                                <SidebarMenuItem key={item.title}>
                                    <SidebarMenuButton
                                        className={cn(
                                            "mt-2 font-inter text-[#7f2b13] transition-all duration-200",
                                            isActive(item.url)
                                                ? "bg-[#ec672a] text-white hover:bg-[#e85a2d]"
                                                : "hover:bg-white/50 hover:text-[#ec672a]"
                                        )}
                                        asChild
                                    >
                                        <a href={item.url}>
                                            <item.icon className={cn(
                                                "h-4 w-4",
                                                isActive(item.url) ? "text-white" : "text-[#ec672a]"
                                            )} />
                                            <span>{item.title}</span>
                                            {isActive(item.url) && (
                                                <Tally1 className="w-5 h-5 text-white ml-auto" />
                                            )}
                                        </a>
                                    </SidebarMenuButton>
                                </SidebarMenuItem>
                            ))}
                        </SidebarMenu>
                    </SidebarGroupContent>
                </SidebarGroup>
            </SidebarContent>
        </Sidebar>
    )
}   