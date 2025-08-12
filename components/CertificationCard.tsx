"use client";

export default function CertificationCard({ title }: { title: string }) {
  return (
    <div className="card p-4 text-center hover:border-purple-400/50 transition">
      <p className="font-medium text-lg">{title}</p>
    </div>
  );
}
