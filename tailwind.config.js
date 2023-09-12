module.exports = {
  content: [
    "./pages/*.js",
    "./pages/**/*.js",
    "./components/*.js",
    "./components/**/*.js",
  ],
  theme: {
    boxShadow: {
      sm: "0 1px 2px 0 rgba(0, 0, 0, 0.05)",
      DEFAULT:
        "0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)",
      md: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
      lg: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
      xl: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
      t: "0 -1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)",
      orange: "0px 20px 20px -15px rgba(245,56,56,0.81) ",
      chamoisee: "0px 20px 20px -15px rgba(169, 132, 103,0.81) ",
      "orange-md": "0px 20px 40px -15px rgba(245,56,56,0.81) ",
      "chamoisee-md": "0px 20px 40px -15px rgba(108, 88, 76,0.81) ",
      "umber-md": "0px 20px 40px -15px rgba(169, 132, 103,0.81) ",
      none: "none",
    },
    colors: {
      transparent: "transparent",
      black: {
        500: "#4F5665",
        600: "#0B132A",
      },
      orange: {
        100: "#FFECEC",
        500: "#F53855",
      },
      green: {
        500: "#2FAB73",
      },
      white: {
        300: "#F8F8F8",
        500: "#fff",
      },
      gray: {
        100: "#EEEFF2",
        400: "#AFB5C0",
        500: "#DDDDDD",
      },
      chamoisee: {
        100: "#A98468",
        400: "#A98467",
        500: "#856851",
      },
      parchment: {
        500: "#d1ccb8",
        800: "#8a8262",
      },
      teagreen: {
        100: "#c5cca1",
        400: "#dde5b6",
        500: "#bcc787",
        600: "#b5bf84",
      },
      olivine: {
        100: "#c0d685",
        400: "#bed485",
        500: "#ADC178",
        600: "#768255",
        800: "#484f35",
      },
      umber: {
        500: "#5e4d42",
        600: "#302822",
      },
    },
    extend: {},
  },
  variants: {
    extend: {
      boxShadow: ["active", "hover"],
    },
  },
  plugins: [],
};
