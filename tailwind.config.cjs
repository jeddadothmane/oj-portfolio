/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        mono: ["Fira Code", "JetBrains Mono", "ui-monospace", "SFMono-Regular", "Menlo", "Monaco", "Consolas", "Liberation Mono", "Courier New", "monospace"]
      },
      colors: {
        terminal: {
          green: "#00FF41",
          blue: "#00BFFF",
          violet: "#9F7AEA"
        }
      },
      boxShadow: {
        "soft-glow": "0 0 30px rgba(0, 255, 65, 0.15)"
      }
    }
  },
  plugins: []
};


