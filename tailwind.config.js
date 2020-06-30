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
        green: "#49c78c",
      },
    },
  },
  purge: ["./pages/**/*.ts", "./src/components/**/*.ts"],
};
