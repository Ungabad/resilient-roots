import React from 'react';
import TestimonialCard from './TestimonialCard';

const Testimonials: React.FC = () => {
  const testimonials = [
    { quote: 'Resilient Roots gave me hope when I had none. The peer mentors understood my struggles and helped me find my path forward.', name: 'Marcus T.', timeframe: 'Program participant, 2024' },
    { quote: 'I never thought I could get a real job with my record. The employment support team believed in me and connected me with an employer who gave me a chance.', name: 'Sarah L.', timeframe: 'Employed 18 months' },
    { quote: 'The trauma-informed approach made all the difference. I finally felt safe enough to work through my past and build a future.', name: 'David R.', timeframe: 'Program graduate' },
    { quote: 'Finding stable housing seemed impossible. Resilient Roots navigated the system with me and I now have a place to call home.', name: 'Jennifer M.', timeframe: 'Housed 2 years' },
    { quote: 'The legal navigation support helped me understand my rights and successfully seal my record. I can finally move forward.', name: 'Carlos G.', timeframe: 'Record sealed, 2023' },
    { quote: 'This program gave me more than resources—it gave me a community that cares. I am not alone anymore.', name: 'Michelle K.', timeframe: 'Active participant' }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-green-50 to-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Stories of Hope & Resilience</h2>
          <p className="text-xl text-gray-600">Hear from community members who have walked this path</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, idx) => <TestimonialCard key={idx} {...testimonial} />)}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
