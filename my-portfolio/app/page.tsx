"use client";
import React from "react";
import ProjectCard from "@/components/ProjectCard";
import CertificationCard from "@/components/CertificationCard";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Contact from "@/components/Contact";
import ParticleBackground from "@/components/ParticleBackground";

export default function Home() {

  return (
    <main className="relative flex min-h-screen flex-col items-center justify-between overflow-hidden bg-black text-white px-4 py-8 sm:px-6 lg:px-20">
      <ParticleBackground />

      <Hero />
      <About />

      <section className="w-full max-w-screen-lg">
        <h2 className="text-3xl font-bold mt-12 mb-6">Projects</h2>
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
  description="ML model to predict if a hotel booking is likely to be cancelled. Built with Streamlit and scikit-learn."
  image="/projects/three.png"
  codeLink="https://github.com/Terraspace009/hotel-booking-prediction"
  demoLink="https://hotel-booking-prediction-9p7h3dhndnzxq26btdeduu.streamlit.app/"
/>

<ProjectCard
  title="Azure Computer Vision App"
  description="Upload an image and explore what Azure sees — captions, tags, objects, and even text (OCR). Built with Streamlit."
  image="/projects/five.png"
  codeLink="https://github.com/Terraspace009/azure-cv-app"
  demoLink="https://azure-cv-app-n7hamxehg76uncshsuvfea.streamlit.app/"
/>

<ProjectCard
  title="Gesture Music Instrument"
  description="Create music with your hands using computer vision and live gesture tracking. Trigger sounds like kick, clap, bass and more while adjusting tempo and volume."
  image="/projects/four.png"
  codeLink="https://github.com/Terraspace009/gesture-music-instrument"
  demoLink="" // leave empty or say "Coming Soon"
/>

        </div>
      </section>

      <section className="w-full max-w-screen-lg mt-20">
        <h2 className="text-3xl font-bold mb-6">Certifications</h2>
        <div className="flex flex-wrap gap-4 justify-center">
          <CertificationCard title="Machine Learning Specialization" />
          <CertificationCard title="Deep Learning Specialization" />
          <CertificationCard title="Applied Data Science" />
        </div>
      </section>

      <Contact />
    </main>
  );
}
