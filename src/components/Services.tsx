import React from 'react';
import ServiceCard from './ServiceCard';

const Services: React.FC = () => {
  const services = [
    { title: 'Peer Mentorship', description: 'Connect with trained peers who understand your journey and provide compassionate guidance.', image: 'https://d64gsuwffb70l.cloudfront.net/6907e8f4379da1835909a334_1762126127964_5d53b53b.webp', icon: <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" /></svg> },
    { title: 'Employment Support', description: 'Job readiness training, resume building, and connections to employers who believe in second chances.', image: 'https://d64gsuwffb70l.cloudfront.net/6907e8f4379da1835909a334_1762126126244_4e43b157.webp', icon: <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg> },
    { title: 'Trauma-Informed Counseling', description: 'Safe, confidential support addressing trauma, addiction, and mental health with dignity.', image: 'https://d64gsuwffb70l.cloudfront.net/6907e8f4379da1835909a334_1762126125518_335ef4d2.webp', icon: <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" /></svg> },
    { title: 'Housing Assistance', description: 'Navigate housing applications, connect with transitional programs, and secure stable living.', image: 'https://d64gsuwffb70l.cloudfront.net/6907e8f4379da1835909a334_1762126129444_572f700f.webp', icon: <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" /></svg> },
    { title: 'Education & Skills', description: 'GED preparation, vocational training, and pathways to continuing education.', image: 'https://d64gsuwffb70l.cloudfront.net/6907e8f4379da1835909a334_1762126126964_1948364a.webp', icon: <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" /></svg> },
    { title: 'Legal Navigation', description: 'Guidance on rights restoration, record sealing, and navigating the legal system.', image: 'https://d64gsuwffb70l.cloudfront.net/6907e8f4379da1835909a334_1762126128709_88b33fac.webp', icon: <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" /></svg> }
  ];

  return (
    <section id="services" className="py-20 bg-gradient-to-b from-white to-green-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">Our Support Services</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">Comprehensive, trauma-informed support designed to empower your successful reentry</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, idx) => <ServiceCard key={idx} {...service} />)}
        </div>
      </div>
    </section>
  );
};

export default Services;
