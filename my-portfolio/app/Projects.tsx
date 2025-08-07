'use client';
import { motion } from 'framer-motion';

export default function Projects() {
  const projects = [
    {
      title: "🏨 Hotel Booking Predictor",
      description: "Predicts whether a hotel booking will be cancelled using a trained ML model. Built with Streamlit and scikit-learn.",
      code: "https://github.com/Terraspace009/hotel-booking-prediction",
      live: "https://hotel-booking-prediction-9p7h3dhndnzxq26btdeduu.streamlit.app",
    },
    {
      title: "ByteMe 🤖",
      description: "Emotion-sensitive dark humour bot built with Streamlit and OpenAI.",
      code: "https://github.com/Terraspace009/ByteMe",
      live: "https://byteme-n6z2wt7c3gy5z3iyoisazl.streamlit.app/",
    },
    {
      title: "A/B Testing in Finance 📊",
      description: "Statistical analysis of credit card campaign using synthetic data.",
      code: "https://github.com/Terraspace009/ab-testing-finance-analytics",
    },
    {
      title: "Azure CV App 👁️",
      description: "Image description and OCR using Azure Computer Vision + Streamlit.",
      code: "https://github.com/Terraspace009/azure-cv-app",
      live: "https://azure-cv-app-n7hamxehg76uncshsuvfea.streamlit.app/",
    },
    {
      title: "Terra Cypher 🎶🤖",
      description: "Advanced emotion detection app built with Streamlit and PyTorch.",
      code: "https://github.com/Terraspace009/terra-cypherweb/blob/main/app.py",
      live: "https://terra-cypherweb-b8yxnpeu9rjnwikjcf45jy.streamlit.app/",
    },
  ];

  return (
    <section className="min-h-screen px-6 sm:px-20 py-20">
      <h2 className="text-3xl font-semibold tracking-tight text-center mb-10">
        Projects
      </h2>
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((proj, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.05, rotate: 1 }}
            whileTap={{ scale: 0.98 }}
            className="relative bg-gray-900 p-6 rounded-lg shadow-lg border border-gray-700 hover:border-purple-400 transition-all overflow-hidden"
          >
            {/* Glow effect */}
            <div className="absolute inset-0 bg-purple-500 opacity-10 blur-2xl"></div>

            <h3 className="text-xl font-semibold mb-2 relative">{proj.title}</h3>
            <p className="text-gray-300 mb-4 relative">{proj.description}</p>
            <motion.div
              className="flex gap-3 relative"
              initial={{ y: 20, opacity: 0 }}
              whileHover={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.3 }}
            >
              <a
                href={proj.code}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-800 px-3 py-1 rounded hover:bg-purple-500 transition cursor-pointer"
              >
                📂 View Code
              </a>
              {proj.live && (
                <a
                  href={proj.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gray-800 px-3 py-1 rounded hover:bg-green-500 transition cursor-pointer"
                >
                  🚀 Run App
                </a>
              )}
            </motion.div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
