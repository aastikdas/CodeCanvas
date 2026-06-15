'use client'

import { Separator } from "@/components/ui/separator";
import { SidebarInset, SidebarTrigger } from "@/components/ui/sidebar";
import { TooltipProvider } from "@/components/ui/tooltip";
import { TemplateFileTree } from "@/features/playground/components/template-file-tree";
import { useFileExplorer } from "@/features/playground/hooks/useFileExplorer";
import { usePlayground } from "@/features/playground/hooks/usePlayground";
import { useParams } from "next/navigation"


const Page = () => {
    const {id} = useParams<{id:string}>();
    const {playgroundData, templateData, isLoading, error, saveTemplateData}= usePlayground(id)
    const {
      activeFileId,
      closeAllFiles,
      openFile,
      closeFile,
      updateFileContent,
      handleAddFile,
      handleAddFolder,
      handleDeleteFile,
      handleDeleteFolder,
      handleRenameFile,
      handleRenameFolder,
      openFiles,
      setTemplateData,
      setActiveFileId,
      setPlaygroundId,
      setOpenFiles,
  } = useFileExplorer();

  
  return (
    <TooltipProvider>
      <>
        <TemplateFileTree data={templateData}/>
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
