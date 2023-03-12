/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "marine-blue": "var(--color-marine-blue)",
        "carbon-blue": "var(--color-carbon-blue)",
        "purplish-blue": "var(--color-purplish-blue)",
        "pastel-blue": "var(--color-pastel-blue)",
        "light-blue": "var(--color-light-blue)",
        "strawberry-red": "var(--color-strawberry-red)",
        "cool-gray": "var(--color-cool-gray)",
        "light-gray": "var(--color-light-gray)",
        magnolia: "var(--color-magnolia)",
        alabaster: "var(--color-alabaster)",
        white: "var(--color-white)",
      },
      gridTemplateRows: {
        // Complex site-specific row configuration
        layout: "auto auto 1fr auto",
      },
    },
  },
  plugins: [],
};
