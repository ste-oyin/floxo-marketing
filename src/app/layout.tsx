import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Header } from "@/components/marketing/Header";
import { Footer } from "@/components/marketing/Footer";
import "./globals.css";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Floxo — See How Your Space Really Moves",
    template: "%s | Floxo",
  },
  description:
    "Turn your existing security camera footage into heatmaps, customer paths, and data-backed layout recommendations. No new hardware required.",
  keywords: [
    "store layout optimization",
    "retail analytics",
    "heatmap",
    "foot traffic",
    "spatial intelligence",
    "floor plan optimization",
  ],
  openGraph: {
    title: "Floxo — See How Your Space Really Moves",
    description:
      "Turn your existing security camera footage into heatmaps, customer paths, and data-backed layout recommendations.",
    url: "https://floxo.io",
    siteName: "Floxo",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Floxo — See How Your Space Really Moves",
    description:
      "Turn your existing security camera footage into heatmaps, customer paths, and data-backed layout recommendations.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} h-full antialiased`}>
      <body className="flex min-h-full flex-col font-sans">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
