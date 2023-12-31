/** @type {import('tailwindcss').Config} */
// export default {
//   content: [
//     "./index.html",
//     "./src/**/*.{js,ts,jsx,tsx}",
//   ],
//   theme: {
//     extend: {},
//   },
// }
module.exports = {
  plugins: [require('daisyui')],
  daisyui: {
    themes: ['cyberpunk']
  },
    content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}",
  ],
}