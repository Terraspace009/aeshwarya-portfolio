"use client";

import ParticleBackground from "../components/ParticleBackground";
import Hero from "../components/Hero";
import About from "../components/About";
import ProjectCard from "../components/ProjectCard";
import CertificationCard from "../components/CertificationCard";
import Contact from "../components/Contact";

export default function Home() {
  return (
    <main className="relative min-h-screen bg-black text-white overflow-hidden">
      <ParticleBackground />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-24">
        {/* Hero and About */}
        <section className="space-y-12">
          <Hero />
          <About />
        </section>

        {/* Projects */}
        <section id="projects">
          <h2 className="text-3xl font-bold mb-8">Projects</h2>
          <div className="grid gap-6 sm:grid-cols-2">
            <ProjectCard
              title="TERRA Cypher – Emotion Detection HUD"
              description="Real‑time emotion detection with ASCII overlay in a cyberpunk HUD."
              image="/projects/one.png"
              codeLink="https://github.com/Terraspace009/terra-cypherweb/blob/main/app.py"
              demoLink="https://terra-cypherweb-b8yxnpeu9rjnwikjcf45jy.streamlit.app/"
            />
            <ProjectCard
              title="ByteMe – Sarcastic Emotion Bot"
              description="A sentiment‑aware chatbot that reacts with witty dark humour."
              image="/projects/two.png"
              codeLink="https://github.com/Terraspace009/ByteMe"
              demoLink="https://byteme-n6z2wt7c3gy5z3iyoisazl.streamlit.app/"
            />
            <ProjectCard
              title="Gesture Music Instrument"
              description="Control loops with hand gestures via computer vision."
              image="/projects/three.png"
              codeLink="https://github.com/Terraspace009/gesture-music" // Add if exists
              demoLink="" // Optional if demo not deployed
            />
            <ProjectCard
              title="Hotel Booking Cancellation Predictor"
              description="Predict cancellations using a trained scikit‑learn model."
              image="/projects/four.png"
              codeLink="https://github.com/Terraspace009/hotel-booking-prediction"
              demoLink="https://hotel-booking-prediction-9p7h3dhndnzxq26btdeduu.streamlit.app"
            />
            <ProjectCard
              title="Azure Computer Vision App"
              description="Captions, tags, objects, and OCR using Azure CV."
              image="/projects/five.png"
              codeLink="https://github.com/Terraspace009/azure-cv-app"
              demoLink="https://azure-cv-app-n7hamxehg76uncshsuvfea.streamlit.app/"
            />
          </div>
        </section>

        {/* Certifications */}
        <section id="certifications">
          <h2 className="text-3xl font-bold mb-6">Certifications</h2>
          <div className="grid gap-4 sm:grid-cols-3">
            <CertificationCard title="Machine Learning Specialization" />
            <CertificationCard title="Deep Learning Specialization" />
            <CertificationCard title="Applied Data Science" />
          </div>
        </section>

        {/* Contact */}
        <section id="contact">
          <Contact />
        </section>
      </div>
    </main>
  );
}
