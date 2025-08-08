'use client';
import React from 'react';

type Props = {
  title: string;
  provider?: string;
};

export default function CertificationCard({ title, provider }: Props) {
  return (
    <div
      className="bg-neutral-900/70 border border-purple-500/40 rounded-xl p-5
                 hover:border-purple-400 transition"
    >
      <div className="text-white font-semibold">{title}</div>
      {provider ? <div className="text-xs text-purple-300 mt-2">{provider}</div> : null}
    </div>
  );
}
