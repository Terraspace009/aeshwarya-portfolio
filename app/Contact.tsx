'use client';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { HiMail } from 'react-icons/hi';

export default function Contact() {
  return (
    <section className="min-h-[50vh] flex flex-col justify-center items-center px-6 sm:px-20 py-20 bg-black text-center">
      <h2 className="text-3xl font-semibold tracking-tight mb-8">Contact</h2>
      <div className="flex flex-col sm:flex-row gap-6 text-lg">
        <a
          href="mailto:aeshu009@gmail.com"
          className="flex items-center gap-2 hover:text-purple-400 transition"
        >
          <HiMail size={24} />
          aeshu009@gmail.com
        </a>
        <a
          href="https://github.com/Terraspace009"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 hover:text-purple-400 transition"
        >
          <FaGithub size={24} />
          GitHub
        </a>
        <a
          href="https://www.linkedin.com/in/aeshwarya-shukla-90835b57/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 hover:text-purple-400 transition"
        >
          <FaLinkedin size={24} />
          LinkedIn
        </a>
      </div>
    </section>
  );
}
