/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "primary": "#ff0707"
      },
      backgroundImage: {
        "tech": "url('./assets/tech.png')",
        "tech2": "url('./assets/tech2.png')",
      }
    },
  },
  plugins: [],
}
