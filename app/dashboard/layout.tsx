import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { TooltipProvider } from "@/components/ui/tooltip";
import { DashboardSidebar } from "@/features/dashboard/components/dashboard-sidebar";

export default async function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <TooltipProvider>
      <SidebarProvider>
        <div className="flex w-full min-h-screen overflow-x-hidden">
          <DashboardSidebar initialPlaygroundData={[]} />
          <main className="flex-1">
            <SidebarTrigger />
            {children}
            </main>
        </div>
      </SidebarProvider>
    </TooltipProvider>
  );
}