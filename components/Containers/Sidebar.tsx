"use client"

import { useState } from "react"
import { Home, Search, Settings, User, Menu } from "lucide-react"
import {currentPageType} from "@/app/page";
import {page} from "@/app/page";

const menuItems = [
    { icon: Home, label: "Home" },
    { icon: Search, label: "Search" },
    { icon: User, label: "Profile" },
    { icon: Settings, label: "Settings" },
]

type pageType = {
    Page: page[]
    addNewPage: () => void;
}

export type sidebarToggleType = {
    sidebarState: boolean
    sidebarStateToggleAction: (sidebarState: boolean) => void;
}

type sidebarProps = pageType & sidebarToggleType & currentPageType;

export default function MySidebar({sidebarState, sidebarStateToggleAction, Page, addNewPage, currentPage, setCurrentPage} :sidebarProps) {
    // simple state to toggle the sidebar open/closed
    
    
    return (
        <div className="flex h-screen bg-background text-foreground">
            {/* Sidebar: width animates between open and collapsed via Tailwind transition */}
            <aside className={`${sidebarState ? "w-70" : "w-0"} flex flex-col border-r border-[var(--border-color)] bg-card transition-all duration-300 ease-in-out overflow-hidden`}>
                {/* Header with toggle and new page button */}
                <div className="flex items-center gap-1 p-2">
                    
                    <button
                        className="flex items-center justify-center rounded-full p-2 bg-[var(--sidebar-btn-background)] hover:bg-[var(--sidebar-hover-background)] w-full"
                        aria-label="New page"
                        onClick={addNewPage}
                    >
                        <span className={`${sidebarState ? "opacity-100" : "opacity-0"} whitespace-nowrap rounded-full p-0 transition-opacity duration-200 text-sm`}>
                            new page
                        </span>
                    </button>
                    <button onClick={() => sidebarStateToggleAction(!sidebarState)} className={`${sidebarState ? "opacity-100" : "opacity-0"} bg-[var(--sidebar-btn-background)] hover:bg-[var(--sidebar-hover-background)] active:bg-[var(--sidebar-active-background)] flex items-center justify-center rounded-full p-2 transition-opacity duration-200 aria-label="Toggle sidebar`}>
                        <Menu className="h-5 w-5" />
                    </button>
                </div>

                {/* Menu items */}
                <nav className="flex flex-col gap-1 p-2">
                    {Page.map(({ page_id,title }) => (
                        <button onClick={() => setCurrentPage(page_id - 1)} key={page_id} className={`${page_id - 1 === currentPage ? "bg-[var(--sidebar-active-background)]" : ""} flex items-center gap-3 rounded-md p-2 hover:bg-[var(--sidebar-hover-background)]`}>
                            {/* Label fades out when collapsed */}
                            <span className={`${sidebarState ? "opacity-100" : "opacity-0"} whitespace-nowrap transition-opacity duration-200 hover:bg-[var(--sidebar-hover-background)]`}>
                                {title}
                            </span>
                        </button>
                    ))}
                </nav>
            </aside>
            
            
        </div>
    )
}