module.exports = {
  mode: "jit",
  purge: ["./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: false,
  theme: {
    fontSize: {
      xs: "0.75rem",
      sm: "0.875rem",
      base: "1rem",
      lg: "1.125rem",
      xl: "1.25rem",
      "2xl": "1.5rem",
      "3xl": "1.875rem",
      "4xl": "2.25rem",
      "5xl": "3rem",
      "6xl": "4rem",
    },
    minHeight: {
      0: "0",
      "1/4": "25%",
      ct: "20.5rem",
      "1/2": "50%",
      "3/4": "75%",
      full: "100%",
    },
    maxWidth: {
      "1/4": "25%",
      "1/2": "50%",
      "2/4": "65%",
      "3/4": "75%",
    },
    inset: {
      0: 0,
      ten: "10%",
      sv: "78%",
    },
    extend: {
      colors: {
        gray: {
          100: "#f7fafc",
          200: "#edf2f7",
          300: "#e2e8f0",
          400: "#cbd5e0",
          500: "#a0aec0",
          600: "#718096",
          700: "#4a5568",
          800: "#2d3748",
          900: "#1a202c",
        },
        blue: {
          100: "#ebf8ff",
          200: "#bee3f8",
          300: "#90cdf4",
          400: "#63b3ed",
          500: "#4299e1",
          600: "#3182ce",
          700: "#2b6cb0",
          800: "#2c5282",
          900: "#2a4365",
        },
        black: {
          1: "#2C3E50",
        },
      },
    },
    backgroundColor: (theme) => ({
      ...theme("colors"),

      primary: "#A9C9D4",

      secondary: "#ffed4a",

      danger: "#e3342f",
      hideBg: "rgba(0,0,0,0.2)",
    }),
  },

  variants: {},
  plugins: [],
};
