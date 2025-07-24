import { Button } from "@/components/ui/button";
import { ArrowRight, Download } from "lucide-react";
import heroImage from "@/assets/hero-gradient.jpg";
import profileImage from "@/assets/profile-placeholder.jpg";

const HeroSection = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-hero">
        <img 
          src={heroImage} 
          alt="Hero Background"
          className="w-full h-full object-cover opacity-20"
        />
      </div>
      
      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center space-y-8">
          {/* Profile Image */}
          <div className="flex justify-center mb-8">
            <div className="relative">
              <div className="w-48 h-48 rounded-full overflow-hidden shadow-elegant">
                <img 
                  src={profileImage} 
                  alt="Vaibhav Tiwari"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute inset-0 rounded-full bg-gradient-secondary opacity-20"></div>
            </div>
          </div>

          {/* Main Content */}
          <div className="space-y-6">
            <h1 className="text-5xl md:text-7xl font-bold">
              <span className="text-foreground">Vaibhav</span>{" "}
              <span className="bg-gradient-secondary bg-clip-text text-transparent">
                Tiwari
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Innovating at the Intersection of{" "}
              <span className="text-secondary font-medium">Technology</span>,{" "}
              <span className="text-accent font-medium">Education</span>, and{" "}
              <span className="text-secondary font-medium">Human Potential</span>
            </p>

            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              B.Tech IT Student with Integrated MBA | IIIT Gwalior | 
              Innovator | Mentor | Creative Storyteller
            </p>
          </div>

          {/* Call to Action */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
            <Button 
              variant="hero" 
              size="lg"
              className="px-8"
              onClick={() => document.getElementById('portfolio')?.scrollIntoView({ behavior: 'smooth' })}
            >
              View Portfolio
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            
            <Button 
              variant="glass" 
              size="lg"
              className="px-8"
            >
              Download CV
              <Download className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>

      {/* Animated Elements */}
      <div className="absolute top-1/4 left-10 w-4 h-4 bg-secondary rounded-full animate-pulse opacity-60"></div>
      <div className="absolute bottom-1/3 right-20 w-3 h-3 bg-accent rounded-full animate-pulse opacity-40 delay-300"></div>
      <div className="absolute top-1/2 right-10 w-2 h-2 bg-secondary rounded-full animate-pulse opacity-80 delay-700"></div>
    </section>
  );
};

export default HeroSection;