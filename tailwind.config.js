module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    container: {
      padding: {
        DEFAULT: "1rem",
        sm: "2rem",
        lg: "4rem",
        xl: "6rem",
        "2xl": "7rem",
      },
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
