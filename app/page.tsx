'use client';

import React from 'react';
import Hero from '../components/Hero';
import About from '../components/About';
import ProjectCard from '../components/ProjectCard';
import CertificationCard from '../components/CertificationCard';
import Contact from '../components/Contact';
import ParticleBackground from '../components/ParticleBackground';

export default function Home() {
  return (
    <main className="relative min-h-screen">
      <ParticleBackground />

      <Hero />
      <About />

      {/* Projects */}
      <section id="projects" className="px-4">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold mb-6">Projects</h2>
          <div className="grid gap-6 sm:grid-cols-2">
            <ProjectCard
              title="TERRA Cypher – Emotion Detection HUD"
              description="Cyberpunk-style, real‑time emotion detection with ASCII face overlay."
              image="/projects/one.png"
            />
            <ProjectCard
              title="ByteMe – Sarcastic Emotion Bot"
              description="A sentiment-aware chatbot that reacts with wit and dark humor."
              image="/projects/two.png"
            />
            <ProjectCard
              title="Gesture Music Instrument"
              description="Hand‑gesture controlled music loops using computer vision."
              image="/projects/three.png"
            />
            <ProjectCard
              title="Hotel Booking Cancellation Predictor"
              description="Predicts booking cancellations with a trained scikit‑learn model."
              image="/projects/four.png"
            />
            <ProjectCard
              title="Azure Computer Vision App"
              description="Upload images, get captions, tags, objects, and OCR."
              image="/projects/five.png"
            />
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section id="certifications" className="px-4">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold mb-6">Certifications</h2>
          <div className="grid gap-4 sm:grid-cols-3">
            <CertificationCard title="Machine Learning Specialization" provider="Coursera" />
            <CertificationCard title="Deep Learning Specialization" provider="Coursera" />
            <CertificationCard title="Applied Data Science" provider="Multiple Providers" />
          </div>
        </div>
      </section>

      <Contact />
    </main>
  );
}

