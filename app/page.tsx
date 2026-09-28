import Collections from "@/components/Collections";
import Contact from "@/components/Contact";
import FAQ from "@/components/Faqs";
import FindYourDrape from "@/components/FindYourDrape";
import Hero from "@/components/Hero";
import Legacy from "@/components/Legacy";
import About from "@/components/About";
import Testimonials from "@/components/Testimonials";
import Values from "@/components/Values";
import WhyUs from "@/components/WhyUs";

export default function Home() {
  return (
    <>
    <Hero />
    <FindYourDrape />
    <About />
    <Legacy />
    <Values />
    <Collections />
    <WhyUs />
    <Testimonials />
    <FAQ />
    <Contact />
    </>
  );
}
