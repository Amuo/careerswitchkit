import type { Metadata } from "next";
import { Sora, DM_Sans } from "next/font/google";
import { GoogleAnalytics } from "@next/third-parties/google";
import "@/app/globals.css";

const sora = Sora({
  subsets: ["latin"],
  variable: "--font-sora",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
});

export const metadata: Metadata = {
  title: "CareerSwitchKit - Land Your New Career Faster",
  description:
    "Switching careers in the US? Get an ATS-ready resume, cover letters, and 50 AI prompts built specifically for career switchers. Instant download, $19, 30-day guarantee.",
  icons: {
    icon: "/favicon.svg",
  },
  openGraph: {
    title: "CareerSwitchKit — Land Your New Career Faster",
    description:
      "Switching careers in the US? Get an ATS-ready resume, cover letters, and 50 AI prompts built specifically for career switchers. Instant download, $19.",
    url: "https://careerswitchkit.org",
    siteName: "CareerSwitchKit",
    images: [
      {
        url: "https://careerswitchkit.org/og-image.png",
        width: 1200,
        height: 630,
        alt: "CareerSwitchKit — Land Your New Career Faster",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "CareerSwitchKit — Land Your New Career Faster",
    description:
      "Switching careers in the US? Get an ATS-ready resume, cover letters, and 50 AI prompts built for career switchers. $19, instant download.",
    images: ["https://careerswitchkit.org/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${sora.variable} ${dmSans.variable} font-sans antialiased`}
      >
        {children}
        <GoogleAnalytics gaId="G-T395SJKKNW" />
      </body>
    </html>
  );
}
