import {Menu, MessageCircle} from "lucide-react";
import {sidebarToggleType} from "@/components/Containers/Sidebar";
import {chatbarToggleType} from "@/components/Containers/chatbar";


type MyContentProps = sidebarToggleType & chatbarToggleType

export default function MyContent({sidebarState, chatbarState, sidebarStateToggleAction, chatbarStateToggleAction} : MyContentProps) {
    return(
        <div className="h-screen flex-col flex-1">
            <div className="h-[50%]">
                <div className="flex p-2 justify-between">
                    <div>
                        <button onClick={() => sidebarStateToggleAction(!sidebarState)} className={`${!sidebarState ? "opacity-100" : "opacity-0"} bg-[var(--sidebar-btn-background)] hover:bg-[var(--sidebar-hover-background)] active:bg-[var(--sidebar-active-background)] flex items-center justify-center rounded-full p-2 transition-opacity duration-200 aria-label="Toggle sidebar`}>
                            <Menu className="h-5 w-5" />
                        </button>
                    </div>
                    <div>
                        <button onClick={() => chatbarStateToggleAction(!chatbarState)} className={`${!chatbarState ? "opacity-100" : "opacity-0"} bg-[var(--sidebar-btn-background)] hover:bg-[var(--sidebar-hover-background)] active:bg-[var(--sidebar-active-background)] flex items-center justify-center rounded-full p-2 transition-opacity duration-200 aria-label="Toggle sidebar`}>
                            <MessageCircle className="h-5 w-5" />
                        </button>
                    </div>

                </div>
                
                <div>
                    
                </div>
            </div>
            <div className="h-[50%] border-t border-[var(--border-color)]">
                
            </div>
            
        </div>
    )
}