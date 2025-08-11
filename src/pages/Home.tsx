import { Button } from "@/components/ui/button";
import { ArrowRight, Calendar, GraduationCap, Target, Brain, Code, Lightbulb, Users, Award, BookOpen } from "lucide-react";
import { Link } from "react-router-dom";

// Import all page components
import Projects from "./Projects";
import ThoughtExperiments from "./ThoughtExperiments";
import Collection from "./Collection";
import Achievements from "./Achievements";
import Experience from "./Experience";
import CV from "./CV";
import Contact from "./Contact";
import baibhavImg from '../assets/vaibhav.jpg';
import PhotographsSection from '../components/PhotographsSection';

const Home = () => {
  const orbitalElements = [
    { icon: Brain, label: "AI Projects", delay: "0s", distance: "180px" },
    { icon: Code, label: "Development", delay: "3s", distance: "220px" },
    { icon: Lightbulb, label: "Innovation", delay: "6s", distance: "160px" },
    { icon: Users, label: "Mentorship", delay: "9s", distance: "200px" },
    { icon: Award, label: "Achievements", delay: "12s", distance: "240px" },
    { icon: BookOpen, label: "Publications", delay: "15s", distance: "190px" },
  ];



  return (
    <div className="min-h-screen bg-gradient-hero relative overflow-hidden">
            {/* Animated background */}

      {/* Decorative Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Floating geometric shapes */}
        <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-orb rounded-full blur-xl opacity-70 animate-float doodle-dots"></div>
        <div className="absolute top-40 right-20 w-24 h-24 bg-gradient-secondary rounded-full blur-lg opacity-50 animate-float doodle-lines" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-40 left-20 w-20 h-20 bg-gradient-primary rounded-full blur-md opacity-60 animate-bounce-gentle" style={{ animationDelay: '4s' }}></div>
        <div className="absolute bottom-20 right-10 w-28 h-28 bg-gradient-accent rounded-full blur-xl opacity-40 animate-pulse-glow" style={{ animationDelay: '6s' }}></div>
        
        {/* Modern doodle patterns */}
        <div className="absolute top-1/4 left-1/4 w-16 h-16 border-2 border-primary/30 rounded-lg rotate-45 animate-float"></div>
        <div className="absolute top-3/4 right-1/3 w-12 h-12 border-2 border-secondary/40 rounded-full animate-bounce-gentle"></div>
        <div className="floating-shapes absolute inset-0"></div>
      </div>

      {/* Hero Section */}
      <section className="container mx-auto px-4 pt-32 pb-20 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="text-left">
              <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
                Vaibhav Tiwari
              </h1>
              <p className="text-2xl md:text-3xl text-primary mb-8 font-medium">
                Creating, Connecting, Contributing
              </p>
              <p className="text-lg text-muted-foreground max-w-2xl mb-12 leading-relaxed">
                A system thinker, technologist, and creative innovator focused on societal problem-solving 
                using systems thinking, technology, and creativity. Currently pursuing an Integrated B.Tech IT + MBA 
                from IIIT Gwalior.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 mb-16">
                <a href="#projects">
                  <Button size="lg" className="group bg-primary text-background hover:bg-primary/90 shadow-glow">
                    Explore Projects
                    <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </a>
                <a href="#contact">
                  <Button variant="outline" size="lg" className="border-secondary text-secondary hover:bg-secondary hover:text-background">
                    Get In Touch
                  </Button>
                </a>
              </div>
            </div>

            {/* Right Side - Orbital Elements */}
            <div className="relative flex items-center justify-center h-96 lg:h-[500px]">
              {/* Central Element - Photo Space */}
              <div className="relative z-20 bg-gradient-card backdrop-blur-sm border border-primary/30 rounded-2xl p-2 shadow-glow">
                <div className="w-32 h-32 bg-card/50 rounded-xl flex items-center justify-center border border-primary/20 p-0">
                  <img
                    src={baibhavImg}
                    alt="Profile"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              {/* Orbiting Elements */}
              {orbitalElements.map((element, index) => {
                const IconComponent = element.icon;
                return (
                  <div
                    key={index}
                    className="absolute animate-orbit"
                    style={{
                      animationDelay: element.delay,
                      animationDuration: '20s'
                    }}
                  >
                    <div className="w-16 h-16 bg-gradient-orb rounded-full flex items-center justify-center shadow-glow backdrop-blur-sm border border-primary/30 hover:scale-110 transition-transform cursor-pointer group">
                      <IconComponent className="h-6 w-6 text-foreground" />
                      <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 text-xs text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                        {element.label}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Journey Timeline */}
      <section className="bg-background/90 backdrop-blur-sm py-20 relative z-10 border-t border-border">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-foreground mb-12">My Journey</h2>
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-gradient-card backdrop-blur-sm p-6 rounded-xl border border-primary/20 hover:shadow-glow transition-all duration-300">
                <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center mb-4">
                  <GraduationCap className="h-6 w-6 text-background" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-foreground">Education</h3>
                <p className="text-muted-foreground">
                  Integrated B.Tech IT + MBA from IIIT Gwalior, combining technical expertise with business acumen.
                </p>
              </div>
              
              <div className="bg-gradient-card backdrop-blur-sm p-6 rounded-xl border border-secondary/20 hover:shadow-green transition-all duration-300">
                <div className="w-12 h-12 bg-gradient-secondary rounded-lg flex items-center justify-center mb-4">
                  <Calendar className="h-6 w-6 text-background" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-foreground">Present</h3>
                <p className="text-muted-foreground">
                  Working on innovative projects in AI, environmental sustainability, and creative expression.
                </p>
              </div>
              
              <div className="bg-gradient-card backdrop-blur-sm p-6 rounded-xl border border-accent/20 hover:shadow-glow transition-all duration-300">
                <div className="w-12 h-12 bg-gradient-accent rounded-lg flex items-center justify-center mb-4">
                  <Target className="h-6 w-6 text-background" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-foreground">Goals</h3>
                <p className="text-muted-foreground">
                  Building solutions that create meaningful impact on society through technology and innovation.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="projects" >
        <Projects />
      </section>
      
      <section id="thoughtexperiments" >
        <ThoughtExperiments />
      </section>

      <section id="collection" >
        <Collection />
      </section>

      <PhotographsSection />

      <section id="achievements" >
        <Achievements />
      </section>

      <section id="experience">
        <Experience />
      </section>

      <section id="cv" >
        <CV />
      </section>

      <section id="contact" >
        <Contact />
      </section>
    </div>
  );
};

export default Home;