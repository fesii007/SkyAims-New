import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import EmergencyCTA from "@/components/EmergencyCTA";
import BeforeAfter from "@/components/BeforeAfter";
import Process from "@/components/Process";
import WhyUs from "@/components/WhyUs";
import GuaranteeSection from "@/components/GuaranteeSection";
import AMCSection from "@/components/AMCSection";
import Certifications from "@/components/Certifications";
import Reviews from "@/components/Reviews";
import CEO from "@/components/CEO";
import FAQ from "@/components/FAQ";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";

export default function Home() {
  return (
    <div className="min-h-screen overflow-x-hidden">
      <Navbar />
      <Hero />
      <EmergencyCTA />
      <Services />
      <BeforeAfter />
      <Process />
      <GuaranteeSection />
      <WhyUs />
      <AMCSection />
      <Certifications />
      <Reviews />
      <CEO />
      <FAQ />
      <ContactSection />
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}
