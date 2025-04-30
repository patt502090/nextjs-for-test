"use client";

import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const testimonials = [
  {
    quote:
      "This design system completely transformed our website. The components are beautiful and the code is clean and efficient.",
    author: "Sarah Johnson",
    role: "Product Manager",
    avatar: "SJ",
  },
  {
    quote:
      "As a developer, I appreciate how well-structured and customizable everything is. It saved me weeks of development time.",
    author: "Michael Chen",
    role: "Frontend Developer",
    avatar: "MC",
  },
  {
    quote:
      "The responsive design works flawlessly across all devices. Our mobile conversion rate has increased by 40% since the redesign.",
    author: "Emily Rodriguez",
    role: "UX Designer",
    avatar: "ER",
  },
  {
    quote:
      "Implementing dark mode was a breeze and our users love having the option. The attention to accessibility details is impressive.",
    author: "David Kim",
    role: "CTO",
    avatar: "DK",
  },
];

export function TestimonialsSection() {
  const [current, setCurrent] = useState(0);
  const [autoplay, setAutoplay] = useState(true);

  const next = () => {
    setCurrent((current + 1) % testimonials.length);
  };

  const prev = () => {
    setCurrent((current - 1 + testimonials.length) % testimonials.length);
  };

  useEffect(() => {
    if (!autoplay) return;
    
    const interval = setInterval(() => {
      next();
    }, 5000);
    
    return () => clearInterval(interval);
  }, [current, autoplay]);

  return (
    <section id="testimonials" className="py-24">
      <div className="container px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tighter mb-4">
            What Our Clients Say
          </h2>
          <p className="text-lg text-muted-foreground">
            Don't just take our word for it. Here's what people are saying about our design system.
          </p>
        </div>
        
        <div className="relative max-w-4xl mx-auto">
          <div 
            className="overflow-hidden" 
            onMouseEnter={() => setAutoplay(false)}
            onMouseLeave={() => setAutoplay(true)}
          >
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${current * 100}%)` }}
            >
              {testimonials.map((testimonial, index) => (
                <div key={index} className="w-full flex-shrink-0 px-4">
                  <Card className="bg-card border border-border/50 shadow-md h-full">
                    <CardContent className="pt-10">
                      <Quote className="h-12 w-12 text-primary/40 mb-4" />
                      <p className="text-xl mb-6 italic">"{testimonial.quote}"</p>
                      <div className="flex items-center">
                        <Avatar className="h-12 w-12 mr-4">
                          <AvatarFallback>{testimonial.avatar}</AvatarFallback>
                        </Avatar>
                        <div>
                          <p className="font-semibold">{testimonial.author}</p>
                          <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>
          
          <div className="flex justify-center mt-8 gap-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                className={`h-2 w-2 rounded-full transition-colors ${
                  index === current ? "bg-primary" : "bg-muted"
                }`}
                onClick={() => setCurrent(index)}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
          
          <Button
            variant="outline"
            size="icon"
            className="absolute top-1/2 -translate-y-1/2 -left-12 hidden md:flex rounded-full"
            onClick={prev}
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="h-4 w-4" />
          </Button>
          
          <Button
            variant="outline"
            size="icon"
            className="absolute top-1/2 -translate-y-1/2 -right-12 hidden md:flex rounded-full"
            onClick={next}
            aria-label="Next testimonial"
          >
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  );
}