import React, { useState, useEffect } from 'react';

const Navigation: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-white shadow-lg py-3" : "bg-transparent py-5"
      }`}
    >
      <div className='max-w-7xl mx-auto px-4 flex justify-between'>
        <div className='flex items-center gap-2'>
          <img
            src='/IMG_0820(1).JPG'
            alt='Resilient Roots Alt logo'
            className='w-12 h-12'
          />
          <button
            onClick={scrollToTop}
            className={`text-xl font-bold transition-colors ${
              scrolled ? "text-green-700" : "text-white"
            }`}
          >
            Resilient Roots
          </button>
        </div>
        <div className='flex gap-6 items-center'>
          <button
            onClick={() => scrollToSection("services")}
            className={`font-medium transition-colors ${
              scrolled
                ? "text-gray-700 hover:text-green-700"
                : "text-white hover:text-yellow-400"
            }`}
          >
            Services
          </button>
          <button
            onClick={() => scrollToSection("contact")}
            className={`px-6 py-2 rounded-lg font-semibold transition-colors ${
              scrolled
                ? "bg-green-700 text-white hover:bg-green-800"
                : "bg-yellow-500 text-gray-900 hover:bg-yellow-400"
            }`}
          >
            Get Support
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
