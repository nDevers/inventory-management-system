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
          "primary": "#05cbbf",
          "primary-light": "#e1f8f7",
          "secondary": "#edc14c",
          "neutral": "#edc14c",
          "info": "#fbf3db",
          "success": "#fbf3db",
          "warning": "#fbf3db",
          "error": "#fbf3db",
          "accent": "#3b3b3b",
          "neutral": "#6f5f65",
          "base-100": "#ffffff",
        },
      },
      "light",
    ],
  },
  plugins: [require("daisyui", '@tailwindcss/forms', 'tw-elements/dist/plugin', 'flowbite/plugin')],
}
