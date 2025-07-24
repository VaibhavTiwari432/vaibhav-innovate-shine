import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin, Linkedin, Github, Instagram, Send } from "lucide-react";

const ContactSection = () => {
  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "vaibhav.tiwari@example.com",
      href: "mailto:vaibhav.tiwari@example.com"
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+91 98765 43210",
      href: "tel:+919876543210"
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Gwalior, Madhya Pradesh, India",
      href: "#"
    }
  ];

  const socialLinks = [
    {
      icon: Linkedin,
      label: "LinkedIn",
      href: "https://linkedin.com/in/vaibhav-tiwari",
      color: "hover:text-blue-400"
    },
    {
      icon: Github,
      label: "GitHub",
      href: "https://github.com/vaibhav-tiwari",
      color: "hover:text-gray-400"
    },
    {
      icon: Instagram,
      label: "Instagram",
      href: "https://instagram.com/vaibhav.tiwari",
      color: "hover:text-pink-400"
    }
  ];

  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Let's <span className="bg-gradient-secondary bg-clip-text text-transparent">Connect</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Ready to collaborate on innovative projects or discuss opportunities? 
            I'd love to hear from you.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-semibold mb-6 text-foreground">
                Get in Touch
              </h3>
              <p className="text-muted-foreground text-lg leading-relaxed mb-8">
                Whether you're interested in collaboration, mentorship, or just want to 
                connect about technology and innovation, I'm always open to meaningful conversations.
              </p>
            </div>

            {/* Contact Details */}
            <div className="space-y-4">
              {contactInfo.map((contact, index) => (
                <a 
                  key={index}
                  href={contact.href}
                  className="flex items-center space-x-4 p-4 bg-card/30 backdrop-blur-sm rounded-lg border border-border hover:bg-card/50 transition-all duration-300 group"
                >
                  <contact.icon className="h-6 w-6 text-secondary group-hover:scale-110 transition-transform" />
                  <div>
                    <p className="text-sm text-muted-foreground">{contact.label}</p>
                    <p className="text-foreground font-medium">{contact.value}</p>
                  </div>
                </a>
              ))}
            </div>

            {/* Social Links */}
            <div>
              <h4 className="text-lg font-semibold mb-4 text-foreground">Follow Me</h4>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`p-3 bg-card/30 backdrop-blur-sm rounded-lg border border-border hover:bg-card/50 transition-all duration-300 hover:scale-110 ${social.color}`}
                  >
                    <social.icon className="h-6 w-6" />
                  </a>
                ))}
              </div>
            </div>

            {/* Download CV */}
            <div className="pt-4">
              <Button variant="gradient" size="lg" className="w-full sm:w-auto">
                Download CV
                <Mail className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>

          {/* Contact Form */}
          <Card className="p-8 bg-gradient-card border-border">
            <h3 className="text-2xl font-semibold mb-6 text-foreground">
              Send a Message
            </h3>
            
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground">Name</label>
                  <Input 
                    placeholder="Your name"
                    className="bg-background/50 border-border focus:border-secondary"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground">Email</label>
                  <Input 
                    type="email"
                    placeholder="your.email@example.com"
                    className="bg-background/50 border-border focus:border-secondary"
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <label className="text-sm font-medium text-foreground">Subject</label>
                <Input 
                  placeholder="What's this about?"
                  className="bg-background/50 border-border focus:border-secondary"
                />
              </div>
              
              <div className="space-y-2">
                <label className="text-sm font-medium text-foreground">Message</label>
                <Textarea 
                  placeholder="Tell me about your project or how we can collaborate..."
                  rows={6}
                  className="bg-background/50 border-border focus:border-secondary resize-none"
                />
              </div>
              
              <Button type="submit" variant="hero" size="lg" className="w-full">
                Send Message
                <Send className="ml-2 h-5 w-5" />
              </Button>
            </form>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;