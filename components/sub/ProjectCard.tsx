"use client";

import Image from "next/image";
import React from "react";

interface Props {
  src: string;
  title: string;
  description: string;
  techStack: string[];
}

const ProjectCard = ({
  src,
  title,
  description,
  
}: Props) => {
  return (
    <button
      className="flex flex-col text-justify max-w-[460px] md:min-h-[70vh] relative project-primary overflow-hidden rounded-lg shadow-inner shadow-md shadow-[#a2790d] bg-[#03001417]"
    >
      <Image
        src={src}
        alt={title}
        width={1200}
        height={1200}
        className="md:max-h-[240px] md:min-h-[240px] w-full object-cover"
      />

      <div className="relative p-4">
        <h1 className="text-2xl font-semibold text-white">{title}</h1>
        <p className="mt-2 text-gray-400 ">{description}</p>
        {/* <span className="text-gray-400 mt-3">Tech Stack:</span>
        <div className="flex flex-col md:flex-row gap-2 mt-4">
          <div className="flex flex-row md:gap-2 gap-2">
            {techStack.map((tech, index) => (
              <div key={index}>
                <span className="block md:hidden text-gray-400">{tech}</span>
                <span className="hidden md:block text-gray-400">{tech}</span>
              </div>
            ))}
          </div>
        </div> */}
      </div>
    </button>
  );
};

export default ProjectCard;