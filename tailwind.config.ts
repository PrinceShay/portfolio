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
          100: '#EFE4FF',
          200: '#E8D7FF',
          300: '#E0CAFF',
          400: '#D8BDFF',
          500: '#B17AFF',
          600: '#473166',
          700: '#35254D',
          800: '#231833',
          900: '#120C19',
        },
        "darkBlue": {
          500: '#000017',
          400: '#1a1a2e',
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
