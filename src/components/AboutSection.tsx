import { Card } from "@/components/ui/card";
import { GraduationCap, Award, Heart, Lightbulb } from "lucide-react";

const AboutSection = () => {
  const achievements = [
    {
      icon: GraduationCap,
      title: "Education Excellence",
      description: "IAT Top 2%, IISER Eligible, IIIT Gwalior IT + MBA"
    },
    {
      icon: Award,
      title: "Recognition",
      description: "James Dyson Award Submission, Multiple Project Awards"
    },
    {
      icon: Heart,
      title: "Social Impact",
      description: "Passionate about education, mentorship, and community building"
    },
    {
      icon: Lightbulb,
      title: "Innovation",
      description: "AI-driven solutions, creative problem-solving, interdisciplinary approach"
    }
  ];

  return (
    <section id="about" className="py-20 bg-gradient-card">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            About <span className="bg-gradient-secondary bg-clip-text text-transparent">Me</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A driven innovator and mentor passionate about creating meaningful impact 
            through technology, education, and creative expression.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-6">
            <div className="prose prose-lg text-foreground">
              <p className="text-lg leading-relaxed mb-6">
                I'm Vaibhav Tiwari, a B.Tech IT student with an integrated MBA from IIIT Gwalior, 
                where I combine technical expertise with business acumen to drive innovation. 
                My journey is defined by a unique blend of analytical thinking and creative expression.
              </p>
              
              <p className="text-lg leading-relaxed mb-6">
                From developing AI-driven platforms like <span className="text-secondary font-medium">Sangillence</span> 
                to directing <span className="text-accent font-medium">The Penumbra</span> - the first student film at my institution - 
                I believe in the power of interdisciplinary approaches to solve complex problems.
              </p>

              <p className="text-lg leading-relaxed">
                My passion extends beyond technology into mentorship, where I've successfully guided 
                students from 84th percentile to 99.7th percentile in JEE, ultimately helping them 
                secure admission to prestigious institutions like IIT Patna.
              </p>
            </div>

            <div className="bg-card/30 backdrop-blur-sm rounded-lg p-6 border border-border">
              <h3 className="text-xl font-semibold mb-4 text-secondary">Core Philosophy</h3>
              <p className="text-muted-foreground">
                "Innovation happens at the intersection of disciplines. By combining technology 
                with human understanding, creativity with analytical thinking, we can create 
                solutions that don't just work - they inspire."
              </p>
            </div>
          </div>

          {/* Achievements Grid */}
          <div className="grid grid-cols-2 gap-4">
            {achievements.map((achievement, index) => (
              <Card key={index} className="p-6 bg-gradient-card border-border hover:shadow-card transition-all duration-300 hover:scale-105">
                <achievement.icon className="h-8 w-8 text-secondary mb-4" />
                <h3 className="font-semibold mb-2 text-foreground">{achievement.title}</h3>
                <p className="text-sm text-muted-foreground">{achievement.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;