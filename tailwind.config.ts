import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{ts,tsx}',
    './lib/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        bg: {
          DEFAULT: '#0a0e14',
          soft: '#0f141c',
          card: '#121821',
          border: '#1f2937',
        },
        ink: {
          DEFAULT: '#e6edf3',
          dim: '#9aa7b4',
        },
        accent: {
          cyan: '#22d3ee',
          violet: '#a78bfa',
          green: '#34d399',
          amber: '#fbbf24',
          pink: '#f472b6',
        },
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'SFMono-Regular', 'monospace'],
      },
      keyframes: {
        blink: {
          '0%, 49%': { opacity: '1' },
          '50%, 100%': { opacity: '0' },
        },
        flow: {
          '0%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
          '100%': { backgroundPosition: '0% 50%' },
        },
        floaty: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-6px)' },
        },
      },
      animation: {
        blink: 'blink 1s steps(1) infinite',
        flow: 'flow 8s ease-in-out infinite',
        floaty: 'floaty 6s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};

export default config;
