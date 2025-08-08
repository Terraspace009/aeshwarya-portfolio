"use client";
import React from "react";
import Hero from "../components/Hero";
import About from "../components/About";
import ProjectCard from "../components/ProjectCard";
import CertificationCard from "../components/CertificationCard";
import Contact from "../components/Contact";
import ParticleBackground from "../components/ParticleBackground";

export default function Home() {
  return (
    <main className="bg-black text-white min-h-screen">
      <ParticleBackground />
      <Hero />
      <About />
      <section id="projects" className="p-8">
        <h2 className="text-3xl font-bold mb-6">Projects</h2>
        <ProjectCard />
      </section>
      <section id="certifications" className="p-8">
        <h2 className="text-3xl font-bold mb-6">Certifications</h2>
        <CertificationCard />
      </section>
      <Contact />
    </main>
  );
}
