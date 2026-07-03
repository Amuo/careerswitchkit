import type { Metadata } from "next";
import { Sora, DM_Sans } from "next/font/google";
import { GoogleAnalytics } from "@next/third-parties/google";
import Script from "next/script";
import MotionProvider from "@/app/components/MotionProvider";
import LandingBackground from "@/app/components/LandingBackground";
import SmoothScroll from "@/app/components/SmoothScroll";
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
    "Most career switchers get filtered out before a human reads their resume. CareerSwitchKit is the 4-stage system that fixes that: CV templates, cover letter templates, an interactive ATS Checker, and 50 AI prompts. $37, instant download, 7-day guarantee.",
  icons: {
    icon: "/favicon.svg",
  },
  alternates: {
    canonical: "https://careerswitchkit.org",
  },
  openGraph: {
    title: "Resume System for Career Switchers | CareerSwitchKit",
    description:
      "Most career switchers get filtered out before a human reads their resume. CareerSwitchKit is the 4-stage system that fixes that. $37, instant download.",
    url: "https://careerswitchkit.org",
    siteName: "CareerSwitchKit",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Resume System for Career Switchers | CareerSwitchKit",
    description:
      "Most career switchers get filtered out before a human reads their resume. CareerSwitchKit fixes that: 4 stages, $37, instant download.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200&display=block" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Geist:wght@100..900&display=swap" />
        {/*
          Progressive-reveal flag. Scroll-in sections (.fade-up) render hidden and
          are faded in by JS. This runs synchronously before first paint and only
          marks the page as JS-capable — so if JS is disabled or fails to load, the
          CSS leaves every section visible instead of trapping it at opacity:0.
        */}
        <script
          dangerouslySetInnerHTML={{
            __html: "document.documentElement.classList.add('js-reveal');",
          }}
        />
      </head>
      <body
        className={`${sora.variable} ${dmSans.variable} font-sans antialiased`}
      >
        <LandingBackground />
        <SmoothScroll />
        <div className="stitch-anim-fade-in">
          <MotionProvider>{children}</MotionProvider>
        </div>
        <GoogleAnalytics gaId="G-T395SJKKNW" />
        {/* Microsoft Clarity — replace x84g7j2y7p with your ID from clarity.microsoft.com */}
        <Script id="clarity" strategy="afterInteractive">
          {`(function(c,l,a,r,i,t,y){
            c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
            t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
            y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
          })(window,document,"clarity","script","x84g7j2y7p");`}
        </Script>
        {/* Meta Pixel — replace META_PIXEL_ID with your ID from business.facebook.com/events/manager */}
        <Script id="meta-pixel" strategy="afterInteractive">
          {`!function(f,b,e,v,n,t,s)
          {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
          n.callMethod.apply(n,arguments):n.queue.push(arguments)};
          if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
          n.queue=[];t=b.createElement(e);t.async=!0;
          t.src=v;s=b.getElementsByTagName(e)[0];
          s.parentNode.insertBefore(t,s)}(window,document,'script',
          'https://connect.facebook.net/en_US/fbevents.js');
          fbq('init','META_PIXEL_ID');
          fbq('track','PageView');`}
        </Script>
      </body>
    </html>
  );
}
