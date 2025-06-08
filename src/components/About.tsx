import React from 'react'

import Education from './Journey/Education';
import Experience from './Journey/Experience';
import Certificates from './Journey/Certificates';

interface ProfileType {
  titleName: string;
  ProfilePic: string;
  roles: [{
    myrole: string;
  }];
  header: string;
  Resume: string;
}

function About({
  profile,
  education,
  experience,
  certificates,
}:{
  profile:ProfileType;
  education: { Education: any[] };
  experience: { Experience: any[] };
  certificates: { Certificate: any[] };
}) 
{
  console.log(education, experience, certificates)
  return (
    <main className="min-h-screen bg-gradient-to-br from-green-200 via-gray-300 to-gray-400 pt-24">

      <div id="education" className="mt-8">
        <Education data={education.Education} />
      </div>

      <div id="experience" className="mt-8">
        <Experience data={experience.Experience} />
      </div>

      <div id="certificates" className="mt-8">
        <Certificates data={certificates.Certificate} />
      </div>
    </main>
  )
}

export default About