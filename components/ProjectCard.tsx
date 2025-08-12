"use client";
import Image from "next/image";

export type ProjectCardProps = {
  title: string;
  description: string;
  image: string; // /public path e.g. "/projects/one.png"
};

export default function ProjectCard({ title, description, image }: ProjectCardProps) {
  return (
    <article className="group overflow-hidden rounded-2xl border border-white/10 bg-white/5 hover:bg-white/[0.07] transition">
      <div className="relative aspect-[16/9]">
        <Image
          src={image}
          alt={title}
          fill
          sizes="(max-width: 768px) 100vw, 50vw"
          className="object-cover opacity-90 group-hover:opacity-100"
          priority={false}
        />
      </div>
      <div className="p-4">
        <h3 className="text-lg font-semibold">{title}</h3>
        <p className="mt-1 text-sm text-white/70 leading-relaxed">{description}</p>
      </div>
    </article>
  );
}
