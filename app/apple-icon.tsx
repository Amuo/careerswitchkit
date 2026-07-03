import { ImageResponse } from "next/og";

// Apple touch icon (shown when the site is saved to an iOS home screen).
// Renders the CareerSwitchKit hexagon logo on the brand background, matching
// opengraph-image.tsx so we don't need a separate binary PNG asset.
export const runtime = "edge";
export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#070719",
        }}
      >
        <svg viewBox="0 0 60 64" width={116} height={124} xmlns="http://www.w3.org/2000/svg">
          <path d="M 30,4 L 54,18 L 54,46 L 30,60 L 6,46 L 6,18 Z" fill="rgba(55,146,232,0.07)" stroke="#3792E8" strokeWidth="2" opacity="0.88" />
          <path d="M 12,30 C 18,17 42,23 43.8,21.8" fill="none" stroke="#3792E8" strokeWidth="2.8" strokeLinecap="round" />
          <polygon points="48,19 45.2,23.9 42.4,19.7" fill="#3792E8" />
          <path d="M 48,34 C 42,47 18,41 16.2,42.2" fill="none" stroke="#3792E8" strokeWidth="2.8" strokeLinecap="round" />
          <polygon points="12,45 14.8,40.1 17.6,44.3" fill="#3792E8" />
        </svg>
      </div>
    ),
    { ...size }
  );
}
