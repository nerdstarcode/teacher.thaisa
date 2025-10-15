import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import AboutSection from "@/components/AboutSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import PricingSection from "@/components/PricingSection";
import ContactSection from "@/components/ContactSection";
import LessonsSection from "@/components/LessonsSection";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <AboutSection />
      <TestimonialsSection />
      <LessonsSection/>
      <PricingSection />
      <ContactSection />
    </>
  );
}
