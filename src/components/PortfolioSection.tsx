import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github, Brain, Leaf, Car, Hospital, Trophy, Film, GraduationCap, BookOpen } from "lucide-react";

const PortfolioSection = () => {
  const projects = [
    {
      icon: Brain,
      title: "Sangillence",
      description: "AI-driven platform for nurturing children's skills and intelligence through personalized learning experiences.",
      tags: ["AI/ML", "Education", "React", "Python"],
      featured: true
    },
    {
      icon: Leaf,
      title: "Eco-Credits",
      description: "Pollution-based tradable token system submitted to James Dyson Award for environmental impact.",
      tags: ["Blockchain", "Environment", "Innovation"],
      featured: true
    },
    {
      icon: Car,
      title: "Real-Time Ambulance Traffic System",
      description: "Smart traffic management system for emergency vehicles using IoT and real-time data processing.",
      tags: ["IoT", "Emergency Systems", "Real-time"],
      featured: false
    },
    {
      icon: Hospital,
      title: "Hospital Management System",
      description: "Symptom-based hospital and doctor appointment platform with intelligent matching algorithms.",
      tags: ["Healthcare", "Full-stack", "Database"],
      featured: false
    },
    {
      icon: Trophy,
      title: "Infotsav Olympiad",
      description: "Organized district-level student competitions, fostering academic excellence and innovation.",
      tags: ["Event Management", "Leadership", "Community"],
      featured: false
    },
    {
      icon: Film,
      title: "The Penumbra",
      description: "Directed the first-ever student film at IIIT Gwalior, showcasing creative storytelling.",
      tags: ["Filmmaking", "Creative Direction", "Storytelling"],
      featured: true
    },
    {
      icon: GraduationCap,
      title: "Mentorship Success",
      description: "Successfully mentored students to IIT admissions, improving JEE scores from 84% to 99.7%.",
      tags: ["Mentorship", "Education", "Success Stories"],
      featured: false
    },
    {
      icon: BookOpen,
      title: "Poetry Publications",
      description: "Published 'Swarachit Sometimes' series, exploring themes of technology, humanity, and growth.",
      tags: ["Creative Writing", "Poetry", "Publishing"],
      featured: false
    }
  ];

  const featuredProjects = projects.filter(project => project.featured);
  const otherProjects = projects.filter(project => !project.featured);

  return (
    <section id="portfolio" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Featured <span className="bg-gradient-secondary bg-clip-text text-transparent">Projects</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A showcase of innovative solutions spanning AI, environmental technology, 
            creative expression, and social impact.
          </p>
        </div>

        {/* Featured Projects */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {featuredProjects.map((project, index) => (
            <Card key={index} className="group bg-gradient-card border-border hover:shadow-elegant transition-all duration-500 hover:scale-105 overflow-hidden">
              <div className="p-6 space-y-4">
                <div className="flex items-center justify-between">
                  <project.icon className="h-10 w-10 text-secondary" />
                  <div className="flex gap-2">
                    <Button variant="ghost" size="sm" className="opacity-0 group-hover:opacity-100 transition-opacity">
                      <Github className="h-4 w-4" />
                    </Button>
                    <Button variant="ghost" size="sm" className="opacity-0 group-hover:opacity-100 transition-opacity">
                      <ExternalLink className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-foreground group-hover:text-secondary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {project.description}
                  </p>
                </div>

                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <span 
                      key={tagIndex}
                      className="px-2 py-1 text-xs bg-muted/50 text-muted-foreground rounded-md border border-border/50"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Other Projects */}
        <div>
          <h3 className="text-2xl font-semibold mb-8 text-center">
            Other <span className="text-accent">Notable Projects</span>
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {otherProjects.map((project, index) => (
              <Card key={index} className="group bg-card/50 border-border hover:bg-card hover:shadow-card transition-all duration-300">
                <div className="p-4 space-y-3">
                  <project.icon className="h-8 w-8 text-accent" />
                  <div>
                    <h4 className="font-medium mb-1 text-foreground group-hover:text-accent transition-colors">
                      {project.title}
                    </h4>
                    <p className="text-xs text-muted-foreground">
                      {project.description}
                    </p>
                  </div>
                  <div className="flex flex-wrap gap-1">
                    {project.tags.slice(0, 2).map((tag, tagIndex) => (
                      <span 
                        key={tagIndex}
                        className="px-1.5 py-0.5 text-xs bg-muted/30 text-muted-foreground rounded"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
