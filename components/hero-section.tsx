import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export function HeroSection() {
  return (
    <section
      id="home"
      className="relative pt-24 md:pt-32 overflow-hidden"
    >
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(45%_40%_at_50%_60%,hsl(var(--primary)/0.1),transparent)]" />
      <div className="container px-4 md:px-6 flex flex-col items-center text-center space-y-10 py-16 md:py-24">
        <div className="space-y-6 max-w-3xl">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tighter animate-fade-up">
            Beautiful Websites for the Modern Web
          </h1>
          <p className="text-xl text-muted-foreground max-w-[600px] mx-auto animate-fade-up animation-delay-100">
            Create stunning, high-performance websites with our modern design system. Built for speed, accessibility, and user experience.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 animate-fade-up animation-delay-200">
            <Button size="lg" className="group">
              Get Started
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button size="lg" variant="outline">
              Learn More
            </Button>
          </div>
        </div>
        <div className="relative w-full max-w-3xl h-[300px] md:h-[400px] rounded-lg overflow-hidden border animate-fade-up animation-delay-300">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-background to-accent/20 animate-gradient" />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-2xl font-semibold">Beautiful Design</div>
          </div>
        </div>
      </div>
    </section>
  );
}