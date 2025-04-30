import Link from "next/link";
import { Instagram, Twitter, Facebook, Linkedin, Github } from "lucide-react";

export function SiteFooter() {
  const currentYear = new Date().getFullYear();
  
  const footerLinks = [
    {
      title: "Product",
      links: [
        { name: "Features", href: "#features" },
        { name: "Pricing", href: "#" },
        { name: "Testimonials", href: "#testimonials" },
        { name: "FAQ", href: "#" },
      ],
    },
    {
      title: "Company",
      links: [
        { name: "About", href: "#" },
        { name: "Blog", href: "#" },
        { name: "Careers", href: "#" },
        { name: "Contact", href: "#contact" },
      ],
    },
    {
      title: "Resources",
      links: [
        { name: "Documentation", href: "#" },
        { name: "Guides", href: "#" },
        { name: "Support", href: "#" },
        { name: "API", href: "#" },
      ],
    },
    {
      title: "Legal",
      links: [
        { name: "Privacy", href: "#" },
        { name: "Terms", href: "#" },
        { name: "Cookies", href: "#" },
        { name: "Licenses", href: "#" },
      ],
    },
  ];

  const socialLinks = [
    { name: "Twitter", icon: <Twitter className="h-5 w-5" />, href: "#" },
    { name: "Facebook", icon: <Facebook className="h-5 w-5" />, href: "#" },
    { name: "Instagram", icon: <Instagram className="h-5 w-5" />, href: "#" },
    { name: "LinkedIn", icon: <Linkedin className="h-5 w-5" />, href: "#" },
    { name: "GitHub", icon: <Github className="h-5 w-5" />, href: "#" },
  ];

  return (
    <footer className="bg-muted/30 border-t">
      <div className="container px-4 md:px-6 py-12 md:py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 mb-12">
          <div className="col-span-2 lg:col-span-1">
            <Link href="#home" className="font-bold text-xl flex items-center mb-4">
              <span className="bg-primary text-primary-foreground rounded-lg p-1 mr-2">M</span>
              Modern
            </Link>
            <p className="text-muted-foreground max-w-xs">
              Beautiful, responsive websites with modern design and powerful features.
            </p>
            <div className="flex space-x-4 mt-6">
              {socialLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-muted-foreground hover:text-foreground transition-colors"
                  aria-label={link.name}
                >
                  {link.icon}
                </Link>
              ))}
            </div>
          </div>
          
          {footerLinks.map((group) => (
            <div key={group.title}>
              <h4 className="font-medium text-base mb-4">{group.title}</h4>
              <ul className="space-y-3">
                {group.links.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-muted-foreground hover:text-foreground transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        
        <div className="border-t pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-muted-foreground">
            © {currentYear} Modern Design. All rights reserved.
          </p>
          <p className="text-sm text-muted-foreground mt-4 md:mt-0">
            Designed with ♥ for the modern web
          </p>
        </div>
      </div>
    </footer>
  );
}