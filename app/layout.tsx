import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { auth } from "@/auth";
import {SessionProvider} from "next-auth/react"
import { ThemeProvider } from "@/components/providers/theme-providers";
import { Toaster } from "@/components/ui/sonner";

const poppins = Poppins({
  subsets: ["latin"],
  variable: "--font-poppins",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Code Canvas- A playground for your code",
  description: "Code Canvas is a web-based code editor that allows you to write, run, and share code snippets in various programming languages. It provides a simple and intuitive interface for coding, making it easy for developers of all levels to experiment and collaborate on code projects.",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await auth()
  return (
    <SessionProvider session={session}>
      <html
        lang="en"
        className={`${poppins.variable} h-full antialiased`}
        suppressHydrationWarning
      >
        <body className="min-h-full flex flex-col">
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <Toaster/>
            {children}
          </ThemeProvider>
        </body>
      </html>
    </SessionProvider>
  );
}
