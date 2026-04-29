import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/site/Navbar";
import { Hero } from "@/components/site/Hero";
import { HowItWorks } from "@/components/site/HowItWorks";
import { Services } from "@/components/site/Services";
import { Trust } from "@/components/site/Trust";
import { Awareness } from "@/components/site/Awareness";
import { AppShowcase } from "@/components/site/AppShowcase";
import { Testimonials } from "@/components/site/Testimonials";
import { LeadForm } from "@/components/site/LeadForm";
import { Footer } from "@/components/site/Footer";
import { StickyCTA } from "@/components/site/StickyCTA";
import { Toaster } from "@/components/ui/sonner";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "DRDERMX — AI Dermatology & Doctor Consultations for Skin & Hair" },
      { name: "description", content: "AI skin analysis in 30 seconds plus instant consultations with MCI-registered dermatologists. Personalized treatment for acne, hair fall, pigmentation and more." },
      { property: "og:title", content: "DRDERMX — AI Dermatology in Your Pocket" },
      { property: "og:description", content: "AI + real doctors for skin and hair. 50,000+ happy patients. Free first consultation." },
    ],
  }),
});

function Index() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <Hero />
        <HowItWorks />
        <Services />
        <Trust />
        <Awareness />
        <AppShowcase />
        <Testimonials />
        <LeadForm />
      </main>
      <Footer />
      <StickyCTA />
      <Toaster position="top-center" richColors />
    </div>
  );
}
