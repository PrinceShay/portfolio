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
      path: "../../public/fonts/humaneblack.woff2",
      weight: "900",
      style: "normal",
    },
    {
      path: "../../public/fonts/humanebold.woff2",
      weight: "700",
      style: "normal",
    },
    {
      path: "../../public/fonts/humanemedium.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "../../public/fonts/humaneregular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/fonts/humanelight.woff2",
      weight: "300",
      style: "normal",
    },
  ],
  variable: "--font-Humane",
  display: "swap", // Hinzugefügt, um font-display: swap zu verwenden
});

const SofiaPro = localFont({
  src: [
    {
      path: "../../public/fonts/sofia/sofiaproblack.woff",
      weight: "900",
      style: "normal",
    },
    {
      path: "../../public/fonts/sofia/sofiabold.woff",
      weight: "700",
      style: "normal",
    },
    {
      path: "../../public/fonts/sofia/sofiamedium.woff",
      weight: "500",
      style: "normal",
    },
    {
      path: "../../public/fonts/sofia/sofiaregular.woff",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/fonts/sofia/sofialight.woff",
      weight: "300",
      style: "normal",
    },
  ],
  variable: "--font-SofiaPro",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Jannis Röstel | Web- und Motiondesigner aus Karlsruhe",
  description: "Professionelles Webdesign und Webentwicklung in Karlsruhe.",
};

export default function RootLayout({
  children,
  modal,
}: Readonly<{
  children: React.ReactNode;
  modal: React.ReactNode;
}>) {
  return (
    <html className={`${Humane.variable} ${SofiaPro.variable}`} lang="de">
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
      <body className="bg-darkBlue-500 text-white scroll-smooth">
        <CookieBanner />
        <Noise />
        <Grain />
        <Navbar />
        {modal}
        {/* <SmoothScroll> */}
        {children}
        {/* </SmoothScroll> */}
        <Footer />
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
