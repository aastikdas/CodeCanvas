import { Button } from "@/components/ui/button";
import { ArrowUpRight, Sparkles, Code2, Terminal, Bot, Cpu, Layers, Mail } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="z-20 flex min-h-screen flex-col items-center justify-start py-2 mt-10">
      <div className="flex flex-col justify-center items-center my-5">
        <Image src={"/hero.svg"} alt="Hero-Section" height={500} width={500} />

        <h1 className="z-20 text-6xl mt-5 font-extrabold text-center bg-clip-text text-transparent bg-linear-to-r from-blue-500 via-blue-200 to-blue-700 dark:from-blue-400 dark:via-red-400 dark:to-blue-400 tracking-tight leading-[1.3] ">
          Code Canvas Powered With Intelligence
        </h1>
      </div>

      <p className="mt-2 text-lg text-center text-gray-600 dark:text-gray-400 px-5 py-10 max-w-2xl">
        Code Canvas Editor is a powerful and intelligent code editor that enhances
        your coding experience with advanced features and seamless integration.
        It is designed to help you write, debug, and optimize your code
        efficiently.
      </p>
      <Link href={"/dashboard"}>
        <Button variant={"brand"} className="mb-4" size={"lg"}>
          Get Started
          <ArrowUpRight className="w-3.5 h-3.5" />
        </Button>
      </Link>

      {/* Features Section */}
      <section className="w-full max-w-6xl px-6 py-20 border-t border-zinc-200 dark:border-zinc-800/80 mt-16 z-20">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight bg-clip-text text-transparent bg-linear-to-b from-foreground to-foreground/75">
            Powerful Features for Modern Developers
          </h2>
          <p className="mt-4 text-zinc-500 dark:text-zinc-400">
            Everything you need to write, run, and collaborate on code inside your browser with artificial intelligence.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              icon: Sparkles,
              title: "AI Powered Coding",
              desc: "Get intelligent code completions, refactoring recommendations, and syntax optimization suggestions on the fly.",
              color: "text-blue-500 bg-blue-500/10 dark:bg-blue-500/5"
            },
            {
              icon: Code2,
              title: "Monaco Code Editor",
              desc: "Experience the industry-standard editor with full IntelliSense, multiple cursors, maps, and advanced syntax highlighting.",
              color: "text-purple-500 bg-purple-500/10 dark:bg-purple-500/5"
            },
            {
              icon: Terminal,
              title: "Browser-based Playground",
              desc: "Develop, compile, and run web applications with an integrated node terminal environment running entirely in-browser.",
              color: "text-pink-500 bg-pink-500/10 dark:bg-pink-500/5"
            },
            {
              icon: Bot,
              title: "AI Chat Assistant",
              desc: "Talk directly to our integrated AI to help troubleshoot compile errors, write tests, or generate brand new modules.",
              color: "text-emerald-500 bg-emerald-500/10 dark:bg-emerald-500/5"
            },
            {
              icon: Cpu,
              title: "WebContainer Runtime",
              desc: "Run full stack Node.js environments directly in the browser. Zero configuration, instant boot, and lightning fast.",
              color: "text-amber-500 bg-amber-500/10 dark:bg-amber-500/5"
            },
            {
              icon: Layers,
              title: "Multi Template Support",
              desc: "Launch React, Next.js, Vue, Angular, Express, and Hono apps in seconds with our optimized starter templates.",
              color: "text-cyan-500 bg-cyan-500/10 dark:bg-cyan-500/5"
            }
          ].map((feat, idx) => {
            const Icon = feat.icon;
            return (
              <div
                key={idx}
                className="group p-6 rounded-2xl border border-zinc-200 dark:border-zinc-800/80 bg-zinc-50/50 dark:bg-zinc-900/30 hover:bg-white dark:hover:bg-zinc-900/60 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 ease-in-out"
              >
                <div className={`p-3 rounded-xl w-fit ${feat.color} group-hover:scale-110 transition-transform duration-300`}>
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold mt-4 mb-2 group-hover:text-primary transition-colors">{feat.title}</h3>
                <p className="text-sm text-zinc-500 dark:text-zinc-400 leading-relaxed">{feat.desc}</p>
              </div>
            );
          })}
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="w-full max-w-6xl px-6 py-20 border-t border-zinc-200 dark:border-zinc-800/80 z-20">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight bg-clip-text text-transparent bg-linear-to-b from-foreground to-foreground/75">
            Loved by Developers Everywhere
          </h2>
          <p className="mt-4 text-zinc-500 dark:text-zinc-400">
            See how developers around the world are accelerating their prototyping and coding workflows.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              name: "Sarah Chen",
              role: "Lead Frontend Engineer, Vercel",
              feedback: "Code Canvas has completely replaced my local playground setups. Being able to spin up a fully functioning WebContainer in seconds with a Monaco editor is a developer's dream come true.",
              initial: "SC",
              color: "bg-blue-500/10 text-blue-500"
            },
            {
              name: "David Miller",
              role: "Full Stack Developer, Freelance",
              feedback: "The AI integration is incredibly polished. The chat assistant doesn't just write code; it actually understands the context of my playground directory structure. Absolute game-changer.",
              initial: "DM",
              color: "bg-pink-500/10 text-pink-500"
            },
            {
              name: "Alex Rivera",
              role: "Tech Lead, Stripe",
              feedback: "I use Code Canvas to quickly prototype interface ideas and test third party npm libraries without leaving the browser. Spacing and responsive grid options feel super solid.",
              initial: "AR",
              color: "bg-emerald-500/10 text-emerald-500"
            }
          ].map((test, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl border border-zinc-200 dark:border-zinc-800/80 bg-zinc-50/50 dark:bg-zinc-900/30 hover:border-foreground/10 dark:hover:border-foreground/20 hover:shadow-lg transition-all duration-300"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className={`h-10 w-10 rounded-full flex items-center justify-center font-bold text-sm ${test.color}`}>
                  {test.initial}
                </div>
                <div>
                  <h4 className="font-bold text-sm text-foreground">{test.name}</h4>
                  <p className="text-xs text-zinc-400 dark:text-zinc-500">{test.role}</p>
                </div>
              </div>
              <p className="text-sm text-zinc-600 dark:text-zinc-300 italic leading-relaxed">
                "{test.feedback}"
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Help Center Section */}
      <section className="w-full max-w-6xl px-6 py-20 border-t border-zinc-200 dark:border-zinc-800/80 z-20 mb-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight bg-clip-text text-transparent bg-linear-to-b from-foreground to-foreground/75">
              Need Help? We've Got Your Back
            </h2>
            <p className="mt-4 text-zinc-500 dark:text-zinc-400 leading-relaxed">
              Have questions about WebContainers, starting a playground, or connecting a repository? Our support team is here to help you solve any issues and get you coding in no time.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-6">
              <div className="flex flex-col">
                <span className="text-xs text-zinc-400 dark:text-zinc-500 uppercase tracking-wider font-semibold">Support Email</span>
                <a href="mailto:aastikdas126@gmail.com" className="text-lg font-semibold text-primary hover:underline mt-1">
                  aastikdas126@gmail.com
                </a>
              </div>
              <div className="flex flex-col">
                <span className="text-xs text-zinc-400 dark:text-zinc-500 uppercase tracking-wider font-semibold">Response Time</span>
                <span className="text-lg font-semibold mt-1">
                  Under 2 hours
                </span>
              </div>
            </div>
          </div>

          <div className="flex justify-center lg:justify-end">
            <div className="w-full max-w-md p-6 rounded-2xl border border-zinc-200 dark:border-zinc-800/80 bg-zinc-50/50 dark:bg-zinc-900/30 shadow-md">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 rounded-lg bg-primary/10 text-primary">
                  <Bot className="h-5 w-5" />
                </div>
                <h3 className="font-bold text-base">Direct Chat & Ticket Support</h3>
              </div>
              <p className="text-sm text-zinc-500 dark:text-zinc-400 mb-6 leading-relaxed">
                Need instant answers? Check our documentation, or start a thread directly inside your developer panel for real-time diagnostics.
              </p>
              <div className="space-y-3">
                <div className="flex items-center gap-2 text-xs text-zinc-500 dark:text-zinc-400">
                  <div className="h-2 w-2 rounded-full bg-green-500 animate-pulse" />
                  <span>Support agents online</span>
                </div>
                <Button className="w-full" variant="outline" asChild>
                  <a href="mailto:aastikdas126@gmail.com">Contact Support</a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}