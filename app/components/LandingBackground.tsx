// Full-screen looping background video.
//
// NOTE: this deliberately uses ONE <video> with the native `autoPlay` attribute
// (no client JS). A previous version used two videos crossfaded via JavaScript to
// hide the loop seam — but real mobile browsers block JS-driven autoplay and choke
// on two full-screen videos at once, which broke the mobile site. Native autoplay
// on a single muted/playsInline video is the mobile-safe pattern. The loop seam is
// an acceptable trade for a background that actually works on phones.

const SRC =
  "https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260508_064122_c4750c0e-7476-4b44-94a2-a85a65c63bf2.mp4";

export default function LandingBackground() {
  return (
    <div style={{ position: "fixed", inset: 0, zIndex: -1, overflow: "hidden", pointerEvents: "none" }}>
      <video
        autoPlay
        muted
        loop
        playsInline
        style={{
          position: "absolute",
          inset: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
          // Tame the swirl's white-hot core so it never blows out text over it.
          filter: "brightness(0.6) saturate(1.05)",
        }}
      >
        <source src={SRC} type="video/mp4" />
      </video>

      {/* Readability scrim — darker behind the nav/footer, lighter through the middle. */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "linear-gradient(to bottom, rgba(7,7,25,0.55) 0%, rgba(7,7,25,0.3) 18%, rgba(7,7,25,0.3) 80%, rgba(7,7,25,0.6) 100%)",
        }}
      />
    </div>
  );
}
