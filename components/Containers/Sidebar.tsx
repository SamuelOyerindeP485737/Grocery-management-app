"use client"

import { useState } from "react"
import { Home, Search, Settings, User, Menu } from "lucide-react"
import {page} from "@/app/page";

const menuItems = [
    { icon: Home, label: "Home" },
    { icon: Search, label: "Search" },
    { icon: User, label: "Profile" },
    { icon: Settings, label: "Settings" },
]

type pageType = {
    Page: page[]
}

export type sidebarToggleType = {
    sidebarState: boolean
    sidebarStateToggleAction: (sidebarState: boolean) => void;
}

type sidebarProps = pageType & sidebarToggleType;

export default function MySidebar({sidebarState, sidebarStateToggleAction, Page} :sidebarProps) {
    // simple state to toggle the sidebar open/closed
    
    
    return (
        <div className="flex h-screen bg-background text-foreground">
            {/* Sidebar: width animates between open and collapsed via Tailwind transition */}
            <aside className={`${sidebarState ? "w-60" : "w-0"} flex flex-col border-r border-[var(--border-color)] bg-card transition-all duration-300 ease-in-out overflow-hidden`}>
                {/* Header with toggle and new page button */}
                <div className="flex items-center gap-1 p-2">
                    <button onClick={() => sidebarStateToggleAction(!sidebarState)} className={`${sidebarState ? "opacity-100" : "opacity-0"} flex items-center justify-center rounded-md p-2 hover:bg-muted transition-opacity duration-200 aria-label="Toggle sidebar`}>
                        <Menu className="h-5 w-5" />
                    </button>
                    <button
                        className="flex items-center justify-center rounded-md p-2 hover:bg-muted transition-colors"
                        aria-label="New page"
                    >
            <span className={`${sidebarState ? "opacity-100" : "opacity-0"} whitespace-nowrap transition-opacity duration-200 text-sm`}>
              new page
            </span>
                    </button>
                </div>

                {/* Menu items */}
                <nav className="flex flex-col gap-1 p-2">
                    {Page.map(({ page_id,title }) => (
                        <button key={page_id} className="flex items-center gap-3 rounded-md p-2 hover:bg-muted transition-colors">
                            {/* Label fades out when collapsed */}
                            <span className={`${sidebarState ? "opacity-100" : "opacity-0"} whitespace-nowrap transition-opacity duration-200`}>
                                {title}
                            </span>
                        </button>
                    ))}
                </nav>
            </aside>
            
            
        </div>
    )
}