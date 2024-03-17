import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      spacing: {
        "screen": 'calc(100vw - 20em)',
      },
      colors: {
        "primary": {
          100: '#f9e6ff',
          200: '#edb3ff',
          300: '#e180ff',
          400: '#d54dff',
          500: '#c300ff',
          600: '#8900b3',
          700: '#620080',
          800: '#3a004c',
          900: '#130019',
        },
      },
      fontFamily: {
        'amador': ['amador'],
        'humane': ['Humane'],
      }
    },
  },
  plugins: [],
};
export default config;
