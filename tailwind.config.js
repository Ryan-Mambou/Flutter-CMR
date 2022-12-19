/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        spaceGrotesk: 'Space Grotesk'
      },
      backgroundImage: {
        bannersvg: "url('/public/images/6.svg')"
    },
  },
  plugins: [],
}
}
