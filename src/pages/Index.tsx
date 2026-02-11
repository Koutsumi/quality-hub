import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Skills from "@/components/Skills";
import CentralQA from "@/components/CentralQA";
import QualityDashboard from "@/components/QualityDashboard";
import Articles from "@/components/Articles";
import Contact from "@/components/Contact";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <Hero />
      <About />
      <Experience />
      <Skills />
      <CentralQA />
      <QualityDashboard />
      <Articles />
      <Contact />
    </div>
  );
};

export default Index;
