import React from "react";

export default function Certificates({ data }: { data: any[] }) {
    if (!Array.isArray(data)) return <p>No certificate data available.</p>;

  return (
    <section className="text-black py-8">
      <h2 className="text-xl font-bold mb-4">📜 Certificates</h2>
      <div className="grid md:grid-cols-2 gap-4">
        {data.map((cert) => (
          <div key={cert._id} className="bg-white shadow-md rounded p-4">
            <h3 className="text-green-700 font-semibold">{cert.certificateName}</h3>
            <p className="text-sm">{cert.firmName}</p>
            <p className="text-sm text-gray-600">
              Issued Date: {cert.issueDate} {cert.expiryDate ? `– ${cert.expiryDate}` : ""}
            </p>
            {cert.link && (
              <a
                href={cert.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 underline mt-2 block"
              >
                View Certificate
              </a>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}