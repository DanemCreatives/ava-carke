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
    extend: {
      colors: {
        primary: "#d79a2b",
        secondary: "#5c6e6c",
        google: "#4c8bf5",
        success: "#87c987",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
