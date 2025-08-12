import { Award, Trophy, Medal, Star, Brain, BookOpen, Users, Globe } from "lucide-react";

const Achievements = () => {
  const achievements = [
    {
      icon: Award,
      title: "CBSE Merit Certificate",
      description: "TOP 0.1% in AISSCE 22-23 Computer Science",
      year: "2023",
      category: "Academic Excellence"
    },
    {
      icon: Brain,
      title: "IAT Top 2% & IISER Qualified",
      description: "Secured Top 2% rank in IAT, received offer letters from all IISERs, and qualified for NEST",
      year: "2023",
      category: "Academic Excellence"
    },
    {
      icon: Trophy,
      title: "GDSC Ideathon 2024 Winner",
      description: "Winner for 'Complaint Tracking System' - innovative solution for streamlined grievance management",
      year: "2024",
      category: "Innovation"
    },
    {
      icon: Globe,
      title: "James Dyson Award Entry",
      description: "Eco-Credits: Token-based pollution penalty and incentive model, globally published",
      year: "2025",
      category: "Innovation"
    },
    {
      icon: BookOpen,
      title: "Mathematical Discovery",
      description: "Independently solved 'The Infinite product ratio of all even no. to all odd numbers' - found alternative form of established mathematics",
      year: "2025",
      category: "Research"
    },
    {
      icon: Users,
      title: "Successful Mentorship",
      description: "Mentored Ritesh through drop year: 84% to 99.7% percentile, JEE Advanced AIR 4441, IIT Patna CSE",
      year: "2023-24",
      category: "Mentorship"
    },
    {
      icon: Star,
      title: "Film Director",
      description: "Directed IIIT Gwalior's first-ever movie 'The Penumbra' - conceptualized, shot, edited, and premiered on campus",
      year: "2024",
      category: "Creative"
    }
  ];

  const categories = ["All", "Academic Excellence", "Innovation", "Research", "Mentorship", "Creative"];
  
  return (
    <div className="min-h-screen bg-gradient-hero relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-orb rounded-full blur-xl opacity-70 animate-float"></div>
        <div className="absolute bottom-40 right-20 w-24 h-24 bg-gradient-secondary rounded-full blur-lg opacity-50 animate-float" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="container mx-auto px-4 py-32 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Achievements & <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Recognition</span>
            </h1>
            <p className="text-xl text-purple-200 max-w-3xl mx-auto">
              A journey of academic excellence, innovation, and meaningful impact across multiple domains
            </p>
          </div>

          {/* Achievements Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {achievements.map((achievement, index) => {
              const IconComponent = achievement.icon;
              return (
                <div
                  key={index}
                  className="bg-gradient-card backdrop-blur-sm border border-purple-400/20 rounded-xl p-6 hover:shadow-orb transition-all duration-300 hover:scale-105"
                >
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center flex-shrink-0">
                      <IconComponent className="h-6 w-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-xs px-2 py-1 bg-purple-400/20 text-purple-200 rounded-full">
                          {achievement.category}
                        </span>
                        <span className="text-xs text-purple-300">{achievement.year}</span>
                      </div>
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-semibold text-white mb-3">{achievement.title}</h3>
                  <p className="text-purple-200 text-sm leading-relaxed">{achievement.description}</p>
                </div>
              );
            })}
          </div>

          {/* Stats Section */}
          <div className="mt-20 grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-white mb-2">0.1%</div>
              <div className="text-purple-200 text-sm">Top CBSE Percentile</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-white mb-2">2%</div>
              <div className="text-purple-200 text-sm">IAT Top Rank</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-white mb-2">99.7%</div>
              <div className="text-purple-200 text-sm">Mentee's JEE Percentile</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-white mb-2">1st</div>
              <div className="text-purple-200 text-sm">Movie at IIIT Gwalior</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Achievements;