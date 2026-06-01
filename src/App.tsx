/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Intro from './components/Intro';
import Mechanism from './components/Mechanism';
import Cases from './components/Cases';
import Research from './components/Research';
import ShortVideo from './components/ShortVideo';
import Solution from './components/Solution';

export default function App() {
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'intro', 'mechanism', 'cases', 'research', 'shortvideo', 'solution'];
      let current = 'home';
      
      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const rect = el.getBoundingClientRect();
          // Update the current active section once it scrolls close to the top boundary
          if (rect.top <= 240) {
            current = sectionId;
          }
        }
      }
      setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    // Execute immediately on load to catch current position
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigateToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80; // Height of the floating header
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="font-sans antialiased text-slate-800 bg-white">
      {/* Dynamic Adaptable Floating Navigation */}
      <Navbar activeSection={activeSection} />

      {/* Main Structural Flow */}
      <Hero onNavigate={navigateToSection} />
      <Intro onNavigate={navigateToSection} />
      <Mechanism />
      <Cases />
      <Research />
      <ShortVideo />
      <Solution />
    </div>
  );
}
