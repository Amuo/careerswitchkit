import type { Metadata } from "next";
import { Sora, DM_Sans } from "next/font/google";
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
    "Switching careers in the US? Get an ATS-ready resume, cover letters, and 50 AI prompts built specifically for career switchers. Instant download, $49, 30-day guarantee.",
  icons: {
    icon: "/favicon.svg",
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
      </body>
    </html>
  );
}
