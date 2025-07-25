import { Button } from "@/components/ui/button";
import { ArrowRight, Calendar, GraduationCap, Target } from "lucide-react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="min-h-screen bg-gradient-hero">
      {/* Hero Section */}
      <section className="container mx-auto px-4 pt-32 pb-20">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-primary mb-6">
            Vaibhav Tiwari
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 font-medium">
            Creating, Connecting, Contributing
          </p>
          <p className="text-lg text-foreground max-w-3xl mx-auto mb-12 leading-relaxed">
            A system thinker, technologist, and creative innovator focused on societal problem-solving 
            using systems thinking, technology, and creativity. Currently pursuing an Integrated B.Tech IT + MBA 
            from IIIT Gwalior.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Link to="/projects">
              <Button size="lg" className="group">
                Explore Projects
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
            <Link to="/contact">
              <Button variant="outline" size="lg">
                Get In Touch
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Journey Timeline */}
      <section className="bg-background py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-primary mb-12">My Journey</h2>
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-card p-6 rounded-lg shadow-card border border-border hover:shadow-elegant transition-shadow">
                <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center mb-4">
                  <GraduationCap className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-foreground">Education</h3>
                <p className="text-muted-foreground">
                  Integrated B.Tech IT + MBA from IIIT Gwalior, combining technical expertise with business acumen.
                </p>
              </div>
              
              <div className="bg-card p-6 rounded-lg shadow-card border border-border hover:shadow-elegant transition-shadow">
                <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center mb-4">
                  <Calendar className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-foreground">Present</h3>
                <p className="text-muted-foreground">
                  Working on innovative projects in AI, environmental sustainability, and creative expression.
                </p>
              </div>
              
              <div className="bg-card p-6 rounded-lg shadow-card border border-border hover:shadow-elegant transition-shadow">
                <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center mb-4">
                  <Target className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-foreground">Goals</h3>
                <p className="text-muted-foreground">
                  Building solutions that create meaningful impact on society through technology and innovation.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;