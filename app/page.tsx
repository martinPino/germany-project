import { Suspense } from "react";
import About from "@/components/About";
import ContactForm from "@/components/ContactForm";
import Faq from "@/components/Faq";
import FreeGuide from "@/components/FreeGuide";
import Hero from "@/components/Hero";
import Pillars from "@/components/Pillars";
import Pricing from "@/components/Pricing";

export default function Home() {
  return (
    <>
      <Hero />
      <Pillars />
      <About />
      <FreeGuide />
      <Pricing />
      <Faq />
      <Suspense fallback={null}>
        <ContactForm />
      </Suspense>
    </>
  );
}
