"use client";
import Image from "next/image";

type Props = {
  title: string;
  description: string;
  image: string;
};

export default function ProjectCard({ title, description, image }: Props) {
  return (
    <article className="card overflow-hidden">
      <div className="relative w-full h-44 sm:h-48">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 50vw"
          priority={false}
        />
      </div>
      <div className="p-4">
        <h3 className="text-lg font-semibold">{title}</h3>
        <p className="text-sm text-zinc-300 mt-2">{description}</p>
      </div>
    </article>
  );
}
