module.exports = {
  theme: {
    container: {
      center: true,
      padding: "2.5rem",
    },
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
    },
    fontFamily: {
      sans: ["Quicksand", "Arial", "sans-serif"],
    },
    extend: {
      width: {
        "768": "calc(768px - 5rem)",
        "1024": "calc(1024px - 5rem)",
      },
      colors: {
        white: "#ffffff",
        gray: {
          lighter: "#eeeeee",
          light: "#e5e5e5",
          dark: "#a9b0a7",
        },
        green: {
          light: "#81e3b5",
          dark: "#49c78c",
        },
      },
      boxShadow: {
        "inner-lg": "inset 0 0px 45px 0 rgba(0, 0, 0, 0.2)",
      },
    },
  },
  purge: ["./pages/**/*.ts", "./src/components/**/*.ts"],
};
