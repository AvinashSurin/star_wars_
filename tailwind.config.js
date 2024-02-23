/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        mytheme: {
          accent: "#000000",
          neutral: "#03DAC6",
          "base-100": "#ffffff", 
          "base-200": "#ffffff66", 
          
          "--rounded-box": "1rem",
          "--rounded-btn": "0.5rem", 
          "--rounded-badge": "1.9rem", 
          "--animation-btn": "0.25s", 
          "--animation-input": "0.2s", 
          "--btn-focus-scale": "0.95", 
          "--border-btn": "1px", 
          "--tab-border": "1px", 
          "--tab-radius": "0.5rem",
        },
      },
    ],
  },
};
