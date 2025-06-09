import About from "@/components/About";
import Contact from "@/components/Contact";
import Navbar from "@/components/Navbar";
import Profile from "@/components/Profile";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import { getClient } from "@/sanity/lib/client";
import { HOME_QUERY, EDUCATION_QUERY, EXPERIENCE_QUERY, CERTIFICATE_QUERY, FOOTER_QUERY } from "@/sanity/lib/queries";


export const revalidate = 3600;

async function getData() {
  const client = getClient();

  const [homeData, education, experience, certificates, footer] = await Promise.all([
    client.fetch(HOME_QUERY),
    client.fetch(EDUCATION_QUERY),
    client.fetch(EXPERIENCE_QUERY),
    client.fetch(CERTIFICATE_QUERY),
    client.fetch(FOOTER_QUERY),
  ]);
  

  return { ...homeData, education, experience, certificates, footer};
}

export default async function  Home() {
  const {profile, skills, education, experience, certificates, footer} = await getData();
  return (
    // Main
    <main className="min-h-screen bg-gradient-to-br from-green-200 via-gray-300 to-gray-400 pt-24">
      <div><Navbar/></div>

      <div><Profile profile={profile}/></div>

      <div><Skills skills={skills}/></div>

      {/* About section */}
      <div id="about" className="mt-8">
        <About
          profile={profile} 
          education={education}
          experience={experience}
          certificates={certificates}/>
      </div>

      {/* Projects section */}
      <div id="projects" ><Projects/></div>

      {/* Contact section */}
      <div id="contact" ><Contact footer={footer}/></div>
    </main>
  );
}
