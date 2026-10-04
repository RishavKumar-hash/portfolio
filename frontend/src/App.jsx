import { useState } from "react";
import Header from "./components/layout/Header";
import Hero from "./components/sections/Hero";
import Stats from "./components/sections/Stats";
import About from "./components/sections/About";
import IamPlayground from "./components/sections/IamPlayground";
import Skills from "./components/sections/Skills";
import Experience from "./components/sections/Experience";
import Projects from "./components/sections/Projects";
import Certifications from "./components/sections/Certifications";
import Contact from "./components/sections/Contact";
import Footer from "./components/layout/Footer";
import BackgroundEffects from "./components/ui/BackgroundEffects";
import ScrollProgress from "./components/layout/ScrollProgress";
import BackToTop from "./components/layout/BackToTop";
import CommandPalette from "./components/ui/CommandPalette";
import ProjectDetailModal from "./components/ui/ProjectDetailModal";

export default function App() {
  const [commandOpen, setCommandOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  const openIamSection = () => {
    const el = document.getElementById("iam-demo");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="relative overflow-x-hidden min-h-screen bg-dark text-slate-100 selection:bg-cyan-500/30 selection:text-white">
      <a href="#main-content" className="skip-link">
        Skip to content
      </a>

      <BackgroundEffects />
      <ScrollProgress />

      <Header
        onOpenCommand={() => setCommandOpen(true)}
      />

      <main id="main-content">
        <Hero
          onOpenIam={openIamSection}
        />
        <Stats />
        <About />
        <IamPlayground />
        <Skills />
        <Experience />
        <Projects onSelectProject={(p) => setSelectedProject(p)} />
        <Certifications />
        <Contact />
      </main>

      <Footer />
      <BackToTop />

      {/* Global Interactivity Modals */}
      <CommandPalette
        isOpen={commandOpen}
        onClose={setCommandOpen}
        onOpenIam={openIamSection}
      />

      <ProjectDetailModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </div>
  );
}
