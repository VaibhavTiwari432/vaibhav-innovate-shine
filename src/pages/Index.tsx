import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import PortfolioSection from "@/components/PortfolioSection";
import ServicesSection from "@/components/ServicesSection";
import SkillsSection from "@/components/SkillsSection";
import MentorshipSection from "@/components/MentorshipSection";

import Footer from "@/components/Footer";
import Projects from "./Projects";
import Achievements from "./Achievements";
import Experience from "./Experience";
import CV from "./CV";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">

      <Projects />
      <section id="projects" className="min-h-screen bg-card py-20 border-t-4 border-primary">
        <Projects />
      </section>

      <section id="achievements" className="min-h-screen bg-card py-20 border-t-4 border-primary">
        <Achievements />
      </section>

      <section id="experience" className="min-h-screen bg-background py-20 border-t-4 border-secondary">
        <Experience />
      </section>

      <section id="cv" className="min-h-screen bg-card py-20 border-t-4 border-accent">
        <CV />
      </section>


    </div>
  );
};

export default Index;
