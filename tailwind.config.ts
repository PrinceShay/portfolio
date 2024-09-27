import type { Config } from "tailwindcss";

const config: Config = {
  

  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      gridTemplateColumns: {
        // added new 4 column grid as new4
        'Benefit': 'repeat(2, minmax(200px, auto))'
        },


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
          50: '#fbf8ff',
          100: '#EFE4FF', //ecdfff
          200: '#E8D7FF', //ddc5ff
          300: '#E0CAFF', //ceacff
          400: '#D8BDFF', //bf93ff
          500: '#B17AFF', //B17AFF
          600: '#473166', //8d61cc
          700: '#35254D', //6a4999
          800: '#231833', //463066
          900: '#120C19', //231832
        },
        "darkBlue": {
          500: '#000017',
          400: '#1a1a2e',
        },
      },
      fontFamily: {
        'amador': ['amador'],
        'humane': ['var(--font-Humane)'],
      }
    },
  },
  plugins: [],
};
export default config;
