module.exports = {
  theme: {
    container: {
      center: true,
      padding: "2.5rem",
    },
    screens: {
      sm: "640px",
      md: "768px",
    },
    fontFamily: {
      sans: ["Quicksand", "Arial", "sans-serif"],
    },
    extend: {
      width: {
        768: "768px",
      },
    },
  },
  purge: ["./pages/**/*.ts", "./src/components/**/*.ts"],
};
