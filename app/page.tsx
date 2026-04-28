import Nav from "./components/Nav";
import Hero from "./components/Hero";
import Marquee from "./components/Marquee";
import About from "./components/About";
import Lookbook from "./components/Lookbook";
import CTA from "./components/CTA";
import Footer from "./components/Footer";

export default function Page() {
  return (
    <>
      <Nav />
      <main className="flex-1">
        <Hero />
        <Marquee />
        <About />
        <Lookbook />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
