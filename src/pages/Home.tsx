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
                <div className="w-32 h-32 bg-card/50 rounded-xl flex items-center justify-center border border-primary/20">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-primary/20 rounded-full mx-auto mb-2 flex items-center justify-center">
                      <span className="text-foreground text-xs">Photo</span>
                    </div>
                    <div className="text-xs text-muted-foreground">Your Photo Here</div>
                  </div>
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

      {/* PROJECTS SECTION */}
      <section id="projects" className="min-h-screen bg-background py-20 border-t-4 border-primary">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-6xl font-bold text-primary mb-8 text-center">
              🚀 PROJECTS
            </h2>
            <p className="text-xl text-foreground text-center mb-16 max-w-3xl mx-auto">
              Innovative solutions addressing real-world challenges through technology, creativity, and systems thinking.
            </p>

            <div className="grid gap-12">
              <div className="bg-card border-2 border-primary rounded-2xl p-8 hover:shadow-glow transition-all duration-300 hover:scale-[1.02]">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-4 h-4 bg-secondary rounded-full animate-pulse"></div>
                  <h3 className="text-3xl font-bold text-foreground">Sangillence</h3>
                  <span className="px-4 py-2 bg-secondary text-secondary-foreground rounded-full text-sm font-bold">ACTIVE</span>
                </div>
                <p className="text-foreground text-lg leading-relaxed mb-6">
                  AI-based cognitive growth and skill enhancement platform designed specifically for children's development.
                </p>
                <div className="flex flex-wrap gap-3">
                  <span className="px-3 py-1 bg-primary/20 text-primary border border-primary rounded-lg text-sm font-medium">AI/ML</span>
                  <span className="px-3 py-1 bg-primary/20 text-primary border border-primary rounded-lg text-sm font-medium">Python</span>
                  <span className="px-3 py-1 bg-primary/20 text-primary border border-primary rounded-lg text-sm font-medium">React</span>
                  <span className="px-3 py-1 bg-primary/20 text-primary border border-primary rounded-lg text-sm font-medium">Node.js</span>
                </div>
              </div>

              <div className="bg-card border-2 border-primary rounded-2xl p-8 hover:shadow-glow transition-all duration-300 hover:scale-[1.02]">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-4 h-4 bg-primary rounded-full"></div>
                  <h3 className="text-3xl font-bold text-foreground">Eco-Credits</h3>
                  <span className="px-4 py-2 bg-primary text-primary-foreground rounded-full text-sm font-bold">COMPLETED</span>
                </div>
                <p className="text-foreground text-lg leading-relaxed mb-6">
                  Real-time, pollution-based token trading system implementing a carbon credit model for environmental sustainability.
                </p>
                <div className="flex flex-wrap gap-3">
                  <span className="px-3 py-1 bg-secondary/20 text-secondary border border-secondary rounded-lg text-sm font-medium">Blockchain</span>
                  <span className="px-3 py-1 bg-secondary/20 text-secondary border border-secondary rounded-lg text-sm font-medium">IoT</span>
                  <span className="px-3 py-1 bg-secondary/20 text-secondary border border-secondary rounded-lg text-sm font-medium">Python</span>
                  <span className="px-3 py-1 bg-secondary/20 text-secondary border border-secondary rounded-lg text-sm font-medium">React</span>
                </div>
              </div>

              <div className="bg-card border-2 border-primary rounded-2xl p-8 hover:shadow-glow transition-all duration-300 hover:scale-[1.02]">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-4 h-4 bg-muted rounded-full"></div>
                  <h3 className="text-3xl font-bold text-foreground">GPS-Based Traffic Management</h3>
                  <span className="px-4 py-2 bg-muted text-foreground rounded-full text-sm font-bold">COMING SOON</span>
                </div>
                <p className="text-foreground text-lg leading-relaxed mb-6">
                  Intelligent ambulance-prioritized traffic light system for emergency vehicle navigation and urban traffic optimization.
                </p>
                <div className="flex flex-wrap gap-3">
                  <span className="px-3 py-1 bg-accent/20 text-accent border border-accent rounded-lg text-sm font-medium">IoT</span>
                  <span className="px-3 py-1 bg-accent/20 text-accent border border-accent rounded-lg text-sm font-medium">GPS</span>
                  <span className="px-3 py-1 bg-accent/20 text-accent border border-accent rounded-lg text-sm font-medium">Python</span>
                  <span className="px-3 py-1 bg-accent/20 text-accent border border-accent rounded-lg text-sm font-medium">Arduino</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* THOUGHT EXPERIMENTS SECTION */}
      <section id="thought-experiments" className="min-h-screen bg-card py-20 border-t-4 border-secondary">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-6xl font-bold text-secondary mb-8 text-center">
              🧠 THOUGHT EXPERIMENTS
            </h2>
            <p className="text-xl text-foreground text-center mb-16 max-w-4xl mx-auto">
              Exploring the boundaries of possibility through creative thinking, philosophical inquiry, and innovative conceptual frameworks.
            </p>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-background border-2 border-secondary rounded-2xl p-8 hover:shadow-green transition-all duration-300 hover:scale-[1.02]">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 bg-gradient-primary rounded-xl flex items-center justify-center text-3xl">🧠</div>
                  <div>
                    <h3 className="text-2xl font-bold text-foreground">Conscious OS</h3>
                    <span className="px-3 py-1 bg-secondary text-secondary-foreground rounded-full text-xs font-bold">IN PROGRESS</span>
                  </div>
                </div>
                <p className="text-foreground text-base leading-relaxed mb-4">
                  Exploring the possibility of an operating system that develops self-awareness and consciousness through iterative learning and user interaction.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-2 py-1 bg-primary/20 text-primary border border-primary/50 rounded text-xs font-medium">AI</span>
                  <span className="px-2 py-1 bg-primary/20 text-primary border border-primary/50 rounded text-xs font-medium">Philosophy</span>
                  <span className="px-2 py-1 bg-primary/20 text-primary border border-primary/50 rounded text-xs font-medium">Systems</span>
                </div>
              </div>

              <div className="bg-background border-2 border-secondary rounded-2xl p-8 hover:shadow-green transition-all duration-300 hover:scale-[1.02]">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 bg-gradient-secondary rounded-xl flex items-center justify-center text-3xl">∞</div>
                  <div>
                    <h3 className="text-2xl font-bold text-foreground">Loop within a Loop Paradox</h3>
                    <span className="px-3 py-1 bg-primary text-primary-foreground rounded-full text-xs font-bold">RESEARCH</span>
                  </div>
                </div>
                <p className="text-foreground text-base leading-relaxed mb-4">
                  Investigating recursive systems and their implications on causality, time, and the nature of infinite regression in computational thinking.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-2 py-1 bg-secondary/20 text-secondary border border-secondary/50 rounded text-xs font-medium">Logic</span>
                  <span className="px-2 py-1 bg-secondary/20 text-secondary border border-secondary/50 rounded text-xs font-medium">Mathematics</span>
                  <span className="px-2 py-1 bg-secondary/20 text-secondary border border-secondary/50 rounded text-xs font-medium">Philosophy</span>
                </div>
              </div>

              <div className="bg-background border-2 border-secondary rounded-2xl p-8 hover:shadow-green transition-all duration-300 hover:scale-[1.02]">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 bg-gradient-accent rounded-xl flex items-center justify-center text-3xl">💡</div>
                  <div>
                    <h3 className="text-2xl font-bold text-foreground">Empathy Algorithm</h3>
                    <span className="px-3 py-1 bg-accent text-accent-foreground rounded-full text-xs font-bold">CONCEPTUAL</span>
                  </div>
                </div>
                <p className="text-foreground text-base leading-relaxed mb-4">
                  Designing computational models that can genuinely understand and respond to human emotions with authentic empathy rather than simulation.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-2 py-1 bg-accent/20 text-accent border border-accent/50 rounded text-xs font-medium">AI</span>
                  <span className="px-2 py-1 bg-accent/20 text-accent border border-accent/50 rounded text-xs font-medium">Psychology</span>
                  <span className="px-2 py-1 bg-accent/20 text-accent border border-accent/50 rounded text-xs font-medium">Ethics</span>
                </div>
              </div>

              <div className="bg-background border-2 border-secondary rounded-2xl p-8 hover:shadow-green transition-all duration-300 hover:scale-[1.02]">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 bg-gradient-primary rounded-xl flex items-center justify-center text-3xl">⚡</div>
                  <div>
                    <h3 className="text-2xl font-bold text-foreground">Quantum Decision Trees</h3>
                    <span className="px-3 py-1 bg-muted text-foreground rounded-full text-xs font-bold">THEORETICAL</span>
                  </div>
                </div>
                <p className="text-foreground text-base leading-relaxed mb-4">
                  Applying quantum computing principles to decision-making processes, exploring superposition states in choice architecture.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-2 py-1 bg-muted/30 text-foreground border border-muted rounded text-xs font-medium">Quantum</span>
                  <span className="px-2 py-1 bg-muted/30 text-foreground border border-muted rounded text-xs font-medium">Decision Science</span>
                  <span className="px-2 py-1 bg-muted/30 text-foreground border border-muted rounded text-xs font-medium">Computing</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* MY COLLECTION SECTION */}
      <section id="collection" className="min-h-screen bg-background py-20 border-t-4 border-accent">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-6xl font-bold text-accent mb-8 text-center">
              📚 MY COLLECTION
            </h2>
            <p className="text-xl text-foreground text-center mb-16 max-w-4xl mx-auto">
              A curated archive of creative works, spanning literature, visual media, and audio content that reflects my diverse interests and artistic journey.
            </p>

            <div className="space-y-16">
              {/* Books Section */}
              <div>
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center text-2xl">📚</div>
                  <h3 className="text-4xl font-bold text-primary">Books</h3>
                </div>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-card border-2 border-primary rounded-2xl p-6 hover:shadow-glow transition-all duration-300">
                    <h4 className="text-xl font-bold text-foreground mb-3">
                      Area of Triangle with Single Side: Now Miracle Becomes Reality
                    </h4>
                    <div className="flex gap-3 mb-3">
                      <span className="px-3 py-1 bg-primary/20 text-primary border border-primary rounded-lg text-sm">Mathematics</span>
                      <span className="px-3 py-1 bg-primary text-primary-foreground rounded-lg text-sm font-bold">PUBLISHED</span>
                    </div>
                    <p className="text-foreground text-sm leading-relaxed">
                      A mathematical exploration challenging conventional geometric principles.
                    </p>
                  </div>

                  <div className="bg-card border-2 border-primary rounded-2xl p-6 hover:shadow-glow transition-all duration-300">
                    <h4 className="text-xl font-bold text-foreground mb-3">
                      Swarachit Sometimes - Volume 1
                    </h4>
                    <div className="flex gap-3 mb-3">
                      <span className="px-3 py-1 bg-secondary/20 text-secondary border border-secondary rounded-lg text-sm">Poetry</span>
                      <span className="px-3 py-1 bg-primary text-primary-foreground rounded-lg text-sm font-bold">PUBLISHED</span>
                    </div>
                    <p className="text-foreground text-sm leading-relaxed">
                      First collection of original poetry exploring themes of introspection and growth.
                    </p>
                  </div>

                  <div className="bg-card border-2 border-primary rounded-2xl p-6 hover:shadow-glow transition-all duration-300">
                    <h4 className="text-xl font-bold text-foreground mb-3">
                      Swarachit Sometimes - Volume 2
                    </h4>
                    <div className="flex gap-3 mb-3">
                      <span className="px-3 py-1 bg-secondary/20 text-secondary border border-secondary rounded-lg text-sm">Poetry</span>
                      <span className="px-3 py-1 bg-primary text-primary-foreground rounded-lg text-sm font-bold">PUBLISHED</span>
                    </div>
                    <p className="text-foreground text-sm leading-relaxed">
                      Second poetry collection delving into societal observations and personal reflections.
                    </p>
                  </div>

                  <div className="bg-card border-2 border-primary rounded-2xl p-6 hover:shadow-glow transition-all duration-300">
                    <h4 className="text-xl font-bold text-foreground mb-3">
                      Swarachit Sometimes - Volume 3
                    </h4>
                    <div className="flex gap-3 mb-3">
                      <span className="px-3 py-1 bg-secondary/20 text-secondary border border-secondary rounded-lg text-sm">Poetry</span>
                      <span className="px-3 py-1 bg-primary text-primary-foreground rounded-lg text-sm font-bold">PUBLISHED</span>
                    </div>
                    <p className="text-foreground text-sm leading-relaxed">
                      Latest poetry collection focusing on technology, humanity, and future possibilities.
                    </p>
                  </div>
                </div>
              </div>

              {/* Videos Section */}
              <div>
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-12 h-12 bg-gradient-secondary rounded-xl flex items-center justify-center text-2xl">🎥</div>
                  <h3 className="text-4xl font-bold text-secondary">Videos</h3>
                </div>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-card border-2 border-secondary rounded-2xl p-6 hover:shadow-green transition-all duration-300">
                    <h4 className="text-xl font-bold text-foreground mb-3">
                      The Penumbra
                    </h4>
                    <div className="flex gap-3 mb-3">
                      <span className="px-3 py-1 bg-accent/20 text-accent border border-accent rounded-lg text-sm">Film</span>
                      <span className="px-3 py-1 bg-secondary text-secondary-foreground rounded-lg text-sm font-bold">COMPLETED</span>
                    </div>
                    <p className="text-foreground text-sm leading-relaxed">
                      First-ever student film produced at IIIT Gwalior, exploring themes of identity and purpose.
                    </p>
                  </div>

                  <div className="bg-card border-2 border-secondary rounded-2xl p-6 hover:shadow-green transition-all duration-300">
                    <h4 className="text-xl font-bold text-foreground mb-3">
                      Behind the Scenes: Making of The Penumbra
                    </h4>
                    <div className="flex gap-3 mb-3">
                      <span className="px-3 py-1 bg-primary/20 text-primary border border-primary rounded-lg text-sm">Documentary</span>
                      <span className="px-3 py-1 bg-accent text-accent-foreground rounded-lg text-sm font-bold">AVAILABLE</span>
                    </div>
                    <p className="text-foreground text-sm leading-relaxed">
                      Documentary-style content showcasing the filmmaking process and creative journey.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="achievements" className="min-h-screen bg-card py-20 border-t-4 border-primary">
        <Achievements />
      </section>

      <section id="experience" className="min-h-screen bg-background py-20 border-t-4 border-secondary">
        <Experience />
      </section>

      <section id="cv" className="min-h-screen bg-card py-20 border-t-4 border-accent">
        <CV />
      </section>

      <section id="contact" className="min-h-screen bg-background py-20 border-t-4 border-primary">
        <Contact />
      </section>
    </div>
  );
};

export default Home;