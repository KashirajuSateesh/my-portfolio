import React from 'react';

interface EducationItem {
  _id: string;
  class: string;
  college: string;
  course: string;
  startYear: number;
  endYear: number;
}

export default function Education({ data }: { data: EducationItem[] }) {
  return (
    <section className="max-w-4xl mx-auto px-4">
      <h2 className="text-3xl font-bold mb-6 text-gray-800">🎓 Education</h2>
      <div className="space-y-6">
        {data.map((edu) => (
          <div key={edu._id} className="bg-white rounded-xl shadow-md p-4 border-l-4 border-green-400">
            <h3 className="text-xl font-semibold text-gray-800">{edu.class} - <span className="text-green-600">{edu.course}</span></h3>
            <p className="text-gray-600">{edu.college}</p>
            <p className="text-sm text-gray-500">{edu.startYear} - {edu.endYear}</p>
          </div>
        ))}
      </div>
    </section>
  );
}