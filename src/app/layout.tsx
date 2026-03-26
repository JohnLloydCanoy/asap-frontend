import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import NavigationBar from "../../components/ui/NavigationBar";
import PageCompiler from "./pages/PageCompiler";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Automated Social Analytics Platform",
  description: "ASAP frontend",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <div className="md:flex">
          <NavigationBar />
          <main className="min-h-screen flex-1 bg-white pt-16 md:pt-0">
            {children}

          </main>
        </div>
      </body>
    </html>
  );
}