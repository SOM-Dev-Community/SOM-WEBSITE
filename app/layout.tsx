import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import ScrollToTop from "@/components/ScrollToTop";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryProvider } from "@/components/providers/query-provider";
import { MotionProvider } from "@/components/providers/motion-provider";
import { cn } from "@/lib/utils";
import { siteDescription, siteName, siteUrl } from "@/lib/site";
import { Suspense } from "react";

const inter = Inter({ subsets: ['latin'], variable: '--font-sans' });

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Sons Of Ministry",
    template: "%s | Sons Of Ministry",
  },
  description: siteDescription,
  openGraph: {
    type: "website",
    siteName,
    title: siteName,
    description: siteDescription,
    images: [{ url: "/assets/banner-2.jpg", width: 1920, height: 1080, alt: siteName }],
  },
  twitter: {
    card: "summary_large_image",
    title: siteName,
    description: siteDescription,
    images: ["/assets/banner-2.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    // suppressHydrationWarning: browser extensions (e.g. "crxlauncher") inject attributes onto <html>
    // before React hydrates. This only ignores attribute differences on this one element.
    <html lang="en" className={cn("font-sans", inter.variable)} suppressHydrationWarning>
      <body className="antialiased">
        <Suspense>
          <QueryProvider>
            <TooltipProvider>
              <MotionProvider>
                <ScrollToTop />
                {children}
              </MotionProvider>
            </TooltipProvider>
          </QueryProvider>
        </Suspense>
      </body>
    </html>
  );
}
