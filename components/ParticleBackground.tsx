'use client';
import { useCallback } from "react";
import Particles from "react-tsparticles";
import type { Engine } from "@tsparticles/engine";
import { loadBasic } from "@tsparticles/basic";

export default function ParticleBackground() {
  const particlesInit = useCallback(async (engine: Engine) => {
    await loadBasic(engine);
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
          opacity: { value: 0.5 },
          size: { value: 3, random: true },
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
