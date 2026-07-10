import Header from "./components/Header";
import Hero from "./components/Hero";
import Stats from "./components/Stats";
import About from "./components/About";
import Skills from "./components/Skills";
import Certifications from "./components/Certifications";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import BackgroundEffects from "./components/BackgroundEffects";
import ScrollProgress from "./components/ScrollProgress";
import BackToTop from "./components/BackToTop";

export default function App() {
  return (
    <div className="relative overflow-x-hidden">
      <a href="#main-content" className="skip-link">
        Skip to content
      </a>
      <BackgroundEffects />
      <ScrollProgress />
      <Header />
      <main id="main-content">
        <Hero />
        <Stats />
        <About />
        <Skills />
        <Certifications />
        <Experience />
        <Projects />
        <Contact />
      </main>
      <Footer />
      <BackToTop />
    </div>
  );
}
