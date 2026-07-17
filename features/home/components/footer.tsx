import Link from "next/link";
import { CatIcon, Mail, Heart } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-zinc-200 dark:border-zinc-800/80 bg-zinc-50/50 dark:bg-zinc-950/20">
      <div className="mx-auto max-w-7xl px-6 py-10 flex flex-col sm:flex-row items-center justify-between gap-6">
        <div className="flex flex-col items-center sm:items-start gap-2">
          <span className="font-extrabold text-lg tracking-tight text-foreground">Code Canvas</span>
          <p className="text-xs text-zinc-500 dark:text-zinc-400">
            &copy; {new Date().getFullYear()} Code Canvas. All rights reserved.
          </p>
        </div>

        <div className="flex items-center gap-6">
          <Link
            href="https://github.com/aastikdas"
            target="_blank"
            rel="noopener noreferrer"
            className="text-zinc-500 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100 transition-colors flex items-center gap-1.5 text-sm"
          >
            <CatIcon className="w-4 h-4" />
            <span>GitHub</span>
          </Link>
          <a
            href="mailto:aastikdas126@gmail.com"
            className="text-zinc-500 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100 transition-colors flex items-center gap-1.5 text-sm"
          >
            <Mail className="w-4 h-4" />
            <span>Contact Email</span>
          </a>
        </div>

        <div className="flex items-center gap-1.5 text-xs text-zinc-500 dark:text-zinc-400">
          <span>Built with</span>
          <Heart className="w-3.5 h-3.5 text-red-500 fill-red-500 animate-pulse" />
          <span>for developers</span>
        </div>
      </div>
    </footer>
  );
}
