/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bg:          '#050C18',
        surface:     '#0A1628',
        panel:       '#0F1E35',
        'accent-blue': '#1B6CA8',
        'accent-glow': '#2A8FE0',
        'text-primary': '#E8EDF4',
        'text-secondary': '#8899AA',
        border:      '#1A2E45',
        danger:      '#C94F3A',
      },
      fontFamily: {
        display: ['"Bebas Neue"', 'sans-serif'],
        mono:    ['"DM Mono"', 'monospace'],
        serif:   ['"Instrument Serif"', 'serif'],
      },
      letterSpacing: {
        widest2: '0.15em',
      },
      animation: {
        'fade-up':     'fadeUp 0.6s ease forwards',
        'line-draw':   'lineDraw 0.8s ease forwards',
        'glow-pulse':  'glowPulse 2s ease-in-out infinite',
        'chevron-bob': 'chevronBob 1.8s ease-in-out infinite',
        'counter':     'counter 1.5s ease-out forwards',
      },
      keyframes: {
        fadeUp: {
          '0%':   { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        lineDraw: {
          '0%':   { width: '0%' },
          '100%': { width: '100%' },
        },
        glowPulse: {
          '0%, 100%': { boxShadow: '0 0 12px rgba(42,143,224,0.35)' },
          '50%':       { boxShadow: '0 0 28px rgba(42,143,224,0.7)' },
        },
        chevronBob: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%':       { transform: 'translateY(8px)' },
        },
      },
    },
  },
  plugins: [],
}
