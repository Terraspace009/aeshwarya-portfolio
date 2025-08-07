'use client';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="h-screen flex items-center justify-center text-center">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="space-y-4"
      >
        <h1 className="text-5xl md:text-7xl font-bold tracking-tight">
          Aishwarya S
        </h1>
        <p className="text-xl md:text-2xl text-gray-300 font-light">
          Data Science × Creative Technology
        </p>
      </motion.div>
    </section>
  );
}
