"use client";
import React from "react";

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ title, description, image }) => {
  return (
    <div className="bg-neutral-900 border border-purple-500 text-white rounded-lg shadow-md 
                    w-56 sm:w-48 md:w-52 p-4 hover:shadow-purple-500/40 transition duration-300">
      <img
        src={image}
        alt={title}
        className="w-full h-28 object-cover rounded-md mb-3"
      />
      <h3 className="text-lg font-bold mb-1">{title}</h3>
      <p className="text-xs text-gray-300">{description}</p>
    </div>
  );
};

export default ProjectCard;
