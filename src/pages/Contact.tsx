import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin, Linkedin, Github, Instagram, Send, Download, MessageCircle, Calendar, Coffee } from "lucide-react";

const Contact = () => {
  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "vaibhav.tiwari@iiitm.ac.in",
      href: "mailto:vaibhav.tiwari@iiitm.ac.in",
      description: "Best way to reach me for professional inquiries"
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+91 98765 43210",
      href: "tel:+919876543210",
      description: "Available Mon-Fri, 9 AM - 6 PM IST"
    },
    {
      icon: MapPin,
      label: "Location",
      value: "IIIT Gwalior, Madhya Pradesh",
      href: "#",
      description: "Open to remote collaboration worldwide"
    },
    {
      icon: Calendar,
      label: "Schedule a Meeting",
      value: "Book a 30-min call",
      href: "#",
      description: "Let's discuss your project over a virtual coffee"
    }
  ];

  const socialLinks = [
    {
      icon: Linkedin,
      label: "LinkedIn",
      href: "https://linkedin.com/in/vaibhav-tiwari",
      color: "hover:text-blue-400",
      description: "Professional network & updates"
    },
    {
      icon: Github,
      label: "GitHub",
      href: "https://github.com/vaibhav-tiwari",
      color: "hover:text-white",
      description: "Code repositories & projects"
    },
    {
      icon: Instagram,
      label: "Instagram",
      href: "https://instagram.com/vaibhav.creative",
      color: "hover:text-pink-400",
      description: "Creative photography & behind-the-scenes"
    }
  ];

  const quickActions = [
    {
      icon: Coffee,
      title: "Virtual Coffee Chat",
      description: "15-minute informal discussion about ideas and opportunities",
      action: "Schedule Now"
    },
    {
      icon: MessageCircle,
      title: "Project Consultation",
      description: "Detailed discussion about your project requirements and solutions",
      action: "Book Session"
    },
    {
      icon: Download,
      title: "Download Portfolio",
      description: "Complete portfolio with detailed case studies and achievements",
      action: "Get PDF"
    }
  ];

  return (
    <div className="min-h-screen pt-20 pb-12">
      {/* Animated background */}
      <div className="fixed inset-0 bg-gradient-primary">
        <div className="absolute inset-0 opacity-30"></div>
      </div>

      <div className="relative z-10 container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Let's <span className="bg-gradient-secondary bg-clip-text text-transparent">Connect</span>
          </h1>
          <p className="text-xl text-white/80 max-w-3xl mx-auto mb-8">
            Ready to collaborate on innovative projects, discuss opportunities, or just have a meaningful conversation about technology and innovation? I'd love to hear from you.
          </p>
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <div className="flex items-center space-x-2 px-4 py-2 bg-white/10 rounded-full">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              <span className="text-white text-sm">Available for new projects</span>
            </div>
            <div className="flex items-center space-x-2 px-4 py-2 bg-white/10 rounded-full">
              <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
              <span className="text-white text-sm">Open to mentoring</span>
            </div>
          </div>
        </div>

        <div className="max-w-6xl mx-auto">
          {/* Quick Actions */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {quickActions.map((action, index) => (
              <Card key={index} className="p-6 bg-gradient-card border-border hover:bg-white/15 transition-all duration-300 group cursor-pointer">
                <action.icon className="h-8 w-8 text-purple-300 mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="text-lg font-semibold text-white mb-2">{action.title}</h3>
                <p className="text-white/70 text-sm mb-4">{action.description}</p>
                <Button variant="glass" size="sm" className="w-full">
                  {action.action}
                </Button>
              </Card>
            ))}
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="space-y-8">
              <Card className="p-8 bg-gradient-card border-border">
                <h3 className="text-2xl font-semibold mb-6 text-white flex items-center">
                  <div className="w-2 h-8 bg-gradient-secondary rounded-full mr-4"></div>
                  Get in Touch
                </h3>
                <p className="text-white/80 text-lg leading-relaxed mb-8">
                  Whether you're interested in collaboration, mentorship, discussing innovative ideas, 
                  or exploring opportunities in AI and technology, I'm always open to meaningful conversations 
                  that can create positive impact.
                </p>

                {/* Contact Details */}
                <div className="space-y-4">
                  {contactInfo.map((contact, index) => (
                    <a 
                      key={index}
                      href={contact.href}
                      className="flex items-start space-x-4 p-4 bg-white/5 backdrop-blur-sm rounded-lg border border-white/10 hover:bg-white/10 transition-all duration-300 group"
                    >
                      <contact.icon className="h-6 w-6 text-purple-300 mt-1 group-hover:scale-110 transition-transform flex-shrink-0" />
                      <div className="flex-grow">
                        <p className="text-sm text-purple-200">{contact.label}</p>
                        <p className="text-white font-medium mb-1">{contact.value}</p>
                        <p className="text-white/60 text-xs">{contact.description}</p>
                      </div>
                    </a>
                  ))}
                </div>
              </Card>

              {/* Social Links */}
              <Card className="p-8 bg-gradient-card border-border">
                <h4 className="text-xl font-semibold mb-6 text-white flex items-center">
                  <div className="w-2 h-6 bg-gradient-secondary rounded-full mr-4"></div>
                  Follow My Journey
                </h4>
                <div className="space-y-4">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-4 p-4 bg-white/5 rounded-lg border border-white/10 hover:bg-white/10 transition-all duration-300 group"
                    >
                      <social.icon className={`h-6 w-6 text-purple-300 group-hover:scale-110 transition-all ${social.color}`} />
                      <div>
                        <p className="text-white font-medium">{social.label}</p>
                        <p className="text-white/60 text-sm">{social.description}</p>
                      </div>
                    </a>
                  ))}
                </div>
              </Card>
            </div>

            {/* Contact Form */}
            <Card className="p-8 bg-gradient-card border-border">
              <h3 className="text-2xl font-semibold mb-6 text-white flex items-center">
                <div className="w-2 h-8 bg-gradient-secondary rounded-full mr-4"></div>
                Send a Message
              </h3>
              
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-purple-200">Full Name *</label>
                    <Input 
                      placeholder="John Doe"
                      className="bg-white/10 border-white/20 text-white placeholder:text-white/50 focus:border-purple-400"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-purple-200">Email Address *</label>
                    <Input 
                      type="email"
                      placeholder="john@example.com"
                      className="bg-white/10 border-white/20 text-white placeholder:text-white/50 focus:border-purple-400"
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <label className="text-sm font-medium text-purple-200">Subject *</label>
                  <Input 
                    placeholder="What would you like to discuss?"
                    className="bg-white/10 border-white/20 text-white placeholder:text-white/50 focus:border-purple-400"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-purple-200">Project Type</label>
                  <select className="w-full p-3 bg-white/10 border border-white/20 rounded-md text-white focus:border-purple-400 focus:outline-none">
                    <option value="">Select project type (optional)</option>
                    <option value="ai-ml">AI/Machine Learning</option>
                    <option value="web-app">Web Application</option>
                    <option value="mobile-app">Mobile Application</option>
                    <option value="blockchain">Blockchain/DeFi</option>
                    <option value="iot">IoT/Hardware</option>
                    <option value="research">Research Collaboration</option>
                    <option value="mentoring">Mentoring/Guidance</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                
                <div className="space-y-2">
                  <label className="text-sm font-medium text-purple-200">Message *</label>
                  <Textarea 
                    placeholder="Tell me about your project, ideas, or how we can collaborate. Be as detailed as you'd like - I love learning about innovative concepts and challenges!"
                    rows={6}
                    className="bg-white/10 border-white/20 text-white placeholder:text-white/50 focus:border-purple-400 resize-none"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-purple-200">Timeline</label>
                  <select className="w-full p-3 bg-white/10 border border-white/20 rounded-md text-white focus:border-purple-400 focus:outline-none">
                    <option value="">Expected timeline (optional)</option>
                    <option value="asap">ASAP</option>
                    <option value="1-week">Within 1 week</option>
                    <option value="1-month">Within 1 month</option>
                    <option value="3-months">Within 3 months</option>
                    <option value="flexible">Flexible</option>
                  </select>
                </div>
                
                <Button type="submit" variant="hero" size="lg" className="w-full">
                  Send Message
                  <Send className="ml-2 h-5 w-5" />
                </Button>

                <p className="text-white/60 text-sm text-center">
                  I typically respond within 24-48 hours. For urgent matters, feel free to call or connect on LinkedIn.
                </p>
              </form>
            </Card>
          </div>

          {/* Footer Quote */}
          <div className="text-center mt-16 pt-12 border-t border-white/10">
            <blockquote className="text-2xl md:text-3xl font-light text-white/90 italic mb-4">
              "Let's build the future intelligently."
            </blockquote>
            <p className="text-white/60">- Vaibhav Tiwari</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;