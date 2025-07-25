import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github, Clock } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "Sangillence",
      description: "AI-based cognitive growth and skill enhancement platform designed specifically for children's development.",
      status: "active",
      technologies: ["AI/ML", "Python", "React", "Node.js"],
      link: "#",
      github: "#"
    },
    {
      title: "Eco-Credits",
      description: "Real-time, pollution-based token trading system implementing a carbon credit model for environmental sustainability.",
      status: "completed",
      technologies: ["Blockchain", "IoT", "Python", "React"],
      link: "#",
      github: "#"
    },
    {
      title: "GPS-Based Traffic Management",
      description: "Intelligent ambulance-prioritized traffic light system for emergency vehicle navigation and urban traffic optimization.",
      status: "coming-soon",
      technologies: ["IoT", "GPS", "Python", "Arduino"],
      link: "#",
      github: "#"
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "active": return "bg-secondary";
      case "completed": return "bg-primary";
      case "coming-soon": return "bg-muted-foreground";
      default: return "bg-muted-foreground";
    }
  };

  const getStatusText = (status: string) => {
    switch (status) {
      case "active": return "Active";
      case "completed": return "Completed";
      case "coming-soon": return "Coming Soon";
      default: return "Unknown";
    }
  };

  return (
    <div className="min-h-screen bg-gradient-hero pt-32 pb-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-primary mb-6 text-center">
            Projects
          </h1>
          <p className="text-lg text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
            Innovative solutions addressing real-world challenges through technology, 
            creativity, and systems thinking.
          </p>

          <div className="grid gap-8">
            {projects.map((project, index) => (
              <Card key={index} className="bg-card/80 backdrop-blur-sm border-border hover:shadow-elegant transition-all duration-300 hover:scale-[1.02]">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <CardTitle className="text-2xl text-foreground mb-2">
                        {project.title}
                      </CardTitle>
                      <Badge className={`${getStatusColor(project.status)} text-white mb-3`}>
                        {getStatusText(project.status)}
                      </Badge>
                    </div>
                  </div>
                  <CardDescription className="text-muted-foreground text-base leading-relaxed">
                    {project.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech, techIndex) => (
                      <Badge key={techIndex} variant="outline" className="text-sm">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  
                  <div className="flex gap-3">
                    {project.status !== "coming-soon" ? (
                      <>
                        <Button size="sm" className="flex items-center gap-2">
                          <ExternalLink className="h-4 w-4" />
                          Learn More
                        </Button>
                        <Button variant="outline" size="sm" className="flex items-center gap-2">
                          <Github className="h-4 w-4" />
                          GitHub
                        </Button>
                      </>
                    ) : (
                      <Button variant="outline" size="sm" className="flex items-center gap-2" disabled>
                        <Clock className="h-4 w-4" />
                        Coming Soon
                      </Button>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;