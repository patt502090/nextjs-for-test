import { SiteHeader } from "@/components/site-header";
import { HeroSection } from "@/components/hero-section";
import { FeaturesSection } from "@/components/features-section";
import { TestimonialsSection } from "@/components/testimonials-section";
import { ContactSection } from "@/components/contact-section";
import { SiteFooter } from "@/components/site-footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <SiteHeader />
      <HeroSection />
      <FeaturesSection />
      <TestimonialsSection />
      <ContactSection />
      <SiteFooter />
    </main>
  );
}