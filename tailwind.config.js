module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      quicksand: ['Quicksand', 'sans-serif'],
      firacode: ['Fira Code', 'monospace'],
    },
    extend: {
      backgroundImage: {
        'dog-img': "url('/banner.jpg')",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
