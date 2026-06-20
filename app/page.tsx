"use client"

import MySidebar from "@/components/Containers/Sidebar";
import MyContent from "@/components/Containers/content";
import MyChatbar from "@/components/Containers/chatbar";
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
export type currentPageType = {
    currentPage: number;
    setCurrentPage: (currentPage: number) => void;
}
type pageJson = typeof contentJSON;
export default function Page() {
    
    const [pageJson, setPagesContent] = useState<pageJson>(contentJSON)
    const [currentPage, setCurrentPage] = useState<number>(0)
    const [sidebarState, setOpen] = useState<boolean>(true)
    const [chatbarState, setState] = useState<boolean>(true)
    
    
    function addPage() {
        const newPageJson = {
            page_id: pageJson.length +1,
            title: "New page"
        }
        
        setPagesContent([...pageJson,newPageJson])
    }
    
  return (
  <main className="flex min-h-screen bg-background" >
    <MySidebar sidebarState={sidebarState} sidebarStateToggleAction={(value ) => setOpen(value)} Page={pageJson} currentPage={currentPage} setCurrentPage={(value) => setCurrentPage(value)} addNewPage={() => addPage()}/>
      <MyContent sidebarState={sidebarState} chatbarState={chatbarState} sidebarStateToggleAction={(value ) => setOpen(value)} chatbarStateToggleAction={(value) => setState(value)}/>
      <MyChatbar chatbarState={chatbarState} chatbarStateToggleAction={(value) => setState(value)}/>
      
  </main>
  )
}
