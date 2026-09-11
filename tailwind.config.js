/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        graphite: '#0b0c0e',
        'graphite-deep': '#060708',
        'graphite-card': '#111317',
        'titanium': '#eceae5',
        'titanium-dim': '#9e9c96',
        amber: {
          apex: '#f59e0b',
          glow: '#fbbf24',
          dim: '#78350f'
        },
        slate: {
          aero: '#475569',
          tech: '#1e293b'
        }
      },
      fontFamily: {
        sans: ['"Space Grotesk"', 'sans-serif'],
        display: ['"Syne"', '"Space Grotesk"', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
        body: ['"Chivo"', 'sans-serif']
      }
    }
  },
  plugins: [],
}
