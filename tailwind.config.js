/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",],
  theme: {
    screens: {
      //This will help you to set the screen size by yourself
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1280px',

    },
    // This will help you to set spacing by yourself like you can change 1: 8px to any number of pixel you want
    spacing: {
      '1': '8px',
      '2': '12px',
      '3': '16px',
      '4': '24px',
      '5': '32px',
      '6': '48px',
    },

    fontSize: {
      sm: '0.8rem',
      base: '1rem',
      xl: '1.25rem',
      '2xl': '1.563rem',
      '3xl': '1.953rem',
      '4xl': '2.441rem',
      '5xl': '3.052rem',
    },

    // you can create your name for color that you can call in the program that will help you to remember the code
    extend: {
      colors:{
        //vuejs is custom that i put to the code so that whenever i want i can just write bg-vuejs-100 or 932
        vuejs: {
          100:"#31d618",
          932:"#d61818"
        }
      }
      },
  },
  plugins: [],
}
