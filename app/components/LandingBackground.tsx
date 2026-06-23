export default function LandingBackground() {
  return (
    <div style={{ position: "absolute", top: 0, left: 0, right: 0, bottom: 0, zIndex: -1, overflow: "hidden", pointerEvents: "none" }}>
      <video
        autoPlay muted loop playsInline
        style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", objectFit: "cover", opacity: 0.2, transform: "scale(1.4)", transformOrigin: "top center" }}
      >
        <source
          src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260508_064122_c4750c0e-7476-4b44-94a2-a85a65c63bf2.mp4"
          type="video/mp4"
        />
      </video>
      <div style={{
        position: "absolute", inset: 0,
        background: "linear-gradient(to bottom, rgba(7,7,25,0.9) 0%, transparent 50%, rgba(7,7,25,1) 100%)",
      }} />
    </div>
  );
}
