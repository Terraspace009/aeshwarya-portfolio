'use client';
import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";

export default function Contact() {
  return (
    <div className="flex justify-center items-center gap-6 mt-10">
      <a href="mailto:aeshu009@gmail.com" target="_blank" rel="noopener noreferrer">
        <div className="w-12 h-12 rounded-full border border-white/40 flex items-center justify-center hover:bg-white/10 transition">
          <FaEnvelope className="text-white text-xl" />
        </div>
      </a>
      <a href="https://github.com/Terraspace009" target="_blank" rel="noopener noreferrer">
        <div className="w-12 h-12 rounded-full border border-white/40 flex items-center justify-center hover:bg-white/10 transition">
          <FaGithub className="text-white text-xl" />
        </div>
      </a>
      <a href="https://www.linkedin.com/in/aishwaryas-ai" target="_blank" rel="noopener noreferrer">
        <div className="w-12 h-12 rounded-full border border-white/40 flex items-center justify-center hover:bg-white/10 transition">
          <FaLinkedin className="text-white text-xl" />
        </div>
      </a>
    </div>
  );
}
