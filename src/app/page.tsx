import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Marquee from "../components/Marquee";
import Projects from "../components/Projects";
import About from "../components/About";
import Resume from "../components/Resume";
import Pricing from "../components/Pricing";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import PrintResume from "../components/PrintResume";

export default function Home() {
  return (
    <>
      <div className="print:hidden">
        <Navbar />
        <main>
          <Hero />
          <Marquee />
          <Projects />
          <About />
          <Resume />
          <Pricing />
          <Contact />
        </main>
        <Footer />
      </div>
      <PrintResume />
    </>
  );
}
