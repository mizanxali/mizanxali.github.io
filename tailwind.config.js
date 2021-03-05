module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    boxShadow: {
      DEFAULT: '0px 0px 7px 2px rgba(255,255,255,1)',
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
