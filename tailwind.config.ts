// tailwind.config.ts (Tailwind v4 - Flat config)
import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: '#1E40AF',
          light: '#3B82F6',
          dark: '#1E3A8A',
        },
        neutral: {
          100: '#f5f5f5',
          900: '#111111',
        },
        danger: '#EF4444',
        primary: '#EE0033',
        background: '#F5F8FA',
        selectBtn: '#F0F3F4',
      },
    },
  },
  plugins: [],
};
export default config;
