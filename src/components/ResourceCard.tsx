import React from 'react';

interface ResourceCardProps {
  title: string;
  description: string;
  category: string;
  onClick: () => void;
}

const ResourceCard: React.FC<ResourceCardProps> = ({ title, description, category, onClick }) => {
  return (
    <div className="bg-white rounded-lg p-5 shadow-md hover:shadow-lg transition-all cursor-pointer border-l-4 border-yellow-500" onClick={onClick}>
      <div className="text-xs font-semibold text-yellow-700 uppercase mb-2">{category}</div>
      <h4 className="text-lg font-semibold text-gray-800 mb-2">{title}</h4>
      <p className="text-gray-600 text-sm mb-3">{description}</p>
      <button className="text-green-700 font-medium text-sm hover:text-green-800">Download Resource →</button>
    </div>
  );
};

export default ResourceCard;
