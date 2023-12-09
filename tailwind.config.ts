/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
    "./layouts/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "my-background-image": "url('/path/to/your/background-image.jpg')",
      },
      colors: {
        main: {
          brand: "#FFBB38",
          off: "#005b1c",
        },
        white: {
          main: "#FFFFFF",
          off: "#FFFAEF",
        },
        black: {
          main: "#000000",
          off: "#222222",
          cool: "#797979",
          soft: "#1D1D1D",
        },
        gray: "#EFEFEF",
        lightGray: "#D3D3D3",
        input: "#8E8E8E",
        lavaRed: "#EF2623",
        lightningYellow: "#FFBB38",
        boulder: "#797979",
        blue: "#3B82F6",
        whiteSmoke: "#F3F5F6",
        greenWhite: "#EAEAEA",
        red: "#EF262C",
        background: "#f8f8f8",
      },
      boxShadow: {
        search:
          "rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px",
      },
    },
  },
  plugins: [],
};
