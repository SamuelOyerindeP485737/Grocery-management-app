import {Menu} from "lucide-react";
import {sidebarToggleType} from "@/components/Containers/Sidebar";
export default function MyContent({sidebarState,sidebarStateToggleAction} :sidebarToggleType) {
    return(
        <div className="h-full flex-col">
            <div className="flex">
                <button onClick={() => sidebarStateToggleAction(!sidebarState)} className={`${!sidebarState ? "opacity-100" : "opacity-0"} flex items-center justify-center rounded-md p-2 hover:bg-muted transition-opacity duration-200 aria-label="Toggle sidebar`}>
                    <Menu className="h-5 w-5" />
                </button>
            </div>
        </div>
    )
}