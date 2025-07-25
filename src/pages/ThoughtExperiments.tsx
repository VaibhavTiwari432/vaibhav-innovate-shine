import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Brain, Infinity, Lightbulb, Zap } from "lucide-react";

const ThoughtExperiments = () => {
  const experiments = [
    {
      title: "Conscious OS",
      description: "Exploring the possibility of an operating system that develops self-awareness and consciousness through iterative learning and user interaction.",
      icon: Brain,
      status: "In Progress",
      tags: ["AI", "Philosophy", "Systems"]
    },
    {
      title: "Loop within a Loop Paradox",
      description: "Investigating recursive systems and their implications on causality, time, and the nature of infinite regression in computational thinking.",
      icon: Infinity,
      status: "Research Phase",
      tags: ["Logic", "Mathematics", "Philosophy"]
    },
    {
      title: "Empathy Algorithm",
      description: "Designing computational models that can genuinely understand and respond to human emotions with authentic empathy rather than simulation.",
      icon: Lightbulb,
      status: "Conceptual",
      tags: ["AI", "Psychology", "Ethics"]
    },
    {
      title: "Quantum Decision Trees",
      description: "Applying quantum computing principles to decision-making processes, exploring superposition states in choice architecture.",
      icon: Zap,
      status: "Theoretical",
      tags: ["Quantum", "Decision Science", "Computing"]
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "In Progress": return "bg-secondary";
      case "Research Phase": return "bg-primary";
      case "Conceptual": return "bg-accent";
      case "Theoretical": return "bg-muted-foreground";
      default: return "bg-muted-foreground";
    }
  };

  return (
    <div className="min-h-screen bg-gradient-hero pt-32 pb-20">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-primary mb-6 text-center">
            Thought Experiments
          </h1>
          <p className="text-lg text-muted-foreground text-center mb-12 max-w-3xl mx-auto">
            Exploring the boundaries of possibility through creative thinking, philosophical inquiry, 
            and innovative conceptual frameworks.
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            {experiments.map((experiment, index) => {
              const IconComponent = experiment.icon;
              return (
                <Card 
                  key={index} 
                  className="bg-card/80 backdrop-blur-sm border-border hover:shadow-elegant transition-all duration-300 hover:scale-[1.02] group cursor-pointer"
                >
                  <CardHeader>
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                        <IconComponent className="h-6 w-6 text-white" />
                      </div>
                      <div className="flex-1">
                        <CardTitle className="text-xl text-foreground mb-2">
                          {experiment.title}
                        </CardTitle>
                        <Badge className={`${getStatusColor(experiment.status)} text-white text-xs`}>
                          {experiment.status}
                        </Badge>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-muted-foreground text-base leading-relaxed mb-4">
                      {experiment.description}
                    </CardDescription>
                    
                    <div className="flex flex-wrap gap-2">
                      {experiment.tags.map((tag, tagIndex) => (
                        <Badge key={tagIndex} variant="outline" className="text-xs">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ThoughtExperiments;