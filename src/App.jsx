import Header from "./components/Header";
import Hero from "./components/Hero";
import Footer from "./components/Footer";
import SkillsSection from "./components/skills/SkillsSection";
import About from "./components/About";
import ProjectsSection from "./components/projects/ProjectsSection";
import ContactCTA from "./components/ContactCTA";


function App() {
  return (
    <>
      <Header />
      <Hero />
      <About />
      <SkillsSection />
      <ProjectsSection />
      <ContactCTA />
      <Footer />
    </>
  );
}

export default App;
