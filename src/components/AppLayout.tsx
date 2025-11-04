import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Navigation from './Navigation';
import Hero from './Hero';
import Services from './Services';
import About from './About';
import Impact from './Impact';
import Testimonials from './Testimonials';
import Resources from './Resources';
import Contact from './Contact';
import Footer from './Footer';

const AppLayout: React.FC = () => {
  const location = useLocation();

  useEffect(() => {
    // Check for navigation state requesting a scroll target
    const state = (location as any).state;
    const target = state?.scrollTo;
    if (target) {
      // small timeout to ensure DOM is ready
      setTimeout(() => {
        if (target === 'top') {
          window.scrollTo({ top: 0, behavior: 'smooth' });
        } else {
          document.getElementById(target)?.scrollIntoView({ behavior: 'smooth' });
        }
        // Clear the state so subsequent mounts don't re-scroll
        try {
          window.history.replaceState({}, '', window.location.pathname);
        } catch (e) {
          // ignore
        }
      }, 50);
    }
  }, [location]);

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <Hero />
      <Services />
      <About />
      {/* <Impact /> */}
      {/* <Testimonials /> */}
      <Resources />
      <Contact />
      <Footer />
    </div>
  );
};

export default AppLayout;
