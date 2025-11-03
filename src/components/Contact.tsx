import React from 'react';
import ContactForm from './ContactForm';

const Contact: React.FC = () => {
  return (
    <section
      id='contact'
      className='py-20 bg-gradient-to-b from-green-50 to-green-100'
    >
      <div className='max-w-7xl mx-auto px-4'>
        <div className='text-center mb-12'>
          <h2 className='text-4xl font-bold text-gray-800 mb-4'>
            Get Support Today
          </h2>
          <p className='text-xl text-gray-600'>
            We're here to help. Reach out anytime.
          </p>
        </div>
        <div className='grid md:grid-cols-2 gap-12 max-w-5xl mx-auto'>
          <div>
            <h3 className='text-2xl font-semibold text-gray-800 mb-6'>
              Contact Information
            </h3>
            <div className='space-y-4 mb-8'>
              <div className='flex items-start'>
                <svg
                  className='w-6 h-6 text-green-700 mr-3 mt-1'
                  fill='none'
                  stroke='currentColor'
                  viewBox='0 0 24 24'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth={2}
                    d='M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z'
                  />
                </svg>
                <div>
                  <p className='font-semibold text-gray-800'>
                    24/7 Crisis Line
                  </p>
                  <p className='text-gray-600'>1-866-427-4747</p>
                </div>
              </div>
              <div className='flex items-start'>
                <svg
                  className='w-6 h-6 text-green-700 mr-3 mt-1'
                  fill='none'
                  stroke='currentColor'
                  viewBox='0 0 24 24'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth={2}
                    d='M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z'
                  />
                </svg>
                <div>
                  <p className='font-semibold text-gray-800'>Email</p>
                  <p className='text-gray-600'>jessica@vault89.com</p>
                </div>
              </div>
              <div className='flex items-start'>
                <svg
                  className='w-6 h-6 text-green-700 mr-3 mt-1'
                  fill='none'
                  stroke='currentColor'
                  viewBox='0 0 24 24'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth={2}
                    d='M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z'
                  />
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth={2}
                    d='M15 11a3 3 0 11-6 0 3 3 0 016 0z'
                  />
                </svg>
                <div>
                  <p className='font-semibold text-gray-800'>Office</p>
                  <p className='text-gray-600'>Seattle, King County, WA</p>
                </div>
              </div>
            </div>
            <div className='bg-yellow-100 border-l-4 border-yellow-500 p-4 rounded'>
              <p className='font-semibold text-gray-800 mb-1'>
                Crisis Support Available
              </p>
              <p className='text-sm text-gray-700'>
                If you're in crisis, call the 24/7 line at 1-866-427-4747
              </p>
            </div>
          </div>
          <div className='bg-white p-8 rounded-lg shadow-lg'>
            <h3 className='text-2xl font-semibold text-gray-800 mb-6'>
              Send Us a Message
            </h3>
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
