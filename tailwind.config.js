module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: {
        "img-home": "url('/src/assets/img_home.png')",
      },
      backgroundColor: (theme) => ({
        ...theme("colors"),
        primary: "#EB1E1E",
        secondary: "#970D0D",
        danger: "#C51818",
        negroAzul: "#00020E",
        colorBoton: "#14213D",
        colorLetras: "#FCA311",
        colorTarjeta: "#E5E5E5",
      }),
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
