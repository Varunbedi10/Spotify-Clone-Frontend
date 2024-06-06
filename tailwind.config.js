module.exports = {
  purge: [],
  darkMode: false, // You can also set this to 'media' or 'class' for dark mode functionality
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"], // Fixed the object syntax to array syntax for font families
      },
      height: {
        "1/10": "10%", // Added the missing quotes and corrected percentage syntax
        "9/10": "90%", // Added the missing quotes and corrected percentage syntax
      },
      backgroundColor: {
        "app-black": "#121212",
      },
    },
  },
  variants: {
    extend: {}, // Added the missing comma
  },
  plugins: [],
};
