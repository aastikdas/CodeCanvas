import { getAllPlaygrounds } from "@/features/dashboard/actions";
import Link from "next/link";
import { format } from "date-fns";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Zap,
  Lightbulb,
  Database,
  Compass,
  FlameIcon,
  Terminal,
  Code2,
  Calendar,
  Clock,
  ArrowLeft,
  ChevronRight,
  FolderOpen,
  ArrowUpRight
} from "lucide-react";

const templateIconMap: Record<string, React.ComponentType<any>> = {
  REACT: Zap,
  NEXTJS: Lightbulb,
  EXPRESS: Database,
  VUE: Compass,
  HONO: FlameIcon,
  ANGULAR: Terminal,
};

const templateColorMap: Record<string, string> = {
  REACT: "bg-blue-500/10 text-blue-500 border-blue-500/20",
  NEXTJS: "bg-zinc-500/10 text-zinc-500 border-zinc-500/20 dark:bg-zinc-100/10 dark:text-zinc-100",
  EXPRESS: "bg-green-500/10 text-green-500 border-green-500/20",
  VUE: "bg-emerald-500/10 text-emerald-500 border-emerald-500/20",
  HONO: "bg-orange-500/10 text-orange-500 border-orange-500/20",
  ANGULAR: "bg-red-500/10 text-red-500 border-red-500/20",
};

export default async function MyProjectsPage() {
  const projects = await getAllPlaygrounds();

  return (
    <div className="flex flex-col justify-start items-start min-h-screen mx-auto max-w-7xl px-6 py-10 w-full">
      {/* Header */}
      <div className="flex items-center gap-4 mb-8">
        <Link href="/dashboard">
          <Button variant="ghost" size="icon" className="rounded-full hover:bg-muted">
            <ArrowLeft className="h-5 w-5" />
          </Button>
        </Link>
        <div>
          <h1 className="text-3xl font-bold tracking-tight">My Projects</h1>
          <p className="text-muted-foreground text-sm">View and manage all your created projects and playgrounds.</p>
        </div>
      </div>

      {/* Projects Grid or Empty State */}
      {!projects || projects.length === 0 ? (
        <div className="flex flex-col items-center justify-center py-20 w-full border border-dashed rounded-2xl bg-muted/20">
          <FolderOpen className="h-16 w-16 text-muted-foreground mb-4 opacity-50" />
          <h2 className="text-xl font-semibold mb-2">No projects found</h2>
          <p className="text-muted-foreground text-center mb-6 max-w-sm">
            Create a new playground from the dashboard to get started on your coding journey!
          </p>
          <Link href="/dashboard">
            <Button>Go to Dashboard</Button>
          </Link>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
          {projects.map((project) => {
            const Icon = templateIconMap[project.template] || Code2;
            const badgeClass = templateColorMap[project.template] || "bg-muted text-muted-foreground";

            return (
              <Link key={project.id} href={`/playground/${project.id}`} className="group block h-full">
                <Card className="h-full border transition-all duration-300 hover:border-foreground/20 hover:shadow-[0_8px_30px_rgb(0,0,0,0.04)] dark:hover:shadow-[0_8px_30px_rgb(0,0,0,0.2)] bg-card overflow-hidden flex flex-col justify-between">
                  <CardHeader className="pb-3">
                    <div className="flex justify-between items-start gap-2">
                      <div className="p-2 rounded-lg bg-muted group-hover:bg-primary/10 transition-colors">
                        <Icon className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors" />
                      </div>
                      <Badge variant="outline" className={`${badgeClass} font-semibold px-2.5 py-0.5 text-xs`}>
                        {project.template}
                      </Badge>
                    </div>
                    <CardTitle className="text-lg font-bold group-hover:text-primary transition-colors mt-4 line-clamp-1">
                      {project.title}
                    </CardTitle>
                    {project.description ? (
                      <CardDescription className="line-clamp-2 mt-1 min-h-[40px]">
                        {project.description}
                      </CardDescription>
                    ) : (
                      <CardDescription className="line-clamp-2 mt-1 min-h-[40px] italic text-muted-foreground/60">
                        No description provided.
                      </CardDescription>
                    )}
                  </CardHeader>
                  
                  <CardContent className="pt-0 pb-4 text-xs text-muted-foreground space-y-2 border-t mt-auto">
                    <div className="flex items-center gap-2 pt-4">
                      <Calendar className="h-3.5 w-3.5 text-muted-foreground/75" />
                      <span>Created: {format(new Date(project.createdAt), "MMM d, yyyy")}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="h-3.5 w-3.5 text-muted-foreground/75" />
                      <span>Updated: {format(new Date(project.updatedAt), "MMM d, yyyy")}</span>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            );
          })}
        </div>
      )}
    </div>
  );
}
