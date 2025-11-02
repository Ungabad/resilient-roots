import React from 'react';
import ResourceCard from './ResourceCard';

const Resources: React.FC = () => {
  const resources = [
    { title: 'Reentry Roadmap Guide', description: 'Step-by-step guide for your first 90 days after release', category: 'Getting Started' },
    { title: 'King County Housing Directory', description: 'Comprehensive list of transitional and permanent housing options', category: 'Housing' },
    { title: 'Employment Rights & Resources', description: 'Know your rights and find fair-chance employers', category: 'Employment' },
    { title: 'Mental Health & Wellness', description: 'Free and low-cost counseling and support groups', category: 'Health' },
    { title: 'Legal Aid Contacts', description: 'Pro bono legal services and rights restoration information', category: 'Legal' },
    { title: 'Education & Training Programs', description: 'GED, vocational training, and scholarship opportunities', category: 'Education' },
    { title: 'Family Reunification Support', description: 'Resources for rebuilding family relationships', category: 'Family' },
    { title: 'Financial Literacy Workshop', description: 'Budgeting, banking, and credit rebuilding basics', category: 'Financial' },
    { title: 'Transportation Assistance', description: 'Bus passes, ride programs, and vehicle resources', category: 'Transportation' },
    { title: 'Healthcare Navigation', description: 'Medicaid enrollment and healthcare provider directory', category: 'Health' }
  ];

  const handleDownload = (title: string) => {
    alert(`Downloading: ${title}`);
  };

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Resource Hub</h2>
          <p className="text-xl text-gray-600">Free downloadable guides and King County resources</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {resources.map((resource, idx) => <ResourceCard key={idx} {...resource} onClick={() => handleDownload(resource.title)} />)}
        </div>
      </div>
    </section>
  );
};

export default Resources;
