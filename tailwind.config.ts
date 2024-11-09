import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        gogh: ["var(--font-gogh)"],
        manrope: ["var(--font-manrope)"],
      },
      screens: {
        tab: "768px",
        laptop: "1280px",
        pc: "1440px",
      },
      colors: {
        yellow: "#FDBD00",
        yellowDark: "#FFA600",
        blue: "#0B70BC",
        blueMedium: "#C1DDF8",
        blueLight: "#8EC6F0",
        backgroundLight: "#D7E8F8",
        grey: "rgba(8, 63, 126, 0.1)",
        black: "#040E2F",
        white: "#FFFEFA",
        inputLabel: "#05304B",
        inputText: "#51626F",
        inputStroke: "#C8C8C8",
        inputError: "#FF3838",
        inputErrorLight: "#FFAFAF",
        facebook: "#1877F2",
        youtube: "#FF0000",
        telegram: "#229ED9",
        viber: "#7458FA",
        whatsapp: "#60D66A",
      },
      fontSize: {
        xs: ["14px", { lineHeight: "20px", fontWeight: "400" }],
        sm: ["16px", { lineHeight: "22px", fontWeight: "400" }],
        smb: ["16px", { lineHeight: "22px", fontWeight: "500" }],
        base: ["18px", { lineHeight: "25px", fontWeight: "400" }],
        baseb: ["18px", { lineHeight: "25px", fontWeight: "500" }],
        xmdb: ["22px", { lineHeight: "30px", fontWeight: "500" }],
        mdb: ["24px", { lineHeight: "32px", fontWeight: "500" }],
        lgb: ["32px", { lineHeight: "40px", fontWeight: "500" }],
        xlb: ["48px", { lineHeight: "56px", fontWeight: "500" }],
      },
      container: {
        center: true,
        padding: {
          DEFAULT: "16px",
          md: "36px",
          xl: "100px",
        },
      },
      boxShadow: {
        base: "-7.67px 7.67px 17.25px 0px rgba(8, 63, 126, 0.15)",
      },
      backgroundImage: {
        sky: "url('/images/bgImages/skyBgImage.webp')",
        headerGradient:
          "linear-gradient(270.01deg, #83B6E3 0%, #84B8E4 11.64%, #82B6E3 25.31%, #84B7E3 37.78%, #87B8E4 50.6%, #82B5E1 77.04%, #76ADDB 99.87%)",
        blueGradient:
          "radial-gradient(50% 50% at 50% 50%, #C1DDF8 0%, rgba(193, 221, 248, 0) 100%)",
        whiteGradient:
          "radial-gradient(50% 50% at 50% 50%, #FFFFFF 0%, rgba(255, 255, 255, 0) 100%)",
      },
      keyframes: {
        rotate: {
          "0%": {
            transform: "rotate(0deg)",
          },
          "100%": {
            transform: "rotate(360deg)",
          },
        },
      },
      animation: {
        rotation: "rotate 1600ms linear infinite",
      },
    },
  },
  plugins: [],
};
export default config;
