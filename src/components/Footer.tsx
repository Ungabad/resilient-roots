import React from 'react';

const Footer: React.FC = () => {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className='bg-gray-900 text-white py-12'>
      <div className='max-w-7xl mx-auto px-4'>
        {/* <div className='grid md:grid-cols-4 gap-8 mb-8'>
          <div>
            <h4 className='text-lg font-semibold mb-4 text-yellow-500'>
              Resilient Roots
            </h4>
            <p className='text-gray-400 text-sm'>
              Supporting recovery, empowering lives in King County, WA
            </p>
          </div>
          <div>
            <h4 className='text-lg font-semibold mb-4'>Quick Links</h4>
            <ul className='space-y-2 text-sm'>
              <li>
                <button
                  onClick={() => scrollToSection("services")}
                  className='text-gray-400 hover:text-white transition-colors'
                >
                  Services
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("contact")}
                  className='text-gray-400 hover:text-white transition-colors'
                >
                  Get Support
                </button>
              </li>
              <li>
                <a
                  href='#'
                  className='text-gray-400 hover:text-white transition-colors'
                >
                  Volunteer
                </a>
              </li>
              <li>
                <a
                  href='#'
                  className='text-gray-400 hover:text-white transition-colors'
                >
                  Donate
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className='text-lg font-semibold mb-4'>Resources</h4>
            <ul className='space-y-2 text-sm'>
              <li>
                <a
                  href='#'
                  className='text-gray-400 hover:text-white transition-colors'
                >
                  Reentry Guide
                </a>
              </li>
              <li>
                <a
                  href='#'
                  className='text-gray-400 hover:text-white transition-colors'
                >
                  Partner Organizations
                </a>
              </li>
              <li>
                <a
                  href='#'
                  className='text-gray-400 hover:text-white transition-colors'
                >
                  Crisis Support
                </a>
              </li>
              <li>
                <a
                  href='#'
                  className='text-gray-400 hover:text-white transition-colors'
                >
                  FAQ
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className='text-lg font-semibold mb-4'>Contact</h4>
            <ul className='space-y-2 text-sm text-gray-400'>
              <li>jessica@vault89.com</li>
            </ul>
          </div>
        </div> */}
        <div className='border-t border-gray-800 pt-8 text-center text-sm text-gray-400'>
          <p>
            &copy; 2025 Resilient Roots. All rights reserved. A 501(c)(3)
            nonprofit organization.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
