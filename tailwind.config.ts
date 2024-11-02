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
      },
      colors: {
        yellow: "#FDBD00",
        yellowDark: "#FFA600",
        blue: "#0B70BC",
        blueLight: "#8EC6F0",
        backgroundLight: "#D7E8F8",
        black: "#040E2F",
        white: "#FFFEFA",
        inputLabel: "#05304B",
        inputText: "#51626F",
        inputStoke: "#C8C8C8",
        inputError: "#FF3838",
        inputErrorLight: "#FFAFAF",
        facebook: "#1877F2",
        youtube: "#FF0000",
      },
      fontSize: {
        xs: ["14px", { lineHeight: "20px", fontWeight: "400" }],
        sm: ["16px", { lineHeight: "22px", fontWeight: "400" }],
        smb: ["16px", { lineHeight: "22px", fontWeight: "500" }],
        base: ["18px", { lineHeight: "25px", fontWeight: "400" }],
        baseb: ["18px", { lineHeight: "25px", fontWeight: "500" }],
        mdb: ["24px", { lineHeight: "32px", fontWeight: "500" }],
        lgb: ["32px", { lineHeight: "40px", fontWeight: "500" }],
        xlb: ["48px", { lineHeight: "56px", fontWeight: "500" }],
      },
      container: {
        center: true,
        padding: {
          DEFAULT: "100px",
        },
      },
    },
  },
  plugins: [],
};
export default config;
