/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend:  {
    height: {
      screen: '100vh',
    },
    fontFamily: {
      serif: ['"EB Garamond"', 'ui-serif', 'Georgia', 'serif'],
    },
  },
  plugins: [require('@tailwindcss/forms')],
},
}
