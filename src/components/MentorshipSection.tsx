import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { TrendingUp, Users, Award, Heart, Quote, Star } from "lucide-react";

const MentorshipSection = () => {
  const stats = [
    {
      icon: TrendingUp,
      number: "99.7%",
      label: "Highest JEE Percentile Achieved",
      description: "From 84th to 99.7th percentile"
    },
    {
      icon: Award,
      number: "IIT",
      label: "Admissions Secured",
      description: "IIT Patna and other top institutions"
    },
    {
      icon: Users,
      number: "50+",
      label: "Students Mentored",
      description: "Across various competitive exams"
    },
    {
      icon: Heart,
      number: "100%",
      label: "Satisfaction Rate",
      description: "Dedicated personalized approach"
    }
  ];

  const successStory = {
    quote: "Vaibhav's mentorship was transformational. His unique approach of combining technical concepts with real-world applications made complex topics accessible. The improvement from 84th to 99.7th percentile wasn't just about scores - it was about building confidence and analytical thinking.",
    student: "Rahul Sharma",
    achievement: "IIT Patna, Computer Science",
    year: "2023"
  };

  const mentorshipApproach = [
    {
      title: "Personalized Learning Paths",
      description: "Tailored strategies based on individual strengths, weaknesses, and learning styles."
    },
    {
      title: "Holistic Development",
      description: "Focus on both academic excellence and personal growth, building confidence and resilience."
    },
    {
      title: "Real-World Application",
      description: "Connecting theoretical concepts to practical applications and current innovations."
    },
    {
      title: "Continuous Support",
      description: "Regular check-ins, progress tracking, and adaptive guidance throughout the journey."
    }
  ];

  return (
    <section id="mentorship" className="py-20 bg-gradient-card">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Mentorship & <span className="bg-gradient-secondary bg-clip-text text-transparent">Impact</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Empowering the next generation through personalized guidance, proven methodologies, 
            and a passion for student success.
          </p>
        </div>

        {/* Success Stats */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => (
            <Card key={index} className="text-center p-6 bg-background/50 backdrop-blur-sm border-border hover:shadow-card transition-all duration-300 hover:scale-105">
              <stat.icon className="h-8 w-8 text-secondary mx-auto mb-4" />
              <div className="text-3xl font-bold text-foreground mb-2">{stat.number}</div>
              <div className="text-lg font-medium text-foreground mb-1">{stat.label}</div>
              <div className="text-sm text-muted-foreground">{stat.description}</div>
            </Card>
          ))}
        </div>

        {/* Success Story */}
        <div className="max-w-4xl mx-auto mb-16">
          <Card className="bg-gradient-primary/10 border-secondary/20 overflow-hidden">
            <div className="p-8">
              <div className="flex items-start space-x-4">
                <Quote className="h-8 w-8 text-secondary flex-shrink-0 mt-1" />
                <div className="space-y-4">
                  <p className="text-lg italic text-foreground leading-relaxed">
                    "{successStory.quote}"
                  </p>
                  <div className="flex items-center space-x-4">
                    <div>
                      <p className="font-semibold text-foreground">{successStory.student}</p>
                      <p className="text-sm text-secondary">{successStory.achievement}</p>
                      <p className="text-xs text-muted-foreground">{successStory.year}</p>
                    </div>
                    <div className="flex">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <Star key={star} className="h-4 w-4 fill-secondary text-secondary" />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </div>

        {/* Mentorship Philosophy */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div>
              <h3 className="text-2xl font-semibold mb-4 text-foreground">
                Mentorship Philosophy
              </h3>
              <p className="text-muted-foreground text-lg leading-relaxed">
                My approach to mentorship extends beyond academic coaching. I believe in nurturing 
                the whole person - building not just knowledge, but confidence, critical thinking, 
                and a growth mindset that serves students throughout their lives.
              </p>
            </div>

            <div className="bg-card/30 backdrop-blur-sm rounded-lg p-6 border border-border">
              <h4 className="text-lg font-semibold mb-3 text-secondary">Core Belief</h4>
              <p className="text-muted-foreground">
                "Every student has unique potential. My role is to unlock that potential through 
                personalized guidance, innovative teaching methods, and unwavering support during 
                their transformative journey."
              </p>
            </div>
          </div>

          <div className="space-y-4">
            {mentorshipApproach.map((approach, index) => (
              <Card key={index} className="p-4 bg-background/30 backdrop-blur-sm border-border hover:shadow-card transition-all duration-300">
                <h4 className="font-semibold text-foreground mb-2">{approach.title}</h4>
                <p className="text-sm text-muted-foreground">{approach.description}</p>
              </Card>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <Card className="bg-gradient-secondary/10 border-secondary/20 p-8 max-w-3xl mx-auto">
            <h3 className="text-2xl font-semibold mb-4 text-foreground">
              Ready to Transform Your Journey?
            </h3>
            <p className="text-muted-foreground text-lg mb-6">
              Whether you're preparing for competitive exams or seeking guidance on your career path, 
              I'm here to help you achieve your goals with personalized mentorship.
            </p>
            <Button 
              variant="hero" 
              size="lg"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Start Your Mentorship Journey
            </Button>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default MentorshipSection;