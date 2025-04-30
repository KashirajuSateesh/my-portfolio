import About from "@/components/About";
import Contact from "@/components/Contact";
import Navbar from "@/components/Navbar";
import Profile from "@/components/Profile";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import { getClient } from "@/sanity/lib/client";
import { HOME_QUERY } from "@/sanity/lib/queries";


export const revalidate = 3600;

async function getData() {
  const client = getClient();
  const data = await client.fetch(HOME_QUERY);
  console.log(data.tools)
  return data;
}

export default async function  Home() {
  const {profile, skills, tools} = await getData();
  return (
    // Main
    <main className="min-h-screen bg-gradient-to-br from-green-200 via-gray-300 to-gray-400 pt-24">
      <div><Navbar/></div>

      <div><Profile profile={profile}/></div>

      <div><Skills skills={skills} tools={tools}/></div>

      {/* About section */}
      <div id="about" className="mt-8"><About/></div>

      {/* Projects section */}
      <div id="projects" className="mt-8"><Projects/></div>

      {/* Contact section */}
      <div id="contact" className="mt-8"><Contact/></div>
    </main>
  );
}
