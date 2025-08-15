import type { Config } from "tailwindcss";

export default {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: "#0B1B2B",
        orange: "#FF5C1A",
        offwhite: "#F6F7FB",
      },
      container: {
        center: true,
        padding: "1rem"
      }
    },
  },
  plugins: [],
} satisfies Config;
