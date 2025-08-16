import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, Code, Users, Lightbulb, Mic, PenTool, Zap } from "lucide-react";

const ServicesSection = () => {
  const services = [
    {
      icon: Lightbulb,
      title: "Product Strategy & Innovation",
      description: "Comprehensive guidance for startups and students on product development, from ideation to execution. Combining technical insights with market understanding.",
      features: ["Product Roadmapping", "Market Analysis", "Technical Feasibility", "Go-to-Market Strategy"],
      color: "text-secondary"
    },
    {
      icon: Code,
      title: "Frontend Development",
      description: "Building responsive, modern web applications with focus on user experience and performance optimization using latest technologies.",
      features: ["React Development", "Responsive Design", "Performance Optimization", "UI/UX Implementation"],
      color: "text-accent"
    },
    {
      icon: Users,
      title: "Mentorship & Coaching",
      description: "Personalized mentorship for students and professionals, with proven track record of success in competitive exams and career development.",
      features: ["JEE/NEET Guidance", "Career Planning", "Skill Development", "Personal Growth"],
      color: "text-secondary"
    },
    {
      icon: Zap,
      title: "Innovation Workshops",
      description: "Interactive sessions on creative problem-solving, system thinking, and innovation methodologies for teams and organizations.",
      features: ["Design Thinking", "Ideation Sessions", "Team Building", "Innovation Culture"],
      color: "text-accent"
    },
    {
      icon: Mic,
      title: "Public Speaking & Training",
      description: "Engaging presentations and training sessions on technology, education, motivation, and personal development topics.",
      features: ["Technical Presentations", "Motivational Talks", "Workshop Facilitation", "Training Programs"],
      color: "text-secondary"
    },
    {
      icon: PenTool,
      title: "Creative Writing & Poetry",
      description: "Creative writing coaching, poetry workshops, and content creation services for personal and professional projects.",
      features: ["Poetry Coaching", "Content Writing", "Creative Expression", "Publication Guidance"],
      color: "text-accent"
    }
  ];

  return (
    <section id="services" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Services & <span className="bg-gradient-secondary bg-clip-text text-transparent">Offerings</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Comprehensive solutions combining technical expertise, creative thinking, 
            and mentorship to drive innovation and growth.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="group bg-gradient-card border-border hover:shadow-elegant transition-all duration-500 hover:scale-105 overflow-hidden">
              <div className="p-6 space-y-6">
                {/* Header */}
                <div className="space-y-4">
                  <service.icon className={`h-12 w-12 ${service.color} group-hover:scale-110 transition-transform duration-300`} />
                  <div>
                    <h3 className="text-xl font-semibold mb-3 text-foreground group-hover:text-secondary transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                </div>

                {/* Features */}
                <div className="space-y-3">
                  <h4 className="text-sm font-medium text-foreground/80">Key Features:</h4>
                  <div className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <div 
                        key={featureIndex}
                        className="flex items-center space-x-2 group-hover:translate-x-1 transition-transform duration-300"
                        style={{ transitionDelay: `${featureIndex * 50}ms` }}
                      >
                        <div className="w-1.5 h-1.5 bg-secondary rounded-full"></div>
                        <span className="text-sm text-muted-foreground">
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* CTA */}
                <div className="pt-4">
                  <Button 
                    variant="ghost" 
                    size="sm" 
                    className="w-full opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-secondary/10 hover:text-secondary"
                  >
                    Learn More
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-card rounded-xl p-8 border border-border max-w-4xl mx-auto">
            <h3 className="text-2xl font-semibold mb-4 text-foreground">
              Ready to Start a Project?
            </h3>
            <p className="text-muted-foreground text-lg mb-6">
              Let's discuss how we can work together to bring your ideas to life and create meaningful impact.
            </p>
            <Button 
              variant="hero" 
              size="lg"
              
            >
              Get in Touch
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;