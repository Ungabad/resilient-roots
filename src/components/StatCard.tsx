import React from 'react';

interface StatCardProps {
  number: string;
  label: string;
  icon: React.ReactNode;
}

const StatCard: React.FC<StatCardProps> = ({ number, label, icon }) => {
  return (
    <div className="bg-white rounded-lg p-6 shadow-md text-center hover:shadow-lg transition-shadow">
      <div className="flex justify-center mb-3 text-yellow-600">{icon}</div>
      <div className="text-4xl font-bold text-green-700 mb-2">{number}</div>
      <div className="text-gray-600 font-medium">{label}</div>
    </div>
  );
};

export default StatCard;
