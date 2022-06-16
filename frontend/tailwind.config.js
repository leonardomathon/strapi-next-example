/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      sans: ['"Open Sans"'],
      logo: ['"Arkhip"'],
    },
    extend: {
      borderRadius: {
        large: "100px",
      },
      colors: {
        bgblue: {
          DEFAULT: "#364F6B",
          50: "#91ABC8",
          100: "#84A0C1",
          200: "#688CB3",
          300: "#5177A1",
          400: "#446386",
          500: "#364F6B",
          600: "#233346",
          700: "#101820",
          800: "#000000",
          900: "#000000",
        },
        babyblue: {
          DEFAULT: "#3FC1C9",
          50: "#CEEFF1",
          100: "#BEEAED",
          200: "#9FE0E4",
          300: "#7FD6DB",
          400: "#5FCBD2",
          500: "#3FC1C9",
          600: "#2E9CA2",
          700: "#217276",
          800: "#15484B",
          900: "#091E1F",
        },
        pinkred: {
          DEFAULT: "#D83A75",
          50: "#F6D3E0",
          100: "#F3C2D4",
          200: "#ECA0BD",
          300: "#E57EA5",
          400: "#DF5C8D",
          500: "#D83A75",
          600: "#B6245A",
          700: "#871B43",
          800: "#58112C",
          900: "#290815",
        },
      },
      spacing: {
        102: "30rem",
        128: "40rem",
      },
    },
  },
  plugins: [],
}
