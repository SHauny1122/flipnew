import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Question from "@/components/Question";
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
        <Question />
        <Spiral />
        <Vision />
        <WhyChoose />
        <Approach />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
