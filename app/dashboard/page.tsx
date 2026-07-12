import { deleteProjectById, duplicateProjectById, editProjectById } from "@/features/dashboard/actions";
import AddNewButton from "@/features/dashboard/components/add-new-btn";
import AddRepo from "@/features/dashboard/components/add-repo";
import ProjectTable from "@/features/dashboard/components/project-table";

// import ProjectTable from "@/features/dashboard/components/project-table";
import { getAllPlaygroundForUser } from "@/features/playground/actions";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowUpRight } from "lucide-react";

const EmptyState = () => (
  <div className="flex flex-col items-center justify-center py-16">
<Image
  src="/empty-state.svg"
  alt="No projects"
  width={192}
  height={192}
  className="mb-4"
/>    <h2 className="text-xl font-semibold text-gray-500">No projects found</h2>
    <p className="text-gray-400">Create a new project to get started!</p>
  </div>
);

const DashboardMainPage = async () => {
  const playgrounds = await getAllPlaygroundForUser();
  console.log(playgrounds);
  return (
    <div className="flex flex-col justify-start items-center min-h-screen mx-auto max-w-7xl px-4 py-10">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
        <AddNewButton />
        <AddRepo />
      </div>
      <div className="mt-10 flex flex-col justify-start items-start w-full">
        <div className="flex justify-between items-center w-full mb-6">
          <h2 className="text-xl font-bold tracking-tight">Your Projects</h2>
          <Link href="/dashboard/projects">
            <Button variant="outline" className="flex items-center gap-2 hover:bg-muted transition-colors">
              <span>View All Projects</span>
              <ArrowUpRight className="h-4 w-4" />
            </Button>
          </Link>
        </div>
        <div className="w-full">
          {playgrounds && playgrounds.length === 0 ? (
            <EmptyState />
          ) : (
            <ProjectTable
              projects={playgrounds || []}
              onDeleteProject={deleteProjectById}
              onUpdateProject={editProjectById}
              onDuplicateProject={duplicateProjectById}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default DashboardMainPage;
