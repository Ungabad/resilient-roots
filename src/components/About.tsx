import React from 'react';

const About: React.FC = () => {
  return (
    <section className='py-20 bg-white'>
      <div className='max-w-7xl mx-auto px-4'>
        <div className='grid md:grid-cols-2 gap-12 items-center'>
          <div>
            <h2 className='text-4xl font-bold text-gray-800 mb-6'>
              Meet Our Founder
            </h2>
            <h3 className='text-2xl font-semibold text-green-700 mb-4'>
              Jessica Kynaston
            </h3>
            <p className='text-gray-600 leading-relaxed mb-4'>
              After being incarcerated, Jessica reentered the world and faced
              the same walls so many of us do: the desperate search for housing,
              the closed doors for employment, and the deep, unaddressed trauma
              that the system creates but doesn't heal. But instead of being
              defeated, she became a certified peer counselor and transformed
              her entire journey into a lifeline for others. She didn't just see
              the gaps in services for returning citizens; she had lived in
              them. And that firsthand experience is what fueled her to build a
              real solution. When Jessica speaks about Resilient Roots, you
              understand immediately that this is more than a service—it's her
              mission. She leads with a powerful combination of raw credibility,
              deep compassion, and professional training that you simply can't
              get from a textbook. She's been where her clients are, and that’s
              the source of her unique ability to guide people toward their own
              transformation.
            </p>
            <p className='text-gray-600 leading-relaxed mb-4'>
              Resilient Roots is a reflection of Jessica's core belief: that
              lived experience is not a liability, but our most powerful and
              necessary tool for inspiring lasting change. The organization's
              very foundation is built on the principles that saved her: the
              absolute necessity of trauma-informed care, the practice of true
              empowerment, and the commitment to mutual accountability. Her
              mission is clear: to empower individuals with the essential tools
              for housing, healing, and hope. Her vision is the world she fights
              for every day: one where returning citizens are met with support,
              not barriers.
            </p>
            <p className='text-gray-600 leading-relaxed'>
              Jessica’s life is the proof of concept. With her unwavering
              leadership, a clear path forward, and a heart that truly
              understands the struggle, Resilient Roots isn't just ready to make
              a difference—it's already creating a healing-centered movement,
              rooted in truth and the power of a lived experience.
            </p>
          </div>
          <div className='relative'>
            <div className='aspect-square rounded-lg overflow-hidden shadow-2xl w-3/4'>
              <img
                src='/jessica_1.jpg'
                alt='Community support'
                className='w-full h-full object-cover'
              />
            </div>
            <div className='absolute -bottom-1 -left-1 bg-yellow-500 text-gray-900 p-2 rounded-lg shadow-lg max-w-xs'>
              <p className='font-semibold text-lg'>
                "Everyone deserves a path forward with dignity and hope."
              </p>
              <p className='text-sm mt-2'>- Jessica Kynaston</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
