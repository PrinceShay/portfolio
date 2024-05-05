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
          100: '#fbefff',
          200: '#f3d0ff',
          300: '#ecb1ff',
          400: '#e492ff',
          500: '#d863ff',
          600: '#9745b3',
          700: '#6c3280',
          800: '#411e4c',
          900: '#160a19',
        },
        "darkBlue": `#000116`
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
