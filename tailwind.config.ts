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
        tabxl: "1024px",
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
        whiteDark: "#f6f6f4",
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
        xxs: ["12px", { lineHeight: "17px", fontWeight: "400" }],
        xs: ["14px", { lineHeight: "20px", fontWeight: "400" }],
        sm: ["16px", { lineHeight: "22px", fontWeight: "400" }],
        smb: ["16px", { lineHeight: "22px", fontWeight: "500" }],
        base: ["18px", { lineHeight: "25px", fontWeight: "400" }],
        baseb: ["18px", { lineHeight: "25px", fontWeight: "500" }],
        xmdb: ["22px", { lineHeight: "30px", fontWeight: "500" }],
        md: ["24px", { lineHeight: "32px", fontWeight: "400" }],
        mdb: ["24px", { lineHeight: "32px", fontWeight: "500" }],
        xxmdb: ["28px", { lineHeight: "32px", fontWeight: "500" }],
        lgb: ["32px", { lineHeight: "40px", fontWeight: "500" }],
        lg: ["36px", { lineHeight: "50px", fontWeight: "400" }],
        xlb: ["48px", { lineHeight: "56px", fontWeight: "500" }],
        xlbb: ["48px", { lineHeight: "48px", fontWeight: "800" }],
        xxlb: ["56px", { lineHeight: "77px", fontWeight: "500" }],
        xxl: ["64px", { lineHeight: "77px", fontWeight: "400" }],
        xxxl: ["72px", { lineHeight: "99px", fontWeight: "400" }],
        xxxlb: ["72px", { lineHeight: "99px", fontWeight: "800" }],
        xxxxlb: ["80px", { lineHeight: "88px", fontWeight: "800" }],
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
      transitionTimingFunction: {
        gentle: "cubic-bezier(0.47, 0, 0.23, 1.38)",
      },
      backgroundImage: {
        sky: "url('/images/bgImages/skyBgImage.webp')",
        skyLight: "url('/images/bgImages/skyLightBgImage.webp')",
        headerGradient:
          "linear-gradient(270.01deg, #83B6E3 0%, #84B8E4 11.64%, #82B6E3 25.31%, #84B7E3 37.78%, #87B8E4 50.6%, #82B5E1 77.04%, #76ADDB 99.87%)",
        blueGradient:
          "radial-gradient(50% 50% at 50% 50%, #C1DDF8 0%, rgba(193, 221, 248, 0) 100%)",
        whiteGradient:
          "radial-gradient(50% 50% at 50% 50%, #FFFFFF 0%, rgba(255, 255, 255, 0) 100%)",
        yellowGradientDown:
          "linear-gradient(180deg, rgba(255, 232, 165, 0.2) 0%, #FDBD00 100%)",
        yellowGradientUp:
          "linear-gradient(#FDBD00 0%, rgba(255, 232, 165, 0.2) 100%)",
        yellowGradientRight:
          "linear-gradient(-90deg, #FDBD00 0%, rgba(255, 232, 165, 0.2) 100%)",
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
        moveLeft: {
          "0%": {
            transform: "translateZ(0)",
          },
          "100%": {
            transform: "translateX(-18px)",
          },
        },
        moveRight: {
          "0%": {
            transform: "translateZ(0)",
          },
          "100%": {
            transform: "translateX(18px)",
          },
        },
        moveUp: {
          "0%": {
            transform: "translateX(0)",
          },
          "100%": {
            transform: "translateY(-18px)",
          },
        },
        moveDown: {
          "0%": {
            transform: "translateX(0)",
          },
          "100%": {
            transform: "translateY(18px)",
          },
        },
        moveLeftDown: {
          "0%": {
            transform: "translateX(0)",
          },
          "100%": {
            transform: "translateY(9.37px) translateX(-18px)",
          },
        },
        moveLeftUp: {
          "0%": {
            transform: "translateX(0)",
          },
          "100%": {
            transform: "translateY(-9.37px) translateX(-18px)",
          },
        },
        moveRightUp: {
          "0%": {
            transform: "translateX(0)",
          },
          "100%": {
            transform: "translateY(-9.37px) translateX(18px)",
          },
        },
        moveRightDown: {
          "0%": {
            transform: "translateX(0)",
          },
          "100%": {
            transform: "translateY(9.37px) translateX(18px)",
          },
        },
      },
      animation: {
        rotation: "rotate 1600ms linear infinite",
        circlesRight: "moveRight 1s linear infinite both",
        circlesUp: "moveUp 1s linear infinite both",
        circlesLeft: "moveLeft 1s linear infinite both",
        circlesDown: "moveDown 1s linear infinite both",
        circlesLeftDown: "moveLeftDown 1s linear infinite both",
        circlesLeftUp: "moveLeftUp 1s linear infinite both",
        circlesRightUp: "moveRightUp 1s linear infinite both",
        circlesRightDown: "moveRightDown 1s linear infinite both",
      },
    },
  },
  plugins: [],
};
export default config;
