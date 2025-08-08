'use client';
import Image from 'next/image';

export type ProjectCardProps = {
  title: string;
  description: string;
  image: string;          // e.g. "/projects/one.png"
  codeLink?: string;
  demoLink?: string;
};

export default function ProjectCard({
  title,
  description,
  image,
  codeLink,
  demoLink,
}: ProjectCardProps) {
  return (
    <article className="group rounded-xl border border-white/10 bg-black/5 backdrop-blur-sm shadow-sm hover:shadow-md transition overflow-hidden">
      {/* Media */}
      <div className="relative w-full aspect-[16/9]">
        <Image
          src={image}
          alt={title}
          fill
          priority={false}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover"
        />
      </div>

      {/* Body */}
      <div className="p-4">
        <h3 className="text-base sm:text-lg font-semibold leading-tight">{title}</h3>
        <p className="mt-2 text-sm text-white/70 line-clamp-3">{description}</p>

        {/* Actions */}
        <div className="mt-4 flex items-center gap-3">
          {codeLink && (
            <a
              href={codeLink}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs sm:text-sm rounded-md border border-white/15 px-3 py-1.5 hover:bg-white/10 transition"
            >
              View Code
            </a>
          )}
          {demoLink && (
            <a
              href={demoLink}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs sm:text-sm rounded-md bg-violet-500/90 px-3 py-1.5 hover:bg-violet-500 transition"
            >
              Live Demo
            </a>
          )}
        </div>
      </div>
    </article>
  );
}
