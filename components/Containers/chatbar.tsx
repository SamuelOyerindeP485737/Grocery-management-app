"use client"
import {MessageCircle} from "lucide-react";

import { useState } from "react"

import {currentPageType} from "@/app/page";
import {page} from "@/app/page";

export type chatbarToggleType = {
    chatbarState: boolean
    chatbarStateToggleAction: (chatbarState: boolean) => void;
}

const menuItems = [
    { icon: MessageCircle, label: "Home" },
]




type chatbarProps = chatbarToggleType;
export default function MyChatbar({chatbarState,chatbarStateToggleAction} : chatbarProps) {
    return(
        <div className="flex h-screen bg-background text-foreground">
            {/* Sidebar: width animates between open and collapsed via Tailwind transition */}
            <aside className={`${chatbarState ? "w-70" : "w-0"} flex flex-col border-l border-[var(--border-color)] bg-card transition-all duration-300 ease-in-out overflow-hidden`}>
                {/* Header with toggle and new page button */}
                <div className="flex items-center gap-1 p-2">
                    
                    <button onClick={() => chatbarStateToggleAction(!chatbarState)} className={`${chatbarState ? "opacity-100" : "opacity-0"} bg-[var(--sidebar-btn-background)] hover:bg-[var(--sidebar-hover-background)] active:bg-[var(--sidebar-active-background)] flex items-center justify-center rounded-full p-2 transition-opacity duration-200 aria-label="Toggle sidebar`}>
                        <MessageCircle className="h-5 w-5" />
                    </button>
                </div>
                
            </aside>


        </div>
    )
}