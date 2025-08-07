import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Download, ExternalLink, Mail, Phone, MapPin, Linkedin, Github } from "lucide-react";

const CV = () => {
  return (
    <div className="min-h-screen pt-20 pb-12">
      {/* Animated background */}
      <div className="relative z-10 container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Curriculum <span className="bg-gradient-secondary bg-clip-text text-transparent">Vitae</span>
          </h1>
          <p className="text-xl text-white/80 max-w-3xl mx-auto mb-8">
            A comprehensive overview of my academic journey, professional experience, and achievements
          </p>
          <Button variant="hero" size="lg" className="mb-8">
            <Download className="mr-2 h-5 w-5" />
            Download PDF CV
          </Button>
        </div>

        <div className="max-w-4xl mx-auto space-y-8">
          {/* Personal Information */}
          <Card className="p-8  border-border">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h2 className="text-3xl font-bold text-white mb-2">Vaibhav Tiwari</h2>
                <p className="text-xl text-purple-200 mb-4">System Thinker & Technologist</p>
                <p className="text-white/80 leading-relaxed">
                  Creative innovator pursuing Integrated B.Tech IT + MBA from IIIT Gwalior. 
                  Passionate about AI, environmental sustainability, and solving societal problems 
                  through systems thinking and technology.
                </p>
              </div>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Mail className="h-5 w-5 text-purple-300" />
                  <span className="text-white">vaibhav.tiwari@iiitm.ac.in</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="h-5 w-5 text-purple-300" />
                  <span className="text-white">+91 98765 43210</span>
                </div>
                <div className="flex items-center space-x-3">
                  <MapPin className="h-5 w-5 text-purple-300" />
                  <span className="text-white">Gwalior, Madhya Pradesh, India</span>
                </div>
                <div className="flex space-x-4 pt-2">
                  <a href="#" className="text-purple-300 hover:text-white transition-colors">
                    <Linkedin className="h-5 w-5" />
                  </a>
                  <a href="#" className="text-purple-300 hover:text-white transition-colors">
                    <Github className="h-5 w-5" />
                  </a>
                </div>
              </div>
            </div>
          </Card>

          {/* Education */}
          <Card className="p-8  border-border">
            <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
              <div className="w-2 h-8 bg-gradient-secondary rounded-full mr-4"></div>
              Education
            </h3>
            <div className="space-y-6">
              <div className="border-l-2 border-purple-400/30 pl-6 pb-6">
                <h4 className="text-xl font-semibold text-white">Integrated B.Tech IT + MBA</h4>
                <p className="text-purple-200">IIIT Gwalior</p>
                <p className="text-white/60">2022 - 2027 (Expected)</p>
                <p className="text-white/80 mt-2">CGPA: 8.7/10</p>
              </div>
              <div className="border-l-2 border-purple-400/30 pl-6">
                <h4 className="text-xl font-semibold text-white">Senior Secondary Education</h4>
                <p className="text-purple-200">CBSE Board</p>
                <p className="text-white/60">2021 - 2022</p>
                <p className="text-white/80 mt-2">Percentage: 95.2% | Top 0.1% in Computer Science</p>
              </div>
            </div>
          </Card>

          {/* Key Projects */}
          <Card className="p-8  border-border">
            <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
              <div className="w-2 h-8 bg-gradient-secondary rounded-full mr-4"></div>
              Key Projects
            </h3>
            <div className="grid gap-6">
              <div className="p-6 bg-white/5 rounded-lg border border-white/10">
                <h4 className="text-lg font-semibold text-white mb-2">Sangillence</h4>
                <p className="text-white/80 mb-3">AI-based cognitive growth and skill enhancement platform for children</p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-purple-500/20 text-purple-200 rounded-full text-sm">AI/ML</span>
                  <span className="px-3 py-1 bg-purple-500/20 text-purple-200 rounded-full text-sm">React</span>
                  <span className="px-3 py-1 bg-purple-500/20 text-purple-200 rounded-full text-sm">Python</span>
                </div>
              </div>
              <div className="p-6 bg-white/5 rounded-lg border border-white/10">
                <h4 className="text-lg font-semibold text-white mb-2">Eco-Credits</h4>
                <p className="text-white/80 mb-3">Blockchain-backed real-time pollution monitoring & token trading system</p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-purple-500/20 text-purple-200 rounded-full text-sm">Blockchain</span>
                  <span className="px-3 py-1 bg-purple-500/20 text-purple-200 rounded-full text-sm">IoT</span>
                  <span className="px-3 py-1 bg-purple-500/20 text-purple-200 rounded-full text-sm">Smart Contracts</span>
                </div>
              </div>
              <div className="p-6 bg-white/5 rounded-lg border border-white/10">
                <h4 className="text-lg font-semibold text-white mb-2">GPS-Based Traffic Management</h4>
                <p className="text-white/80 mb-3">Intelligent ambulance-prioritized traffic light system</p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-purple-500/20 text-purple-200 rounded-full text-sm">IoT</span>
                  <span className="px-3 py-1 bg-purple-500/20 text-purple-200 rounded-full text-sm">GPS</span>
                  <span className="px-3 py-1 bg-purple-500/20 text-purple-200 rounded-full text-sm">System Design</span>
                </div>
              </div>
            </div>
          </Card>

          {/* Skills */}
          <Card className="p-8  border-border">
            <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
              <div className="w-2 h-8 bg-gradient-secondary rounded-full mr-4"></div>
              Technical Skills
            </h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div>
                <h4 className="text-lg font-semibold text-purple-200 mb-3">Programming</h4>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-white/80">Python</span>
                    <span className="text-purple-300">Advanced</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-white/80">JavaScript/TypeScript</span>
                    <span className="text-purple-300">Advanced</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-white/80">C++</span>
                    <span className="text-purple-300">Intermediate</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-white/80">Java</span>
                    <span className="text-purple-300">Intermediate</span>
                  </div>
                </div>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-purple-200 mb-3">Frameworks & Tools</h4>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-white/80">React/Next.js</span>
                    <span className="text-purple-300">Advanced</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-white/80">Node.js</span>
                    <span className="text-purple-300">Intermediate</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-white/80">TensorFlow</span>
                    <span className="text-purple-300">Intermediate</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-white/80">Docker</span>
                    <span className="text-purple-300">Beginner</span>
                  </div>
                </div>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-purple-200 mb-3">Other Skills</h4>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-white/80">System Design</span>
                    <span className="text-purple-300">Advanced</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-white/80">UI/UX Design</span>
                    <span className="text-purple-300">Intermediate</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-white/80">Project Management</span>
                    <span className="text-purple-300">Advanced</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-white/80">Public Speaking</span>
                    <span className="text-purple-300">Advanced</span>
                  </div>
                </div>
              </div>
            </div>
          </Card>

          {/* Languages */}
          <Card className="p-8  border-border">
            <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
              <div className="w-2 h-8 bg-gradient-secondary rounded-full mr-4"></div>
              Languages
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="flex justify-between items-center p-4 bg-white/5 rounded-lg">
                <span className="text-white text-lg">Hindi</span>
                <span className="text-purple-300 font-semibold">Native</span>
              </div>
              <div className="flex justify-between items-center p-4 bg-white/5 rounded-lg">
                <span className="text-white text-lg">English</span>
                <span className="text-purple-300 font-semibold">Fluent</span>
              </div>
            </div>
          </Card>

          {/* Call to Action */}
          <div className="text-center pt-8">
            <p className="text-white/80 mb-6 text-lg">
              Interested in collaboration or want to learn more about my work?
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="hero" size="lg">
                <ExternalLink className="mr-2 h-5 w-5" />
                View Portfolio
              </Button>
              <Button variant="glass" size="lg">
                <Mail className="mr-2 h-5 w-5" />
                Contact Me
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CV;