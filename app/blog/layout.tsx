import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";

export default function BlogLayout({ children }: { children: React.ReactNode }) {
  return (
    // Opaque navy wrapper — the blog is the one place that deliberately does NOT
    // show the global background video, so we cover it with a solid background.
    <div className="relative z-10 min-h-screen" style={{ background: "#070719" }}>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </div>
  );
}
