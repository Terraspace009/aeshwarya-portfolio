'use client';
import { motion } from 'framer-motion';

export default function About() {
  return (
    <motion.div
      className="max-w-4xl text-center md:text-left"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <h2 className="text-4xl font-bold mb-6">About Me</h2>
      <p className="text-gray-300 text-lg leading-relaxed mb-6">
        I’m a data science graduate and creative technologist exploring the fusion of
        <span className="text-purple-400"> generative art, machine learning, and expressive interaction. </span>
        My work spans emotion-aware AI, gesture-based interfaces, and visual music tools that blur the line between code and creativity.
      </p>
      <p className="text-gray-400 text-base leading-relaxed mb-8">
        Whether I’m building cyberpunk interfaces, real-time visualizations, or sound-reactive systems —
        my goal is always to make technology feel more human, more playful, and more alive.
      </p>

      <h3 className="text-2xl font-semibold text-purple-300 mb-4">Skills & Tools</h3>
      <ul className="grid grid-cols-2 sm:grid-cols-3 gap-3 text-gray-400 text-base">
        <li>Python, PyTorch, TensorFlow</li>
        <li>OpenCV, MediaPipe</li>
        <li>Next.js, React, Streamlit</li>
        <li>TailwindCSS, Framer Motion</li>
        <li>TouchDesigner, Visual Music</li>
        <li>Azure Cognitive Services</li>
        <li>Creative ML, AI Art</li>
        <li>Interactive Prototyping</li>
      </ul>
    </motion.div>
  );
}
