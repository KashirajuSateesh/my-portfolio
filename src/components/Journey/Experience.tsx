import React from 'react';

interface ExperienceItem {
  _id: string;
  company: string;
  role: string;
  startDate: string;
  endDate: string;
  country: string;
  state: string;
}

export default function Experience({ data }: { data: ExperienceItem[] }) {
  return (
    <section className="max-w-4xl mx-auto px-4">
      <h2 className="text-3xl font-bold mb-6 text-gray-800">💼 Experience</h2>
      <div className="space-y-6">
        {data.map((exp) => (
          <div key={exp._id} className="bg-white rounded-xl shadow-md p-4 border-l-4 border-blue-500">
            <h3 className="text-xl font-semibold text-gray-800">{exp.role} @ <span className="text-blue-600">{exp.company}</span></h3>
            <p className="text-gray-600">{exp.state}, {exp.country}</p>
            <p className="text-sm text-gray-500">{new Date(exp.startDate).toLocaleDateString()} - {new Date(exp.endDate).toLocaleDateString()}</p>
          </div>
        ))}
      </div>
    </section>
  );
}