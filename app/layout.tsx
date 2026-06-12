import type { Metadata } from "next";
import { Sora, DM_Sans } from "next/font/google";
import "./globals.css";

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
    "An ATS-friendly resume, cover letter, and 50 AI prompts to help you switch careers in the US. One kit, $49.",
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
