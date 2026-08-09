import type { Metadata, Viewport } from "next";
import { Montserrat } from "next/font/google";
import { headers } from "next/headers";
import PwaRegister from "./pwa-register";
import "./globals.css";
import "./profit.css";
import "./talent.css";
import "./cult-events.css";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
});

export const viewport: Viewport = {
  themeColor: "#111111",
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

export async function generateMetadata(): Promise<Metadata> {
  const requestHeaders = await headers();
  const host = requestHeaders.get("x-forwarded-host") ?? requestHeaders.get("host") ?? "localhost:3000";
  const protocol = requestHeaders.get("x-forwarded-proto") ?? (host.includes("localhost") ? "http" : "https");
  const base = new URL(`${protocol}://${host}`);
  return {
    metadataBase: base,
    title: "Backlot Pictures — Hollywood Studio Simulator",
    description: "Develop scripts, assemble talent, shoot, test, campaign and release movies in a deep Hollywood studio simulation.",
    applicationName: "Backlot",
    manifest: "/manifest.webmanifest",
    appleWebApp: {
      capable: true,
      statusBarStyle: "black-translucent",
      title: "Backlot",
    },
    formatDetection: { telephone: false },
    icons: {
      icon: [
        { url: "/app-icon-192.png", sizes: "192x192", type: "image/png" },
        { url: "/app-icon-512.png", sizes: "512x512", type: "image/png" },
      ],
      shortcut: "/favicon.svg",
      apple: [{ url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" }],
    },
    openGraph: {
      title: "Backlot Pictures",
      description: "Can you turn $42 million and a script into a smash hit?",
    },
    twitter: { card: "summary" },
  };
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${montserrat.variable} antialiased`}>
        {children}
        <PwaRegister />
      </body>
    </html>
  );
}
