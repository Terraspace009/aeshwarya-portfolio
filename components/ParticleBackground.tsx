'use client';
import { useEffect, useRef } from 'react';

type Particle = {
  x: number; y: number; vx: number; vy: number; r: number;
};

export default function ParticleBackground() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const ctxRef = useRef<CanvasRenderingContext2D | null>(null);
  const particlesRef = useRef<Particle[]>([]);
  const rafRef = useRef<number | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const dpr = Math.max(1, Math.min(2, window.devicePixelRatio || 1));

    const initCtx = () => {
      const ctx = canvas.getContext('2d');
      if (!ctx) return;
      // set size respecting DPR
      const { clientWidth, clientHeight } = canvas;
      canvas.width = Math.floor(clientWidth * dpr);
      canvas.height = Math.floor(clientHeight * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0); // scale drawing back to CSS pixels
      ctxRef.current = ctx;
    };

    const initParticles = () => {
      const count = 60;
      const arr: Particle[] = [];
      const width = canvas.clientWidth;
      const height = canvas.clientHeight;
      for (let i = 0; i < count; i++) {
        arr.push({
          x: Math.random() * width,
          y: Math.random() * height,
          vx: (Math.random() - 0.5) * 0.6,
          vy: (Math.random() - 0.5) * 0.6,
          r: Math.random() * 1.6 + 0.6,
        });
      }
      particlesRef.current = arr;
    };

    const resize = () => {
      initCtx();
      // keep particles inside bounds after resize
      const width = canvas.clientWidth;
      const height = canvas.clientHeight;
      particlesRef.current.forEach(p => {
        p.x = Math.min(Math.max(p.x, 0), width);
        p.y = Math.min(Math.max(p.y, 0), height);
      });
    };

    initCtx();
    initParticles();
    window.addEventListener('resize', resize);

    const animate = () => {
      const ctx = ctxRef.current;
      if (!ctx) {
        rafRef.current = requestAnimationFrame(animate);
        return;
      }

      const width = canvas.clientWidth;
      const height = canvas.clientHeight;

      ctx.clearRect(0, 0, width, height);

      // move + draw
      particlesRef.current.forEach(p => {
        p.x += p.vx; p.y += p.vy;

        // bounce
        if (p.x <= 0 || p.x >= width) p.vx *= -1;
        if (p.y <= 0 || p.y >= height) p.vy *= -1;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(168,85,247,0.6)'; // purple-500-ish
        ctx.fill();
      });

      // lines
      for (let i = 0; i < particlesRef.current.length; i++) {
        for (let j = i + 1; j < particlesRef.current.length; j++) {
          const a = particlesRef.current[i];
          const b = particlesRef.current[j];
          const dx = a.x - b.x;
          const dy = a.y - b.y;
          const dist = Math.hypot(dx, dy);
          const max = 120;
          if (dist < max) {
            const alpha = 1 - dist / max;
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.strokeStyle = `rgba(168,85,247,${0.15 * alpha})`;
            ctx.lineWidth = 1;
            ctx.stroke();
          }
        }
      }

      rafRef.current = requestAnimationFrame(animate);
    };

    rafRef.current = requestAnimationFrame(animate);

    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      window.removeEventListener('resize', resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 -z-10 block h-full w-full"
    />
  );
}
