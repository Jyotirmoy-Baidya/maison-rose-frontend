/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
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
    },
  },
  plugins: [],
}

