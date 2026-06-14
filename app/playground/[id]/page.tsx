'use client'

import { Separator } from "@/components/ui/separator";
import { SidebarInset, SidebarTrigger } from "@/components/ui/sidebar";
import { TooltipProvider } from "@/components/ui/tooltip";
import { usePlayground } from "@/features/playground/hooks/usePlayground";
import { useParams } from "next/navigation"


const Page = () => {
    const {id} = useParams<{id:string}>();
    const {playgroundData, templateData, isLoading, error, saveTemplateData}= usePlayground(id)
  return (
    <TooltipProvider>
      <>
        {/* {Todo impllement tree} */}
        <SidebarInset>
          <header className="flex h-16 shrink-0 items-center gap-2 border-b px-4">
            <SidebarTrigger className="-ml-1" />
            <Separator className="mr-2 h-4" orientation="vertical" />
            <div>
              <div>
                {playgroundData?.title || "Code Playground"}
              </div>
            </div>
          </header>
        </SidebarInset>
      </>
    </TooltipProvider>
  )
}

export default Page
