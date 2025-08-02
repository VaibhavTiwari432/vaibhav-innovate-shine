import { Briefcase, Building, Users, Lightbulb, GraduationCap, Megaphone, BookOpen, Brain } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      icon: Briefcase,
      title: "Product Intern",
      company: "Nani's Bilona Ghee",
      period: "2024",
      description: "Led outreach initiatives and enhanced product visibility through strategic marketing campaigns and customer engagement.",
      skills: ["Product Strategy", "Marketing", "Customer Outreach"]
    },
    {
      icon: Building,
      title: "Project Lead",
      company: "AMR Group (IIITM)",
      period: "2024",
      description: "Led development of Eco-Credits, a blockchain-backed air pollution monitoring & regulatory system for sustainable environmental management.",
      skills: ["Blockchain", "Environmental Tech", "Project Management"]
    },
    {
      icon: GraduationCap,
      title: "Academic Interview Intern",
      company: "Newton School of Technology",
      period: "2024",
      description: "Enhanced admission processes for the new-age institute by assessing, mentoring, and understanding students for overall institutional improvement.",
      skills: ["Interview Assessment", "Mentoring", "Educational Strategy"]
    },
    {
      icon: Megaphone,
      title: "Public Relations Head",
      company: "Infotsav - IIIT Gwalior",
      period: "2023-2024",
      description: "Led PR initiatives for IIIT Gwalior's premier tech fest, managing communications and outreach strategies.",
      skills: ["Public Relations", "Event Management", "Communication"]
    },
    {
      icon: Users,
      title: "District Olympiad Organizer",
      company: "Independent Initiative",
      period: "2023",
      description: "Organized district-level school Olympiad reaching 50+ schools, fostering academic competition and excellence.",
      skills: ["Event Organization", "Educational Outreach", "Leadership"]
    },
    {
      icon: BookOpen,
      title: "Teacher → Executive",
      company: "SGM College Club",
      period: "2022-2024",
      description: "Served underprivileged students for 1 year as teacher, later promoted to executive role for exceptional service and impact.",
      skills: ["Teaching", "Community Service", "Leadership Development"]
    },
    {
      icon: Brain,
      title: "Founder & Researcher",
      company: "Sangillence",
      period: "2024 - Present",
      description: "Currently testing concepts for AI-powered cognitive development platform. Leading SOBO'25: India's First AI-Powered Open Book Olympiad with 10+ schools registered.",
      skills: ["AI Development", "Educational Innovation", "Startup Leadership"]
    },
    {
      icon: Lightbulb,
      title: "Research Collaborator",
      company: "Dr. Rajan Chaudhary",
      period: "2024 - Present",
      description: "Currently working on 'The Unified Theory of Consciousness as an OS' - exploring consciousness through computational frameworks.",
      skills: ["Research", "Consciousness Studies", "Theoretical Framework"]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-hero relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 right-10 w-32 h-32 bg-gradient-orb rounded-full blur-xl opacity-70 animate-float"></div>
        <div className="absolute bottom-40 left-20 w-24 h-24 bg-gradient-secondary rounded-full blur-lg opacity-50 animate-float" style={{ animationDelay: '3s' }}></div>
      </div>

      <div className="container mx-auto px-4 py-32 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Professional <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Experience</span>
            </h1>
            <p className="text-xl text-purple-200 max-w-3xl mx-auto">
              A diverse journey across technology, education, research, and community impact
            </p>
          </div>

          {/* Experience Timeline */}
          <div className="h-96 overflow-y-auto scrollbar-thin scrollbar-track-purple-900/20 scrollbar-thumb-purple-400/40 hover:scrollbar-thumb-purple-400/60 pr-4">
            <div className="space-y-8">
              {experiences.map((experience, index) => {
                const IconComponent = experience.icon;
                return (
                  <div
                    key={index}
                    className="bg-gradient-card backdrop-blur-sm border border-purple-400/20 rounded-xl p-8 hover:shadow-orb transition-all duration-300"
                  >
                    <div className="flex flex-col lg:flex-row gap-6">
                      {/* Icon and Basic Info */}
                      <div className="flex-shrink-0 lg:w-64">
                        <div className="flex items-center gap-4 mb-4">
                          <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center">
                            <IconComponent className="h-6 w-6 text-white" />
                          </div>
                          <div>
                            <h3 className="text-xl font-semibold text-white">{experience.title}</h3>
                            <p className="text-purple-300">{experience.company}</p>
                          </div>
                        </div>
                        <div className="text-sm text-purple-200 bg-purple-400/10 px-3 py-1 rounded-full inline-block">
                          {experience.period}
                        </div>
                      </div>

                      {/* Description and Skills */}
                      <div className="flex-1">
                        <p className="text-purple-200 mb-6 leading-relaxed">
                          {experience.description}
                        </p>
                        
                        <div className="flex flex-wrap gap-2">
                          {experience.skills.map((skill, skillIndex) => (
                            <span
                              key={skillIndex}
                              className="px-3 py-1 bg-gradient-secondary/20 text-purple-300 rounded-full text-sm border border-purple-400/20"
                            >
                              {skill}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Impact Stats */}
          <div className="mt-20 bg-gradient-card backdrop-blur-sm border border-purple-400/20 rounded-xl p-8">
            <h3 className="text-2xl font-bold text-white text-center mb-8">Impact Summary</h3>
            <div className="grid md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-3xl font-bold text-white mb-2">50+</div>
                <div className="text-purple-200 text-sm">Schools Reached</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-white mb-2">500+</div>
                <div className="text-purple-200 text-sm">Students Impacted</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-white mb-2">10+</div>
                <div className="text-purple-200 text-sm">Schools in SOBO'25</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-white mb-2">1</div>
                <div className="text-purple-200 text-sm">IIT Success Story</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;