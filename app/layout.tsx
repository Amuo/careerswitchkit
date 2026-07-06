import type { Metadata } from "next";
import { Sora, DM_Sans } from "next/font/google";
import { GoogleAnalytics } from "@next/third-parties/google";
import Script from "next/script";
import MotionProvider from "@/app/components/MotionProvider";
import ClarityAnalytics from "@/app/components/ClarityAnalytics";
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
  metadataBase: new URL("https://careerswitchkit.org"),
  title: "Resume System for Career Switchers | CareerSwitchKit",
  description:
    "Career switchers get filtered out before a human reads their resume. CareerSwitchKit is the 4-stage system that fixes that — $37, instant download.",
  icons: {
    icon: "/favicon.svg",
    apple: "/apple-icon",
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
  // Tracking IDs. Each falls back to the live default baked in here, so all three
  // tools work on deploy with zero config; set the matching NEXT_PUBLIC_* var in
  // Vercel (or .env.local) only if you ever want to override without editing code.
  const gaId = process.env.NEXT_PUBLIC_GA_ID || "G-VZTZ8KD05Z";
  const clarityId = process.env.NEXT_PUBLIC_CLARITY_PROJECT_ID || "x84g7j2y7p";
  const metaPixelId = process.env.NEXT_PUBLIC_META_PIXEL_ID || "2156940741754118";

  // suppressHydrationWarning: the inline <head> script below adds the `js-reveal`
  // class to <html> before React hydrates (the progressive-reveal flag), which is
  // an intentional server/client difference on this one element.
  return (
    <html lang="en" suppressHydrationWarning>
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
        <GoogleAnalytics gaId={gaId} />

        {/* Microsoft Clarity — via @microsoft/clarity. Set NEXT_PUBLIC_CLARITY_PROJECT_ID (from clarity.microsoft.com) */}
        {clarityId && <ClarityAnalytics projectId={clarityId} />}

        {/* Meta Pixel — set NEXT_PUBLIC_META_PIXEL_ID (from business.facebook.com/events/manager) */}
        {metaPixelId && (
          <>
            <Script id="meta-pixel" strategy="afterInteractive">
              {`!function(f,b,e,v,n,t,s)
              {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
              n.callMethod.apply(n,arguments):n.queue.push(arguments)};
              if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
              n.queue=[];t=b.createElement(e);t.async=!0;
              t.src=v;s=b.getElementsByTagName(e)[0];
              s.parentNode.insertBefore(t,s)}(window,document,'script',
              'https://connect.facebook.net/en_US/fbevents.js');
              fbq('init','${metaPixelId}');
              fbq('track','PageView');`}
            </Script>
            <noscript>
              <img
                height="1"
                width="1"
                style={{ display: "none" }}
                src={`https://www.facebook.com/tr?id=${metaPixelId}&ev=PageView&noscript=1`}
                alt=""
              />
            </noscript>
          </>
        )}
      </body>
    </html>
  );
}
