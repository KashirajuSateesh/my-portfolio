'use client';

import React, { useState } from 'react';
import Education from './Journey/Education';
import Experience from './Journey/Experience';
import Certificates from './Journey/Certificates';

interface ProfileType {
  titleName: string;
  ProfilePic: string;
  roles: [{ myrole: string }];
  header: string;
  Resume: string;
  About: string;
}

function About({
  profile,
  education,
  experience,
  certificates,
}: {
  profile: ProfileType;
  education: { Education: any[] };
  experience: { Experience: any[] };
  certificates: { Certificate: any[] };
}) {
  const [activeTab, setActiveTab] = useState<'education' | 'experience' | 'certificates'>('education');
  const [showFull, setShowFull] = useState(false);

  const aboutText = profile.About || '';
  const shortText = aboutText.slice(0, 1000) + (aboutText.length > 300 ? '...' : '');

  return (
    <main className="min-h-screen bg-gradient-to-br from-green-200 via-gray-300 to-gray-400 pt-24 px-4">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">
        
        {/* Left - About */}
      <section className="text-left bg-white bg-opacity-60 p-6 rounded-xl shadow-md">
        <h2 className="text-4xl font-bold mb-6 text-gray-800">About Me</h2>
        <p className="text-gray-900 text-lg leading-relaxed whitespace-pre-line">
          {showFull ? aboutText : shortText}
        </p>
        {aboutText.length > 300 && (
          <button
            className="mt-3 text-blue-700 hover:underline text-base font-medium"
            onClick={() => setShowFull(!showFull)}
          >
            {showFull ? 'Show Less' : 'Read More'}
          </button>
        )}
      </section>

        {/* Right - Qualifications */}
        <section className="text-center">
          <h2 className="text-3xl font-bold">Qualifications</h2>
          <p className="text-gray-700">My Personal Journey</p>

          {/* Tabs */}
          <div className="flex justify-center gap-4 mt-6 flex-wrap">
            <button
              onClick={() => setActiveTab('experience')}
              className={`px-4 py-2 rounded-full font-medium transition ${
                activeTab === 'experience' ? 'bg-black text-white' : 'bg-white text-black border'
              }`}
            >
              Experience
            </button>

            <button
              onClick={() => setActiveTab('education')}
              className={`px-4 py-2 rounded-full font-medium transition ${
                activeTab === 'education' ? 'bg-black text-white' : 'bg-white text-black border'
              }`}
            >
              Education
            </button>

            <button
              onClick={() => setActiveTab('certificates')}
              className={`px-4 py-2 rounded-full font-medium transition ${
                activeTab === 'certificates' ? 'bg-black text-white' : 'bg-white text-black border'
              }`}
            >
              Certifications
            </button>
          </div>

          {/* Tab Content */}
          <div className="mt-8 text-left">
            {activeTab === 'education' && <Education data={education.Education} />}
            {activeTab === 'experience' && <Experience data={experience.Experience} />}
            {activeTab === 'certificates' && <Certificates data={certificates.Certificate} />}
          </div>
        </section>
      </div>
    </main>
  );
}

export default About;