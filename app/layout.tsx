import type { Metadata } from "next";
import { Sora, DM_Sans } from "next/font/google";
import { GoogleAnalytics } from "@next/third-parties/google";
import Script from "next/script";
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
  title: "Resume System for Career Switchers | CareerSwitchKit",
  description:
    "Most career switchers get filtered out before a human reads their resume. CareerSwitchKit is the 4-stage system that fixes that — ATS-ready templates, 50 AI prompts, and a cover letter guide. $19, instant download, 30-day guarantee.",
  icons: {
    icon: "/favicon.svg",
  },
  alternates: {
    canonical: "https://careerswitchkit.org",
  },
  openGraph: {
    title: "Resume System for Career Switchers | CareerSwitchKit",
    description:
      "Most career switchers get filtered out before a human reads their resume. CareerSwitchKit is the 4-stage system that fixes that. $19, instant download.",
    url: "https://careerswitchkit.org",
    siteName: "CareerSwitchKit",
    images: [
      {
        url: "https://careerswitchkit.org/og-image.png",
        width: 1200,
        height: 630,
        alt: "CareerSwitchKit — Resume System for Career Switchers",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Resume System for Career Switchers | CareerSwitchKit",
    description:
      "Most career switchers get filtered out before a human reads their resume. CareerSwitchKit fixes that — 4 stages, $19, instant download.",
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
        {/* Microsoft Clarity — replace CLARITY_PROJECT_ID with your ID from clarity.microsoft.com */}
        <Script id="clarity" strategy="afterInteractive">
          {`(function(c,l,a,r,i,t,y){
            c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
            t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
            y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
          })(window,document,"clarity","script","CLARITY_PROJECT_ID");`}
        </Script>
      </body>
    </html>
  );
}
