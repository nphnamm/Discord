import "./globals.css";
import type { Metadata } from "next";
import { Inter, Open_Sans } from "next/font/google";
import { ClerkProvider } from "@clerk/nextjs";
import { ThemeProvider } from "@/components/providers/theme-providers";
import { cn } from "@/lib/utils";
import { Toaster } from "@/components/ui/sonner";
import { ExitModal } from "@/components/modals/exit-modal";

const font = Open_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Team Chat Application",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider>

      <html lang="en" suppressHydrationWarning>
        <body className={cn(font.className,"bg-white dark:bg-[#313338]")}>
          <Toaster />
          <ExitModal/>
          {children}
       
        </body>
      </html>
    </ClerkProvider>
  );
}