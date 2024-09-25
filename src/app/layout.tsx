// layout.tsx

import type { Metadata } from "next";
import React from "react";
import "./globals.css";
import Navbar from "./components/shared/Navbar/Navbar";
import localFont from "next/font/local";

import SmoothScroll from "./components/Functions/SmoothScroller";
import { SpeedInsights } from "@vercel/speed-insights/next";
import Noise from "./components/Functions/Noise";
import Grain from "./components/Functions/Grain";
import Footer from "./components/shared/Footer/Footer";
import CookieBanner from "./components/shared/cookie-banner";
import { Analytics } from "@vercel/analytics/react";
import Script from "next/script";

// Humane Font mit fontDisplay: "swap"
const Humane = localFont({
  src: [
    {
      path: "fonts/Humane-Black.woff2",
      weight: "900",
      style: "normal",
    },
    {
      path: "fonts/Humane-Bold.woff2",
      weight: "700",
      style: "normal",
    },
    {
      path: "fonts/Humane-Medium.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "fonts/Humane-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "fonts/Humane-Light.woff2",
      weight: "300",
      style: "normal",
    },
  ],
  variable: "--font-Humane",
  display: "swap", // Hinzugefügt, um font-display: swap zu verwenden
});

export const metadata: Metadata = {
  title: "Jannis Röstel | Web- und Motiondesigner aus Karlsruhe",
  description: "Professionelles Webdesign und Webentwicklung in Karlsruhe.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html className={`${Humane.variable}`} lang="de">
      <head>
        {/* Google Analytics asynchron laden */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-T3JQ8R8YRC"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-T3JQ8R8YRC');
          `}
        </Script>
      </head>
      <SmoothScroll />
      <body className="bg-darkBlue-500 text-white scroll-smooth">
        <CookieBanner />
        <Noise />
        <Grain />
        <Navbar />
        {children}
        <Footer />
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
