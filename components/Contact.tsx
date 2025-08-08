'use client';
import React from 'react';

export default function Contact() {
  return (
    <section id="contact" className="px-4">
      <div className="mx-auto max-w-4xl bg-neutral-900/70 border border-purple-500/30 rounded-2xl p-8">
        <h2 className="text-3xl font-bold text-center mb-4">Get in Touch</h2>
        <p className="text-center text-neutral-300 mb-8">
          Interested in collaborating or discussing creative AI projects?
        </p>

        <div className="flex items-center justify-center gap-6">
          <a
            href="mailto:aeshu009@gmail.com"
            className="w-12 h-12 rounded-full bg-neutral-800 border border-purple-500/30
                       grid place-items-center hover:border-purple-400"
            aria-label="Email"
            title="Email"
          >
            ✉️
          </a>
          <a
            href="https://github.com/Terraspace009"
            target="_blank"
            rel="noreferrer"
            className="w-12 h-12 rounded-full bg-neutral-800 border border-purple-500/30
                       grid place-items-center hover:border-purple-400"
            aria-label="GitHub"
            title="GitHub"
          >
            🐙
          </a>
          <a
            href="https://www.linkedin.com/in/aeshwarya-shukla-90835b57/"
            target="_blank"
            rel="noreferrer"
            className="w-12 h-12 rounded-full bg-neutral-800 border border-purple-500/30
                       grid place-items-center hover:border-purple-400"
            aria-label="LinkedIn"
            title="LinkedIn"
          >
            in
          </a>
        </div>
      </div>
    </section>
  );
}
