import { Analytics } from "@vercel/analytics/next";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import Background from "@/components/background";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Mudrah",
  description: "Website oficial da banda Mudrah.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={`${inter.variable} h-full antialiased`}>
      <body>
        <div className="relative min-h-screen w-full">
          <Background />
          {children}
        </div>
        <Analytics />
      </body>
    </html>
  );
}
