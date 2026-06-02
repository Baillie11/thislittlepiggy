import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://thislittlepiggymarketplace.com"),
  title: {
    default: "This Little Piggy Marketplace | Trade Up. Dream Bigger.",
    template: "%s | This Little Piggy"
  },
  description:
    "Join early access for This Little Piggy, the AI-powered app that helps people trade everyday items into bigger goals.",
  keywords: [
    "trade up app",
    "barter marketplace",
    "AI trade suggestions",
    "paperclip to house",
    "early access"
  ],
  openGraph: {
    title: "This Little Piggy Marketplace | Trade Up. Dream Bigger.",
    description:
      "Set a goal, list what you have, and let AI help you find your next trade.",
    url: "https://thislittlepiggymarketplace.com",
    siteName: "This Little Piggy Marketplace",
    images: [
      {
        url: "/images/trade-ladder-hero.png",
        width: 1200,
        height: 900,
        alt: "A warm 3D trade ladder from paperclip to house"
      }
    ],
    locale: "en_US",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "This Little Piggy Marketplace | Trade Up. Dream Bigger.",
    description:
      "Join the waitlist for an AI-assisted trade-up journey app.",
    images: ["/images/trade-ladder-hero.png"]
  }
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#FF7A00"
};

export default function RootLayout({
  children
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
