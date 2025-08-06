// components/Contact.tsx
import React from "react";

const Contact = () => {
  return (
    <div id="contact" className="mt-20">
      <h2 className="text-3xl font-bold mb-6 text-white">Connect</h2>
      <div className="space-y-3 text-white">
        <p>
          📬 <span className="font-semibold">Email:</span>{" "}
          <a
            href="mailto:aeshu009@gmail.com"
            className="text-purple hover:underline"
          >
            aeshu009@gmail.com
          </a>
        </p>
        <p>
          💼 <span className="font-semibold">LinkedIn:</span>{" "}
          <a
            href="https://www.linkedin.com/in/aeshwarya-shukla-90835b57/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-purple hover:underline"
          >
            Aeshwarya Shukla
          </a>
        </p>
        <p>
          💻 <span className="font-semibold">GitHub:</span>{" "}
          <a
            href="https://github.com/Terraspace009"
            target="_blank"
            rel="noopener noreferrer"
            className="text-purple hover:underline"
          >
            Terraspace009
          </a>
        </p>
      </div>
    </div>
  );
};

export default Contact;
