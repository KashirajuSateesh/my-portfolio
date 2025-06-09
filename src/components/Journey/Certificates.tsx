'use client'
import React, { useState } from 'react';

interface CertificateItem {
  _id: string;
  certificateName: string;
  firmName: string;
  issueDate: string;
  certificateImage: string | null;
}

export default function Certificates({ data }: { data: CertificateItem[] }) {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

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
              <button
                onClick={() => setSelectedImage(cert.certificateImage!)}
                className="mt-3 inline-block px-4 py-1 text-sm text-white bg-yellow-500 hover:bg-yellow-700 rounded"
              >
                View Certificate
              </button>
            )}
          </div>
        ))}
      </div>

      {/* Modal */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="relative bg-white p-4 rounded-lg max-w-3xl w-full">
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-2 right-2 text-black text-xl font-bold"
            >
              ✕
            </button>
            <img
              src={selectedImage}
              alt="Certificate"
              className="w-full h-auto rounded-md"
            />
          </div>
        </div>
      )}
    </section>
  );
}