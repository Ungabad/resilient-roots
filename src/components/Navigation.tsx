import React, { useState, useEffect, useRef } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

const Navigation: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement | null>(null);
  const buttonRef = useRef<HTMLButtonElement | null>(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  // Navigate to root and request a scroll target via location.state when not on the main page
  const goToSection = (id: string) => {
    if (location.pathname === '/') {
      if (id === 'top') {
        window.scrollTo({ top: 0, behavior: 'smooth' });
        return;
      }
      scrollToSection(id);
      return;
    }

    navigate('/', { state: { scrollTo: id } });
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const closeAnd = (fn: () => void) => {
    setMenuOpen(false);
    fn();
  }

  // Close menu when clicking outside (works for mobile dropdown)
  useEffect(() => {
    const handleDocClick = (e: MouseEvent) => {
      if (!menuOpen) return;
      const target = e.target as Node;
      if (menuRef.current && menuRef.current.contains(target)) return;
      if (buttonRef.current && buttonRef.current.contains(target)) return;
      setMenuOpen(false);
    };

    document.addEventListener('mousedown', handleDocClick);
    return () => document.removeEventListener('mousedown', handleDocClick);
  }, [menuOpen]);

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
        {/* Desktop links */}
        <div className='hidden md:flex gap-6 items-center'>
          <button
            onClick={() => goToSection("services")}
            className={`font-medium transition-colors ${
              scrolled
                ? "text-gray-700 hover:text-green-700"
                : "text-white hover:text-yellow-400"
            }`}
          >
            Services
          </button>
          <button
            onClick={() => navigate("/donate")}
            className={`font-medium transition-colors ${
              scrolled
                ? "text-gray-700 hover:text-green-700"
                : "text-white hover:text-yellow-400"
            }`}
          >
            Donate
          </button>
          <button
            onClick={() => goToSection("contact")}
            className={`px-6 py-2 rounded-lg font-semibold transition-colors ${
              scrolled
                ? "bg-green-700 text-white hover:bg-green-800"
                : "bg-yellow-500 text-gray-900 hover:bg-yellow-400"
            }`}
          >
            Get Support
          </button>
        </div>

        {/* Mobile: hamburger */}
        <div className='md:hidden flex items-center'>
          <button
            ref={buttonRef}
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            onClick={() => setMenuOpen(!menuOpen)}
            className={`p-2 rounded-md focus:outline-none ${scrolled ? 'text-green-700' : 'text-white'}`}
          >
            {/* simple hamburger icon */}
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M3 6h18M3 12h18M3 18h18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>

          {/* keep in DOM so we can animate open/close; pointer-events toggled */}
          <div
            ref={menuRef}
            className={`absolute right-4 top-16 z-50 w-48 rounded-lg py-2 transform transition-all duration-200 origin-top-right ${
              scrolled ? 'shadow-lg' : 'shadow-none'
            } ${menuOpen ? 'opacity-100 scale-100 pointer-events-auto' : 'opacity-0 scale-95 pointer-events-none'}`}
            style={{
              background: scrolled ? undefined : 'linear-gradient(180deg, rgba(0,0,0,0.7), rgba(0,0,0,0.6))'
            }}
          >
            <button onClick={() => closeAnd(() => goToSection('top'))} className={`w-full text-left px-4 py-2 text-sm font-medium ${scrolled ? 'text-gray-700 hover:bg-gray-100' : 'text-white hover:bg-white/10'}`}>Resilient Roots</button>
            <button onClick={() => closeAnd(() => goToSection('services'))} className={`w-full text-left px-4 py-2 text-sm ${scrolled ? 'text-gray-700 hover:bg-gray-100' : 'text-white hover:bg-white/10'}`}>Services</button>
            <button onClick={() => closeAnd(() => navigate('/donate'))} className={`w-full text-left px-4 py-2 text-sm ${scrolled ? 'text-gray-700 hover:bg-gray-100' : 'text-white hover:bg-white/10'}`}>Donate</button>
            <button onClick={() => closeAnd(() => goToSection('contact'))} className={`w-full text-left px-4 py-2 text-sm ${scrolled ? 'text-gray-700 hover:bg-gray-100' : 'text-white hover:bg-white/10'}`}>Get Support</button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
