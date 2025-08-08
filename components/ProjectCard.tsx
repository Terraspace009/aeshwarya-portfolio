'use client';
import React from 'react';

type ProjectCardProps = {
  title: string;
  description: string;
  image: string; // path in /public, e.g. /projects/one.png
};

export default function ProjectCard({ title, description, image }: ProjectCardProps) {
  return (
    <article
      className="bg-neutral-900/70 border border-purple-500/40 rounded-xl overflow-hidden
                 shadow-lg hover:shadow-purple-500/30 transition duration-300"
    >
      <img
        src={image}
        alt={title}
        className="w-full h-40 object-cover object-center"
        loading="lazy"
        decoding="async"
      />
      <div className="p-4">
        <h3 className="text-lg font-semibold">{title}</h3>
        <p className="mt-2 text-sm text-neutral-300 line-clamp-3">{description}</p>
      </div>
    </article>
  );
}
