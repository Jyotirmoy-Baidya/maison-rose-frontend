/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'primary-pink': '#E299B5',
        'primary-bg': '#0A0B0A',
        'primary-border': '#EFE7D215',
        'primary-text': '#EFE7D2'
      },
      fontFamily: {
        forum: ['"Forum"', 'serif'],
      },
      keyframes: {
        slideDown: {
          '0%': { transform: 'scaleY(0)', opacity: 0 },
          '100%': { transform: 'scaleY(1)', opacity: 1 },
        },
      },
      animation: {
        slideDown: 'slideDown 0.3s ease-out',
      },
      screens: {
        'xs': '475px',
        'sm': '640px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px',
        '2xl': '1536px',
        '4xl': '1920px',
        '5xl': '2280px'
      },
      fontSize: {
        '10xl': '10rem',
        '11xl': '11rem'
      },
      transitionProperty: {
        height: "height",
      },
      maxHeight: {
        40: "10rem",
      },
    },
  },
  plugins: [],
}
