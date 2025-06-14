import { getClient } from "@/sanity/lib/client";
import { PROJECT_QUERY } from "@/sanity/lib/queries";
import Navbar from '@/components/Navbar';
import Contact from '@/components/Contact';
import { FOOTER_QUERY } from '@/sanity/lib/queries';



export const revalidate = 3600;

async function getData(slug: string) {
  const client = getClient();
  const data = await client.fetch(PROJECT_QUERY, {slug});
  const footer = await client.fetch(FOOTER_QUERY);
  return {...data, footer};
}

export default async function Project({params}:{params: Promise<{slug: string}>}) {
  const {slug} = await params;
  const {project, footer} = await getData(slug);
  

  return (
    <div>
        <div className="min-h-screen flex flex-col bg-gradient-to-br from-green-200 via-gray-300 to-gray-400">
            <Navbar/>

            <div className="max-w-4xl mx-auto w-full px-4 pt-24 flex-grow space-y-10">
              <div>
                <h1 className="text-4xl font-bold mb-2">{project?.title}</h1>
                <p className="text-gray-700 text-lg">{project?.shortdescription}</p>
              </div>

              {project?.imgUrl && (
                <img
                  src={project.imgUrl}
                  alt={project?.title}
                  className="rounded-lg w-full max-h-[400px] object-cover"
                />
              )}

              {project?.description && (
                <section>
                  <h2 className="text-2xl font-semibold mb-2">Description</h2>
                  <p className="text-gray-800">{project.description}</p>
                </section>
              )}

              {project?.Tech && Array.isArray(project.Tech) && (
                <section>
                  <h2 className="text-2xl font-semibold mb-2">🔧 Tech Stack</h2>
                  <ul className="list-disc list-inside text-gray-700 space-y-1">
                    {project.Tech.map((tech: string, index: number) => (
                      <li key={index}>{tech}</li>
                    ))}
                  </ul>
                </section>
              )}

              {project?.objective && (
                <section>
                  <h2 className="text-2xl font-semibold mb-2">🎯 Objective</h2>
                  <p className="text-gray-800">{project.objective}</p>
                </section>
              )}

              {project?.features && Array.isArray(project.features) && (
                <section>
                  <h2 className="text-2xl font-semibold mb-2">🚀 Features</h2>
                  <ul className="list-disc list-inside space-y-1 text-gray-700">
                    {project.features.map((feature: string, index: number) => (
                      <li key={index}>{feature}</li>
                    ))}
                  </ul>
                </section>
              )}

              {project?.challenges && (
                <section>
                  <h2 className="text-2xl font-semibold mb-2">🧠 Challenges</h2>
                  <p className="text-gray-800">{project.challenges}</p>
                </section>
              )}

              {project?.learnings && (
                <section>
                  <h2 className="text-2xl font-semibold mb-2">🧠 Learnings</h2>
                  <p className="text-gray-800">{project.learnings}</p>
                </section>
              )}

              {project?.futureImprovements && (
                <section>
                  <h2 className="text-2xl font-semibold mb-2">📘 Future Improvements</h2>
                  <p className="text-gray-800">{project.futureImprovements}</p>
                </section>
              )}

              {project?.screenshots && Array.isArray(project.screenshots) && (
                <section>
                  <h2 className="text-2xl font-semibold mb-4">💡 Visual Walkthrough</h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {project.screenshots.map((url: string, index: number) => (
                      <img
                        key={index}
                        src={url}
                        alt={`Screenshot ${index + 1}`}
                        className="rounded shadow-md w-full transform transition-transform duration-300 hover:scale-105 hover:shadow-lg"
                      />
                    ))}
                  </div>
                </section>
              )}

              {(project?.link || project?.repo) && (
              <div className="flex flex-wrap gap-4 mt-4">
                {project?.link && (
                  <a
                    href={project.link}
                    target="_blank"
                    className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
                  >
                    Live Project
                  </a>
                )}
                {project?.repo && (
                  <a
                    href={project.repo}
                    target="_blank"
                    className="bg-gray-800 text-white px-4 py-2 rounded hover:bg-gray-900"
                  >
                    GitHub Repo
                  </a>
                )}
          </div>
        )}
        </div>

        {/* ✅ Contact Footer */}
        <div className="w-full">
          <Contact footer={footer} />
        </div>
      </div>
    </div>
  )
}
