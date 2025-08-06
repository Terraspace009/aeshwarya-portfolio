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
        I’m a data scientist and creative technologist exploring the space where 
        <span className="text-purple-400"> machine learning, data-driven design, and generative art </span>
        meet. With certifications in Machine Learning, Deep Learning, and Applied Data Science, 
        I build interactive systems that merge technical precision with creative storytelling.
      </p>
      <p className="text-gray-400 text-base leading-relaxed mb-8">
        My work ranges from <span className="text-purple-400">emotion-aware AI interfaces</span> to 
        <span className="text-purple-400"> gesture-based music instruments</span> and 
        immersive <span className="text-purple-400">data visualizations</span>. 
        I enjoy taking ideas from raw data to interactive prototypes, shaping how 
        humans and machines collaborate in expressive, visually compelling ways.
      </p>

      <h3 className="text-2xl font-semibold text-purple-300 mb-4">Skills & Tools</h3>
      <ul className="grid grid-cols-2 sm:grid-cols-3 gap-3 text-gray-400 text-base">
        <li>Python, PyTorch, TensorFlow</li>
        <li>OpenCV, MediaPipe</li>
        <li>Machine Learning & AI Models</li>
        <li>Streamlit, React, Next.js</li>
        <li>TailwindCSS, Framer Motion</li>
        <li>Azure Cognitive Services</li>
        <li>TouchDesigner</li>
        <li>Generative Visuals</li>
        <li>Music AI, Data Analytics</li>
      </ul>
    </motion.div>
  );
}
