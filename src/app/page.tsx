import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Spiral from "@/components/Spiral";
import Vision from "@/components/Vision";
import WhyChoose from "@/components/WhyChoose";
import Approach from "@/components/Approach";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Nav />
      <main className="flex-1">
        <Hero />
        <About />
        <Spiral />
        <Vision />
        <WhyChoose showValues showWhyChoose={false} />
        <Approach />
        <WhyChoose showValues={false} showWhyChoose />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
