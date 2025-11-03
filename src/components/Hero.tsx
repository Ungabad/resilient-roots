import React from 'react';
import { useNavigate } from 'react-router-dom';

const Hero: React.FC = () => {
  const navigate = useNavigate();
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToServices = () => {
    document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="relative h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img src="https://d64gsuwffb70l.cloudfront.net/6907e8f4379da1835909a334_1762126124707_fda12f63.webp" alt="Forest path" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/60"></div>
      </div>
      <div className="relative z-10 text-center px-4 max-w-5xl">
        <img src="https://d64gsuwffb70l.cloudfront.net/683517a33f1200aec6678d2a_1762126040208_c7c48b77.JPG" alt="Resilient Roots" className="mx-auto mb-8 max-w-2xl w-full" />
        <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-2xl mx-auto">Trauma-informed peer support for individuals reentering society in King County, WA</p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button onClick={scrollToContact} className="bg-yellow-500 text-gray-900 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-yellow-400 transition-colors shadow-lg">Get Support Now</button>
          <button onClick={scrollToServices} className="bg-white/10 backdrop-blur-sm text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white/20 transition-colors border-2 border-white/50">Learn More</button>
          <button onClick={() => navigate("/donate")} className="bg-green-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-green-700 transition-colors shadow-lg">Support Our Mission</button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
