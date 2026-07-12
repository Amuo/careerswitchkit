import Navbar from "./Navbar";
import Footer from "./Footer";
import FadeUpObserver from "./FadeUpObserver";

// Shared chrome for the marketing routes (landing + preview): the fixed grain
// overlay, the scroll-reveal observer, the two side guides, the sticky Navbar,
// <main>, and the Footer. Page-specific content goes in as children.
export default function PageShell({ children }: { children: React.ReactNode }) {
  return (
    <>
      {/* Noise texture overlay — baked grain tile (see .grain in globals.css) */}
      <div className="grain fixed inset-0 pointer-events-none opacity-50" style={{ zIndex: 1 }} aria-hidden="true" />

      <div className="relative min-h-screen" style={{ color: "#e2e0fa", overflowX: "clip" }}>
        <FadeUpObserver />

        <div className="vertical-guide guide-left hidden lg:block" aria-hidden="true" />
        <div className="vertical-guide guide-right hidden lg:block" aria-hidden="true" />

        <Navbar />

        <main className="relative pt-32" style={{ position: "relative", zIndex: 2 }}>
          {children}
        </main>

        <Footer />
      </div>
    </>
  );
}
