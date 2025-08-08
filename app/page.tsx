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
    <main className="relative bg-black text-white min-h-screen overflow-hidden">
      <ParticleBackground />
      <Hero />
      <About />

      {/* Projects */}
      <section id="projects" className="p-8">
        <h2 className="text-3xl font-bold mb-6">Projects</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <ProjectCard
            title="TERRA Cypher – Emotion Detection HUD"
            description="Realtime emotion recognition with webcam and ASCII face rendering. Cyberpunk-style radar visualization using MobileNetV2."
            image="/projects/one.png"
            codeLink="https://github.com/Terraspace009/terra-cypherweb"
            demoLink="https://terra-cypherweb-b8yxnpeu9rjnwikjcf45jy.streamlit.app/"
          />
          <ProjectCard
            title="ByteMe – Sarcastic Emotion Bot"
            description="A dark humour chatbot that reacts to your feelings with wit and sarcasm. Powered by OpenAI and Streamlit."
            image="/projects/two.png"
            codeLink="https://github.com/Terraspace009/ByteMe"
            demoLink="https://byteme-n6z2wt7c3gy5z3iyoisazl.streamlit.app/"
          />
          <ProjectCard
            title="Hotel Booking Cancellation Predictor"
            description="Predicts if a hotel booking is likely to be cancelled. Built with Streamlit & scikit‑learn."
            image="/projects/three.png"
            codeLink="https://github.com/Terraspace009/hotel-booking-prediction"
            demoLink="https://hotel-booking-prediction-9p7h3dhndnzxq26btdeduu.streamlit.app/"
          />
          <ProjectCard
            title="Gesture Music Instrument"
            description="Create music with your hands using computer vision and live gesture tracking."
            image="/projects/four.png"
            codeLink="https://github.com/Terraspace009/terra-mixer-ui"
            demoLink="#" // upcoming
          />
          <ProjectCard
            title="Azure Computer Vision App"
            description="Upload an image and explore what Azure sees — captions, tags, objects, and OCR."
            image="/projects/five.png"
            codeLink="https://github.com/Terraspace009/azure-cv-app"
            demoLink="https://azure-cv-app-n7hamxehg76uncshsuvfea.streamlit.app/"
          />
        </div>
      </section>

      {/* Certifications */}
      <section id="certifications" className="p-8">
        <h2 className="text-3xl font-bold mb-6">Certifications</h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <CertificationCard title="Machine Learning Specialization" />
          <CertificationCard title="Deep Learning Specialization" />
          <CertificationCard title="Applied Data Science" />
        </div>
      </section>

      <Contact />
    </main>
  );
}
