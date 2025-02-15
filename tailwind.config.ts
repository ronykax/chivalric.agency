import type { Config } from "tailwindcss";

export default {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            fontSize: {
                rg: "16px",
                lg: "24px"
            },
            lineHeight: {
                rg: "120%",
                lg: "120%"
            }
        },
        colors: {
            brand: "#229bf3",
            black: "#000",
            white: "#fff",
            transparent: "transparent"
        },
        fontFamily: {
            league: ["League Gothic", "sans-serif"],
            garamond: ["Garamond", "serif"],
        }
    },
    plugins: [],
} satisfies Config;
