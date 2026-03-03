import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import { SITE } from "@/lib/constants";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: SITE.title,
  description: SITE.description,
  openGraph: {
    title: SITE.title,
    images: [SITE.ogImage],
  },
  icons: {
    icon: "/images/doodle.png",
    apple: "/images/doodle.png",
  },
  other: {
    "theme-color": "#000000",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrainsMono.variable}`}>
      <head>
        <meta name="theme-color" content="#000000" />
      </head>
      <body>
        {children}
        <AgentationWrapper />
      </body>
    </html>
  );
}

function AgentationWrapper() {
  if (process.env.NODE_ENV !== "development") return null;

  const { Agentation } = require("agentation");
  return <Agentation />;
}
