/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      cromisom: ["Cromisom Pro", "sans-serif"],
      bentham: ["Bentham", "serif"],
      sans: ["Noto Sans", "sans-serif"],
      josefin: ["Josefin Sans", "sans-serif"],
    },
    extend: {
      colors: {
        pinkOrange: "#F89880",
        salmon: "#FA8072",
        thistle: "#D8BFD8",
        pumpkinOrange: "#FF7518",
        safetyOrange: "#FF5F15",
        orchid: "#DA70D6",
        mauve: "#E0B0FF",
        cranberry: "#D6536D",
        narvik: "#EBE9E1",
        millerPink: "#FFA2B6",
        raspberry: "#E30B5C",
        denim: "#6F8FAF",
        cornflowerBlue: "#6495ED",
        iris: "#5D3FD3",
        jade: "#00A36C",
        limeGreen: "#32CD32",
        shamrockGreen: "#009E60",
        camel: "#C19A6B",
        glaucous: "#6082B6",
        eggshell: "#F0EAD6",
        midnightBlue: "#191970",
        lightBlue: "#ADD8E6",
        azure: "#F0FFFF",
        desert: "#FAD5A5",
        chocolate: "#7B3F00",
        columbiaBlue: "#B9D9EB",
        beige: "#F5F5DC",
        astrosNavy: "#002D62",
      },
      height: {
        128: "32rem", // 512px
        144: "36rem", // 576px
      },
    },
  },

  plugins: [],
};
