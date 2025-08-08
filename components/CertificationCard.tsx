"use client";
import React from "react";

interface Props {
  title: string;
}

const CertificationCard: React.FC<Props> = ({ title }) => {
  return (
    <div className="p-6 border border-purple-500 text-white rounded-lg w-64 text-center font-bold text-lg bg-black">
      {title}
    </div>
  );
};

export default CertificationCard;
