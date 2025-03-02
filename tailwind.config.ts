import type { Config } from "tailwindcss";

export default {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        fontSize: {
            sm: "14px",
            rg: "16px",
            lg: "24px",
            xl: "32px",
            "2xl": "56px",
        },
        lineHeight: {
            sm: "150%",
            rg: "120%",
            lg: "120%",
            xl: "120%",
            "2xl": "90%",
        },
        colors: {
            black: "#000",
            white: "#fff",
            brand: "#229bf3",
            brand2: "#0C5FD5",
            brand3: "#0930A4",
            transparent: "transparent"
        },
        fontFamily: {
            league: ["League Gothic", "sans-serif"],
            garamond: ["EB Garamond", "serif"],
        }
    },
    plugins: [],
} satisfies Config;
