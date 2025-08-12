@tailwind base;
@tailwind components;
@tailwind utilities;

/* Global dark theme defaults */
html, body {
  background: #000;
  color: #fff;
}

/* Smooth scroll & headings */
html { scroll-behavior: smooth; }
h1, h2, h3 { @apply tracking-tight; }

/* Reusable UI components */
.btn {
  @apply inline-flex items-center gap-2 rounded-lg px-4 py-2 font-medium transition;
}
.card {
  @apply bg-zinc-900/70 border border-white/10 rounded-xl shadow-lg backdrop-blur-md;
}
