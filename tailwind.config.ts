import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#5cb3cc',
          '50': '#e6f2f5',
          '100': '#b3e0e8',
          '200': '#80cddc',
          '300': '#4db9d0',
          '400': '#1aa6c4',
          '500': '#5cb3cc',
          '600': '#2c95ad',
          '700': '#1e7a90',
          '800': '#105e6e',
          '900': '#024653'
        }
      },
      background: "var(--background)",
      foreground: "var(--foreground)",
      animation: {
        'background-shine': 'background-shine 10s ease-in-out infinite'
      },
      keyframes: {
        'background-shine': {
          '0%, 100%': {
            'background-position': '0% 50%',
            'background-color': '#5CB4CC'
          },
          '20%': {
            'background-color': '#5cb3cc'
          },
          '40%': {
            'background-color': '#2c7a9c'
          },
          '60%': {
            'background-color': '#1e5a73'
          },
          '80%': {
            'background-color': '#2c7a9c'
          }
        }
      },
    },
  },
  plugins: [],
} satisfies Config;
