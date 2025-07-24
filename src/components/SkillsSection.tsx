import { Card } from "@/components/ui/card";
import { Code, Database, Palette, Mic, Users, Brain } from "lucide-react";

const SkillsSection = () => {
  const skillCategories = [
    {
      icon: Code,
      title: "Programming & Development",
      skills: ["Python", "C++", "HTML/CSS", "React", "JavaScript", "MySQL", "LaTeX"],
      color: "text-secondary"
    },
    {
      icon: Database,
      title: "Data & Analytics",
      skills: ["Tableau", "Excel", "Data Analysis", "Statistical Modeling", "Research"],
      color: "text-accent"
    },
    {
      icon: Brain,
      title: "AI & Innovation",
      skills: ["GPT", "Gemini", "Claude", "Copilot", "AI Integration", "Machine Learning"],
      color: "text-secondary"
    },
    {
      icon: Palette,
      title: "Creative Tools",
      skills: ["Canva", "Premiere Pro", "Blender (Beginner)", "Creative Writing", "Filmmaking"],
      color: "text-accent"
    },
    {
      icon: Mic,
      title: "Communication & Leadership",
      skills: ["Public Speaking", "Presentation", "Event Management", "Team Leadership"],
      color: "text-secondary"
    },
    {
      icon: Users,
      title: "Soft Skills",
      skills: ["System Thinking", "Mentorship", "Problem Solving", "Strategic Planning"],
      color: "text-accent"
    }
  ];

  return (
    <section id="skills" className="py-20 bg-gradient-card">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Skills & <span className="bg-gradient-secondary bg-clip-text text-transparent">Expertise</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A comprehensive toolkit combining technical proficiency, creative capabilities, 
            and leadership skills for holistic problem-solving.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <Card key={index} className="group bg-background/50 backdrop-blur-sm border-border hover:shadow-card transition-all duration-500 hover:scale-105">
              <div className="p-6 space-y-4">
                <div className="flex items-center space-x-3">
                  <category.icon className={`h-8 w-8 ${category.color}`} />
                  <h3 className="text-lg font-semibold text-foreground">
                    {category.title}
                  </h3>
                </div>
                
                <div className="space-y-2">
                  {category.skills.map((skill, skillIndex) => (
                    <div 
                      key={skillIndex}
                      className="flex items-center space-x-2 group-hover:translate-x-1 transition-transform duration-300"
                      style={{ transitionDelay: `${skillIndex * 50}ms` }}
                    >
                      <div className="w-2 h-2 bg-secondary rounded-full opacity-60"></div>
                      <span className="text-muted-foreground text-sm hover:text-foreground transition-colors">
                        {skill}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Skills Highlight */}
        <div className="mt-16 text-center">
          <div className="bg-card/30 backdrop-blur-sm rounded-lg p-8 border border-border max-w-4xl mx-auto">
            <h3 className="text-2xl font-semibold mb-4 text-secondary">
              Interdisciplinary Approach
            </h3>
            <p className="text-muted-foreground text-lg leading-relaxed">
              My strength lies in connecting diverse fields - from AI and data science to 
              creative storytelling and mentorship. This unique combination enables me to 
              approach challenges from multiple perspectives and create innovative solutions 
              that bridge technical excellence with human understanding.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;