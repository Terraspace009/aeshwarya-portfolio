// app/layout.tsx
import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Aishwarya S | Portfolio",
  description: "Data Science × Creative Technology",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="bg-black">
      <body className="min-h-screen bg-black text-white antialiased selection:bg-purple-600/40">
        {children}
      </body>
    </html>
  );
}
