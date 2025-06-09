import Link from 'next/link';
import Image from 'next/image';
import React from 'react';

type Project = {
  _id: string;
  slug?: { current: string };
  imgUrl: string;
  title: string;
  description: string;
};

const ProjectCard = ({ proj }: { proj: Project }) => {
  return (
    <Link
      key={proj._id}
      href={`/projects/${proj.slug?.current}`}
      className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300"
    >
      <div className="bg-white rounded-4xl">
        {proj.imgUrl && (
          <Image
            src={proj.imgUrl}
            alt={proj.title}
            width={400}
            height={400}
            className="object-cover w-full h-60"
          />
        )}
        <div className="p-4">
          <h2 className="text-xl font-semibold text-gray-800 mb-2">
            {proj.title}
          </h2>
          <p className="text-sm text-gray-600 line-clamp-2">{proj.description}</p>
        </div>
      </div>
    </Link>
  );
};

export default ProjectCard;