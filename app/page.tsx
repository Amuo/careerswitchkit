import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import WhatsIncluded from "./components/WhatsIncluded";
import HowItWorks from "./components/HowItWorks";
import Proof from "./components/Proof";
import Trust from "./components/Trust";
import Pricing from "./components/Pricing";
import FAQ from "./components/FAQ";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <WhatsIncluded />
        <HowItWorks />
        <Proof />
        <Trust />
        <Pricing />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
