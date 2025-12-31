import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
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
  title: "Elex Creatives | From Idea to App Store, in Weeks.",
  description: "From Idea to App Store, in Weeks. Professional mobile app development duo specializing in React Native and Expo. Creators of DailyIntentions, SpeedDots, and Avid.",
  keywords: ["mobile app development", "React Native", "Expo", "iOS apps", "Android apps", "app development", "Elex Creatives"],
  authors: [{ name: "Elex Creatives" }],
  creator: "Elex Creatives",
  publisher: "Elex Creatives",
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icon.png", type: "image/png", sizes: "512x512" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://elexcreatives.com",
    title: "Elex Creatives | From Idea to App Store, in Weeks.",
    description: "From Idea to App Store, in Weeks. Professional mobile app development duo specializing in React Native and Expo.",
    siteName: "Elex Creatives",
    images: [
      {
        url: "/icons/ElexCreatives Logo - Website.png",
        width: 1200,
        height: 630,
        alt: "Elex Creatives Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Elex Creatives | From Idea to App Store, in Weeks.",
    description: "From Idea to App Store, in Weeks. Professional mobile app development duo specializing in React Native and Expo.",
    images: ["/icons/ElexCreatives Logo - Website.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
