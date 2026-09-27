import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Header from "@/components/Global/Header";
import Footer from "@/components/Global/Footer";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Gouri Pooja Creations",
  description: "Gouri Pooja Creations",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} min-h-full flex flex-col`}>
        <Header />

        <main className="flex-1">
          {children}
        </main>

        <Footer />
      </body>
    </html>
  );
}