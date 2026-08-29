import React from 'react';
import { MotionConfig } from 'framer-motion';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import TechStack from './components/TechStack';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    // reducedMotion="user" hands the whole page over to the OS setting.
    <MotionConfig reducedMotion="user">
      <div className="min-h-screen bg-ink-950">
        <Navbar />
        <main>
          <Hero />
          <About />
          <Services />
          <TechStack />
          <Projects />
          <Contact />
        </main>
        <Footer />
      </div>
    </MotionConfig>
  );
}

export default App;
