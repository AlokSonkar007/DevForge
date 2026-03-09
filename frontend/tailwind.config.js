/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        bg: '#06080f',
        panel: '#0d1320',
        neonBlue: '#3b82f6',
        cyberPurple: '#8b5cf6',
        neonCyan: '#06b6d4'
      },
      boxShadow: {
        glow: '0 0 24px rgba(59,130,246,0.35)'
      },
      backgroundImage: {
        grid: 'linear-gradient(to right, rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.05) 1px, transparent 1px)'
      }
    }
  },
  plugins: []
};
