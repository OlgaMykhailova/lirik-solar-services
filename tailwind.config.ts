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
        background: "var(--background)",
        foreground: "var(--foreground)",
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
    },
  },
  plugins: [],
};
export default config;
