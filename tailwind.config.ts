import type { Config } from "tailwindcss";

export default {
  darkMode: "class", // Enables dark mode manually with a 'dark' class
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        light: "#E3B600",
        primary: "#750D86",
        dark: "#000000",
        secondary: "#30C067",
      },
      fontFamily: {
        gilroy: ['var(--font-gilroy)'],
        rowdies: ['var(--font-rowdies)'],
      },
    },
  },
  plugins: [],
} satisfies Config;
