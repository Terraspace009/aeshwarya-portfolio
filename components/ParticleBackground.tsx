'use client';
import { useCallback } from "react";
import Particles from "react-particles";
import { loadFull } from "tsparticles";

export default function ParticleBackground() {
  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine);
  }, []);

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      options={{
        fullScreen: { enable: true, zIndex: -1 },
        background: { color: "#000000" },
        particles: {
          number: { value: 80, density: { enable: true, area: 800 } },
          color: { value: "#ffffff" },
          shape: { type: "circle" },
          opacity: {
            value: 0.5,
            random: false,
            anim: { enable: false }
          },
          size: {
            value: 3,
            random: true,
            anim: { enable: false }
          },
          links: {
            enable: true,
            distance: 120,
            color: "#ffffff",
            opacity: 0.3,
            width: 1
          },
          move: {
            enable: true,
            speed: 1.2,
            direction: "none",
            outModes: { default: "bounce" }
          }
        },
        interactivity: {
          events: {
            onHover: { enable: true, mode: "grab" },
            resize: true
          },
          modes: {
            grab: { distance: 140, links: { opacity: 0.5 } }
          }
        },
        detectRetina: true
      }}
    />
  );
}


