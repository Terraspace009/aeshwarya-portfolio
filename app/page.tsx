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
    <main className="bg-black text-white min-h-screen relative">
      <ParticleBackground />

      <Hero />
      <About />

      {/* Projects */}
      <section id="projects" className="p-8 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-6">Projects</h2>

        <div className="grid gap-6 sm:grid-cols-2">
          <ProjectCard
            title="TERRA Cypher – Emotion Detection HUD"
            description="A cyberpunk-inspired, real-time emotion detection interface with ASCII face rendering."
            image="/projects/one.png"
          />

          <ProjectCard
            title="ByteMe – Sarcastic Emotion Bot"
            description="A sentiment-aware chatbot that reacts with wit and dark humor."
            image="/projects/two.png"
          />

          <ProjectCard
            title="Gesture Music Instrument"
            description="Hand-gesture controlled music loops using computer vision."
            image="/projects/three.png"
          />

          <ProjectCard
            title="Hotel Booking Cancellation Predictor"
            description="Predicts booking cancellations using a trained scikit‑learn model."
            image="/projects/four.png"
          />

          <ProjectCard
            title="Azure Computer Vision App"
            description="Upload images to get captions, tags, objects, and OCR with Azure CV."
            image="/projects/five.png"
          />
        </div>
      </section>

      {/* Certifications */}
      <section id="certifications" className="p-8 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-6">Certifications</h2>

        <div className="grid gap-4 sm:grid-cols-3">
          <CertificationCard title="Machine Learning Specialization" />
          <CertificationCard title="Deep Learning Specialization" />
          <CertificationCard title="Applied Data Science" />
        </div>
      </section>

      <Contact />
    </main>
  );
}

