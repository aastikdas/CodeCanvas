import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { TooltipProvider } from "@/components/ui/tooltip";
import { getAllPlaygrounds } from "@/features/dashboard/actions";
import { DashboardSidebar } from "@/features/dashboard/components/dashboard-sidebar";

export default async function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const playgroundData = await getAllPlaygrounds();
  const technologyIconMap: Record<string, string> = {
    REACT: "Zap",
    NEXTJS: "Lightbulb",
    EXPRESS: "Database",
    VUE: "Compass",
    HONO: "FlameIcon",
    ANGULAR: "Terminal",
  }
  const formattedPlaygroundData =
  playgroundData?.map((item) => ({
    id: item.id,
    name: item.title,
    starred: item.Starmark?.[0]?.isMarked || false,
    // Pass the icon name as a string
    icon: technologyIconMap[item.template] || "Code2", // Default to "Code2" if template not found
  })) || []
  
  return (
    <TooltipProvider>
      <SidebarProvider>
        <div className="flex w-full min-h-screen overflow-x-hidden">
          <DashboardSidebar initialPlaygroundData={formattedPlaygroundData} />
          <main className="flex-1">
            <SidebarTrigger />
            {children}
            </main>
        </div>
      </SidebarProvider>
    </TooltipProvider>
  );
}