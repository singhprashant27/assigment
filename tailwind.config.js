module.exports = {
  mode: "jit",
  content: [
    "./src/**/**/*.{js,ts,jsx,tsx,html,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,html,mdx}",
  ],
  darkMode: "class",
  theme: {
    screens: { md: { max: "1050px" }, sm: { max: "550px" } },
    extend: {
      colors: {
        white: { A700_b2: "#ffffffb2", A700: "#ffffff" },
        red: { 600: "#f01c21" },
        blue_gray: {
          100: "#d9d9d9",
          400: "#8b8b8b",
          "100_01": "#d3d3d3",
          "100_3f": "#d9d9d93f",
          "400_01": "#868686",
        },
        gray: {
          50: "#f8f8f8",
          100: "#f5f5f5",
          200: "#eeeeee",
          300: "#e3e3e3",
          500: "#908f8f",
          600: "#747577",
          800: "#454749",
          900: "#081431",
          "800_01": "#404040",
          "200_01": "#ebebeb",
          "200_02": "#e8e8e8",
          "900_02": "#091431",
          "900_01": "#0c1230",
          "300_01": "#dfdfdf",
        },
        green: { 700: "#3aa515" },
        black: { "900_0a": "#0000000a", "900_11": "#00000011" },
      },
      boxShadow: {
        bs: "4px 4px  60px 0px #0000000a",
        bs1: "6px 6px  60px 0px #00000011",
      },
      fontFamily: {
        metropolis: "Metropolis",
        manrope: "Manrope",
        montserrat: "Montserrat",
      },
      backgroundImage: {
        gradient: "linear-gradient(180deg ,#d9d9d93f,#d9d9d9)",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
