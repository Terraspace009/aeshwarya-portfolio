"use client";

export default function CertificationCard({ title }: { title: string }) {
  return (
    <div className="card p-4 text-center hover:border-purple-400/50 transition">
      <p className="font-medium">{title}</p>
      <p className="text-xs text-zinc-400 mt-1">Coursera / Multiple</p>
    </div>
  );
}
