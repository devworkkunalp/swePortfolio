import React, { useState, useEffect, useRef } from 'react';
import Header from './components/Header';
import Navigation from './components/Navigation';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import SkillsSection from './components/SkillsSection';
import ProjectsSection from './components/ProjectsSection';
import ContactSection from './components/ContactSection';

export default function App() {
  const [activeSection, setActiveSection] = useState(0);
  const containerRef = useRef(null);

  // Use Intersection Observer to determine which section is active for the side nav
  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;
      
      const container = containerRef.current;
      const scrollPosition = container.scrollTop;
      const windowHeight = window.innerHeight;
      
      // Calculate which section is most in view
      const activeIndex = Math.round(scrollPosition / windowHeight);
      setActiveSection(activeIndex);
    };

    const container = containerRef.current;
    if (container) {
      container.addEventListener('scroll', handleScroll, { passive: true });
    }

    return () => {
      if (container) {
        container.removeEventListener('scroll', handleScroll);
      }
    };
  }, []);

  return (
    <>
      <div className="dot-pattern" />
      
      <Header />
      <Navigation activeSection={activeSection} totalSections={5} />
      
      <main 
        ref={containerRef}
        id="main-scroll-container" 
        className="scroll-container"
      >
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <ContactSection />
      </main>
    </>
  );
}
