/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  daisyui: {
    themes: [
      {
      mytheme: {
        primary: "#15803d",
        secondary: "#22c55e",
        accent: "#fde047",
        neutral: "#9ca3af",
        "base-100": "#ffffff",
        info: "#93c5fd",
        success: "#bef264",
        warning: "#fb923c",
        error: "#ff0000",
      },
      },
    ],
  },
  plugins: [require("daisyui")],
};
