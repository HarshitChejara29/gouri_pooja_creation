import Collections from "@/components/Collections";
import Contact from "@/components/Contact";
import FAQ from "@/components/Faqs";
import FindYourDrape from "@/components/FindYourDrape";
import Hero from "@/components/Hero";
import Legacy from "@/components/Legacy";
import Story from "@/components/Story";
import Testimonials from "@/components/Testimonials";
import Values from "@/components/Values";
import WhyUs from "@/components/WhyUs";
import Image from "next/image";

export default function Home() {
  return (
    <>
    <Hero />
    <FindYourDrape />
    <Story />
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
