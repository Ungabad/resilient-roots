import React from 'react';

interface TestimonialCardProps {
  quote: string;
  name: string;
  timeframe: string;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ quote, name, timeframe }) => {
  return (
    <div className="bg-green-50 rounded-lg p-6 shadow-md border-l-4 border-green-600">
      <div className="text-green-700 text-4xl mb-2">"</div>
      <p className="text-gray-700 italic mb-4 leading-relaxed">{quote}</p>
      <div className="border-t border-green-200 pt-3">
        <p className="font-semibold text-gray-800">{name}</p>
        <p className="text-sm text-gray-600">{timeframe}</p>
      </div>
    </div>
  );
};

export default TestimonialCard;
