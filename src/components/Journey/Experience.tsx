import React from "react";

export default function Experience({ data }: { data: any[] }) {
  if (!Array.isArray(data)) return <p>No experience data available.</p>;

  return (
    <section className="text-black py-8">
      <h2 className="text-xl font-bold mb-4">💼 Experience</h2>
      <div className="grid md:grid-cols-2 gap-4">
        {data.map((exp) => (
          <div key={exp._id} className="bg-white shadow-md rounded p-4">
            <h3 className="text-green-700 font-semibold">{exp.role}</h3>
            <p className="text-sm">{exp.company}</p>
            <p className="text-sm text-gray-600">
                {exp.startDate ? new Date(exp.startDate).getFullYear() : 'N/A'} – {exp.endDate ? new Date(exp.endDate).getFullYear() : 'N/A'}
            </p>
            <p className="text-gray-700 mt-2">{exp.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}