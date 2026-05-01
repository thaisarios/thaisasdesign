import CustomCursor from "@/components/CustomCursor";
import HeroSection from "@/components/HeroSection";
import ProjectSection from "@/components/ProjectSection";
import AboutSection from "@/components/AboutSection";
import ProcessSection from "@/components/ProcessSection";
import ContactSection from "@/components/ContactSection";

const Index = () => {
  return (
    <div className="bg-background text-foreground overflow-x-hidden">
      <CustomCursor />
      <HeroSection />
      <ProjectSection />
      <AboutSection />
      <ProcessSection />
      <ContactSection />
    </div>
  );
};

export default Index;
