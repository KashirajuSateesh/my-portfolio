import React from 'react';

interface CertificateItem {
  _id: string;
  certificateName: string;
  firmName: string;
  issueDate: string;
  certificateImage: string | null;
}

export default function Certificates({ data }: { data: CertificateItem[] }) {
  return (
    <section className="max-w-4xl mx-auto px-4">
      <h2 className="text-3xl font-bold mb-6 text-gray-800">📜 Certificates</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {data.map((cert) => (
          <div key={cert._id} className="bg-white rounded-xl shadow-md p-4 border-l-4 border-yellow-500">
            <h3 className="text-lg font-semibold text-gray-800">{cert.certificateName}</h3>
            <p className="text-sm text-gray-600">{cert.firmName}</p>
            <p className="text-xs text-gray-500">Issued on: {new Date(cert.issueDate).toDateString()}</p>
            {cert.certificateImage && (
              <img src={cert.certificateImage} alt={cert.certificateName} className="mt-2 w-full h-auto rounded-md" />
            )}
          </div>
        ))}
      </div>
    </section>
  );
}