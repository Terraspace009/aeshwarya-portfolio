"use client";

import { useEffect, useRef } from "react";

export default function ParticleBackground() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const rafRef = useRef<number | null>(null);

  useEffect(() => {
    // Guard: only run in the browser
    if (typeof window === "undefined") return;

    const c = canvasRef.current;
    if (!c) return; // TS: from this point, c is non-null

    const ctx = c.getContext("2d");
    if (!ctx) return; // TS: from this point, ctx is non-null

    let w = 0;
    let h = 0;
    const DPR = window.devicePixelRatio || 1;

    const resize = () => {
      w = window.innerWidth;
      h = window.innerHeight;
      c.width = w * DPR;
      c.height = h * DPR;
      c.style.width = `${w}px`;
      c.style.height = `${h}px`;
      ctx.setTransform(1, 0, 0, 1, 0, 0);
      ctx.scale(DPR, DPR);
    };

    resize();

    const count = Math.min(90, Math.floor((w * h) / 20000));
    const particles = Array.from({ length: count }).map(() => ({
      x: Math.random() * w,
      y: Math.random() * h,
      vx: (Math.random() - 0.5) * 0.6,
      vy: (Math.random() - 0.5) * 0.6,
      r: Math.random() * 1.6 + 0.4,
    }));

    const draw = () => {
      // safe: ctx is not null here
      ctx.clearRect(0, 0, w, h);

      // dots
      ctx.fillStyle = "rgba(255,255,255,0.9)";
      for (const p of particles) {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0 || p.x > w) p.vx *= -1;
        if (p.y < 0 || p.y > h) p.vy *= -1;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fill();
      }

      // lines
      ctx.lineWidth = 1;
      ctx.strokeStyle = "rgba(255,255,255,0.08)";
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const d2 = dx * dx + dy * dy;
          if (d2 < 120 * 120) {
            ctx.globalAlpha = 1 - d2 / (120 * 120);
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      }
      ctx.globalAlpha = 1;

      rafRef.current = requestAnimationFrame(draw);
    };

    draw();
    window.addEventListener("resize", resize);

    return () => {
      window.removeEventListener("resize", resize);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 -z-10 pointer-events-none"
      aria-hidden="true"
    />
  );
}

