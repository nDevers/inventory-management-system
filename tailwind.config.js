/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", './src/**/*.{html,js}', './node_modules/tw-elements/dist/js/**/*.js'
  ],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: [
      {
        simpleInventory: {
          primary: "#a991f7",
          secondary: "#f6d860",
          accent: "#37cdbe",
          neutral: "#3d4451",
          "base-100": "#ffffff",
        },
      },
      "light",
    ],
  },
  plugins: [require("daisyui", '@tailwindcss/forms', 'tw-elements/dist/plugin', 'flowbite/plugin')],
}
