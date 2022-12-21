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
    boxShadow: {
      'shadowInset': '0 35px 60px -15px rgba(0, 0, 0, 0.3)',
    },
    animation: {
      fadeDown: 'fadeDown 1s ease-in-out forwards',
      fadeUp: 'fadeUp 1s ease-in-out forwards',
      fadeLeft: 'fadeLeft 1s ease-in-out forwards',
      fadeRight: 'fadeRight 1s ease-in-out forwards',
      zoom: 'zoom 1s ease-in-out forwards',
    },
    keyframes: {
      fadeDown: {
        '0%' : { transform: 'translateY(-100%)', opacity: '0'},
        '100%': {transform: 'translateY(0%)', opacity: '1'}
      },
      fadeUp: {
        '0%' : { transform: 'translateY(100%)', opacity: '0'},
        '100%': {transform: 'translateY(0%)', opacity: '1'}
      },
      fadeLeft: {
        '0%' : { transform: 'translateX(-100%)', opacity: '0'},
        '100%': {transform: 'translateX(0%)', opacity: '1'}
      },
      fadeRight: {
        '0%' : { transform: 'translateX(100%)', opacity: '0'},
        '100%': {transform: 'translateX(0%)', opacity: '1'}
      },
      zoom: {
        '0%' : { transform: 'scale(0)', opacity: '0'},
        '100%': {transform: 'scale(1)', opacity: '1'}
      }
    },
  },
  plugins: [],
}
}
