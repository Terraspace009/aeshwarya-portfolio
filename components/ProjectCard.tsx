'use client';
import React from 'react';

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  demoLink?: string;
  codeLink?: string;
}

export default function ProjectCard({
  title,
  description,
  image,
  demoLink,
  codeLink,
}: ProjectCardProps) {
  return (
    <div className="bg-white/10 backdrop-blur-md rounded-xl shadow-lg overflow-hidden w-full max-w-md mx-auto">
      <img
        src={image}
        alt={title}
        className="w-full h-60 object-cover object-center rounded-t-xl"
      />
      <div className="p-5">
        <h3 className="text-xl font-semibold text-white mb-2">{title}</h3>
        <p className="text-sm text-gray-300 mb-4">{description}</p>
        <div className="flex gap-4">
          {demoLink && (
            <a
              href={demoLink}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 bg-violet-500 text-white rounded hover:bg-violet-600 transition"
            >
              Live Demo
            </a>
          )}
          {codeLink && (
            <a
              href={codeLink}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 border border-white text-white rounded hover:bg-white hover:text-black transition"
            >
              View Code
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
