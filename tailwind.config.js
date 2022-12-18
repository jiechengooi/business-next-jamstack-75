
/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: "class",
    content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
    theme: {
      extend: {
        maxWidth: {
          container: '90rem',
          'container-padding': '69.375rem',
        },
        screens: {
          'md': "830px", 
        },
      },
      fontFamily: {
        'sans-serif': "'Lato', sans-serif",
      },
    },
    plugins: [],
  };