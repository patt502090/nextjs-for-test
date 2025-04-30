import {
  LayoutGrid,
  Smartphone,
  Zap,
  Shield,
  Moon,
  Paintbrush,
} from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const features = [
  {
    icon: <LayoutGrid className="h-10 w-10 text-primary" />,
    title: "Responsive Design",
    description:
      "Layouts that automatically adapt to any device size, from mobile to desktop.",
  },
  {
    icon: <Zap className="h-10 w-10 text-primary" />,
    title: "Fast Performance",
    description:
      "Optimized for speed with efficient rendering and minimal bundle sizes.",
  },
  {
    icon: <Shield className="h-10 w-10 text-primary" />,
    title: "Secure by Default",
    description:
      "Built with security best practices to protect your website and users.",
  },
  {
    icon: <Moon className="h-10 w-10 text-primary" />,
    title: "Dark Mode",
    description:
      "Built-in dark mode support for comfortable viewing in any lighting condition.",
  },
  {
    icon: <Smartphone className="h-10 w-10 text-primary" />,
    title: "Mobile First",
    description:
      "Designed with mobile users in mind, ensuring a great experience on any device.",
  },
  {
    icon: <Paintbrush className="h-10 w-10 text-primary" />,
    title: "Beautiful UI",
    description:
      "Professionally designed components that look great out of the box.",
  },
];

export function FeaturesSection() {
  return (
    <section
      id="features"
      className="py-24 bg-muted/50"
    >
      <div className="container px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tighter mb-4">
            Powerful Features for Modern Websites
          </h2>
          <p className="text-lg text-muted-foreground">
            Everything you need to build beautiful, responsive websites that your users will love.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="bg-card hover:shadow-lg transition-all duration-300 border border-border/50"
            >
              <CardHeader>
                <div className="mb-4 p-2 rounded-lg inline-block bg-primary/10">
                  {feature.icon}
                </div>
                <CardTitle className="text-xl">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  {feature.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}