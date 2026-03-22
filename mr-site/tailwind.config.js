/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        obsidian: "#020617",
        slatebase: "#0f172a",
        text: {
          primary: "#FFFFFF",
          secondary: "#94A3B8"
        },
        gold: {
          DEFAULT: "#F5C542",
          soft: "#F8DA7A",
          deep: "#C9971E"
        },
        accent: {
          purple: "#8B5CF6"
        }
      },
      boxShadow: {
        glow: "0 0 50px rgba(245, 197, 66, 0.16), 0 0 90px rgba(139, 92, 246, 0.12)"
      },
      backgroundImage: {
        luxury:
          "radial-gradient(circle at top, rgba(245, 197, 66, 0.12), transparent 26%), radial-gradient(circle at 82% 16%, rgba(139, 92, 246, 0.18), transparent 24%), radial-gradient(circle at 20% 80%, rgba(255, 255, 255, 0.04), transparent 20%), radial-gradient(circle at 50% 40%, rgba(15, 23, 42, 0.55), transparent 50%), linear-gradient(135deg, #0f172a 0%, #020617 55%, #020617 100%)"
      }
    }
  },
  plugins: []
};
