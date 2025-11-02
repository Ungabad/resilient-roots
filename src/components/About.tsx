import React from 'react';

const About: React.FC = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold text-gray-800 mb-6">Meet Our Founder</h2>
            <h3 className="text-2xl font-semibold text-green-700 mb-4">Jessica Kynaston</h3>
            <p className="text-gray-600 leading-relaxed mb-4">Jessica founded Resilient Roots with a vision: that every person deserves dignity, support, and a genuine opportunity to rebuild their life after incarceration.</p>
            <p className="text-gray-600 leading-relaxed mb-4">With years of experience in trauma-informed care and community organizing, Jessica understands that successful reentry requires more than just resources—it requires compassionate human connection, peer support, and a community that believes in second chances.</p>
            <p className="text-gray-600 leading-relaxed">Through Resilient Roots, Jessica and her team work tirelessly to provide the wraparound support that transforms lives and strengthens our King County community.</p>
          </div>
          <div className="relative">
            <div className="aspect-square rounded-lg overflow-hidden shadow-2xl">
              <img src="https://d64gsuwffb70l.cloudfront.net/6907e8f4379da1835909a334_1762126130200_14dacf80.webp" alt="Community support" className="w-full h-full object-cover" />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-yellow-500 text-gray-900 p-6 rounded-lg shadow-lg max-w-xs">
              <p className="font-semibold text-lg">"Everyone deserves a path forward with dignity and hope."</p>
              <p className="text-sm mt-2">- Jessica Kynaston</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
