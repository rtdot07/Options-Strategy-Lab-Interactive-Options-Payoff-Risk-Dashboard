/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['DM Sans', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      colors: {
        surface: {
          DEFAULT: '#0f1419',
          elevated: '#1a2332',
          muted: '#16202d',
        },
        accent: {
          DEFAULT: '#00d4aa',
          muted: '#00a884',
          bright: '#00ffcc',
        },
        risk: {
          loss: '#f87171',
          gain: '#34d399',
          neutral: '#94a3b8',
        },
      },
    },
  },
  plugins: [],
}
