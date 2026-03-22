import type { Metadata } from "next";
import { CursorGlow } from "@/components/cursor-glow";
import "./globals.css";

export const metadata: Metadata = {
  title: "MR Catalog Designer",
  description: "Luxury portfolio website for catalog design and premium visual curation."
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <CursorGlow />
        {children}
      </body>
    </html>
  );
}
