import { Button } from "@/components/ui/button";
import { Linkedin, Github, Instagram, Heart, ArrowUp } from "lucide-react";

const Footer = () => {
  const socialLinks = [
    {
      icon: Linkedin,
      href: "https://linkedin.com/in/vaibhav-tiwari",
      label: "LinkedIn"
    },
    {
      icon: Github,
      href: "https://github.com/vaibhav-tiwari",
      label: "GitHub"
    },
    {
      icon: Instagram,
      href: "https://instagram.com/vaibhav.tiwari",
      label: "Instagram"
    }
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-background border-t border-border">
      <div className="container mx-auto px-4">
        {/* Main Footer Content */}
        <div className="py-12 grid md:grid-cols-3 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <span className="text-3xl font-bold bg-gradient-secondary bg-clip-text text-transparent">
                VT
              </span>
              <span className="text-xl font-semibold text-foreground">
                Vaibhav Tiwari
              </span>
            </div>
            <p className="text-muted-foreground leading-relaxed">
              Innovating at the intersection of technology, education, and human potential. 
              Building solutions that inspire and create meaningful impact.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-foreground">Quick Links</h3>
            <nav className="space-y-2">
              {["About", "Portfolio", "Services", "Skills", "Mentorship"].map((link) => (
                <a
                  key={link}
                  href={`#${link.toLowerCase()}`}
                  className="block text-muted-foreground hover:text-secondary transition-colors duration-300"
                >
                  {link}
                </a>
              ))}
            </nav>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-foreground">Connect</h3>
            <div className="space-y-3">
              <p className="text-muted-foreground">vaibhav.tiwari@example.com</p>
              <p className="text-muted-foreground">+91 98765 43210</p>
              <p className="text-muted-foreground">Gwalior, Madhya Pradesh</p>
              
              {/* Social Links */}
              <div className="flex space-x-3 pt-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 bg-card/30 backdrop-blur-sm rounded-lg border border-border hover:bg-card/50 hover:scale-110 transition-all duration-300"
                    aria-label={social.label}
                  >
                    <social.icon className="h-5 w-5 text-muted-foreground hover:text-secondary transition-colors" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-6 border-t border-border flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="flex items-center space-x-2 text-muted-foreground">
            <span>Made with</span>
            <Heart className="h-4 w-4 text-secondary" />
            <span>by Vaibhav Tiwari</span>
          </div>
          
          <div className="text-muted-foreground text-sm">
            © 2024 Vaibhav Tiwari. All rights reserved.
          </div>

          {/* Back to Top */}
          <Button
            variant="ghost"
            size="sm"
            onClick={scrollToTop}
            className="hover:bg-secondary/10 hover:text-secondary"
          >
            <ArrowUp className="h-4 w-4 mr-1" />
            Top
          </Button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;