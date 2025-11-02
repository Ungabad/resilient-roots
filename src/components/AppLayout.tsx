import React from 'react';
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
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <Hero />
      <Services />
      <About />
      <Impact />
      <Testimonials />
      <Resources />
      <Contact />
      <Footer />
    </div>
  );
};

export default AppLayout;
