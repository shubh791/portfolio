import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import SkillsSection from "./components/skills/SkillsSection";
import Services from "./components/services/Services";
import ProjectsSection from "./components/projects/ProjectsSection";
import ContactCTA from "./components/ContactCTA";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Header />
      <Hero />
      <About />
      <SkillsSection />
      <Services />
      <ProjectsSection />
      <ContactCTA />
      <Footer />
    </>
  );
}

export default App;