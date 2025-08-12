"use client";

import ParticleBackground from "../components/ParticleBackground";
import Hero from "../components/Hero";
import About from "../components/About";
import ProjectCard from "../components/ProjectCard";
import CertificationCard from "../components/CertificationCard";
import Contact from "../components/Contact";

export default function Home() {
  return (
    <main className="relative">
      <ParticleBackground />

      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <Hero />
        <About />
      </section>

      <section
        id="projects"
        className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12"
      >
        <h2 className="text-3xl font-bold mb-8">Projects</h2>
        <div className="grid gap-6 sm:grid-cols-2">
          <ProjectCard
            title="TERRA Cypher – Emotion Detection HUD"
            description="Real‑time emotion detection with ASCII overlay in a cyberpunk HUD."
            image="/projects/one.png"
          />
          <ProjectCard
            title="ByteMe – Sarcastic Emotion Bot"
            description="A sentiment‑aware chatbot that reacts with witty dark humour."
            image="/projects/two.png"
          />
          <ProjectCard
            title="Gesture Music Instrument"
            description="Control loops with hand gestures via computer vision."
            image="/projects/three.png"
          />
          <ProjectCard
            title="Hotel Booking Cancellation Predictor"
            description="Predict cancellations using a trained scikit‑learn model."
            image="/projects/four.png"
          />
          <ProjectCard
            title="Azure Computer Vision App"
            description="Captions, tags, objects, and OCR using Azure CV."
            image="/projects/five.png"
          />
        </div>
      </section>

      <section
        id="certifications"
        className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12"
      >
        <h2 className="text-3xl font-bold mb-6">Certifications</h2>
        <div className="grid gap-4 sm:grid-cols-3">
          <CertificationCard title="Machine Learning Specialization" />
          <CertificationCard title="Deep Learning Specialization" />
          <CertificationCard title="Applied Data Science" />
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <Contact />
      </section>
    </main>
  );
}
