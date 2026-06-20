"use client"

import MySidebar from "@/components/Containers/Sidebar";
import MyContent from "@/components/Containers/content";
import {useState} from "react";

let contentJSON = [
    {
        page_id: 1,
        title: "First page"
    },
    {
        page_id: 2,
        title: "second page"
    }
]

export type page = typeof contentJSON[number];
type pageJson = typeof contentJSON;
export default function Page() {
    
    const [pageJson, setPageContent] = useState<pageJson>(contentJSON)
    const [open, setOpen] = useState(true)
    
  return (
  <main className="flex min-h-screen bg-background" >
    <MySidebar sidebarState={open} sidebarStateToggleAction={(value ) => setOpen(value)} Page={pageJson}/>
      <MyContent sidebarState={open} sidebarStateToggleAction={(value ) => setOpen(value)}/>
      
  </main>
  )
}
