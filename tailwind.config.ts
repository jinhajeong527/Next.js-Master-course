import type {Config} from "tailwindcss";
import daisyui from 'daisyui';

const config: Config = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            fontFamily: {
                geistSans: "var(--font-geist-sans)",
            },
            colors: {
                background: "var(--background)",
                foreground: "var(--foreground)",
            },
        },
    },
    plugins: [
        daisyui,
    ],
    daisyui: {
        themes: ["winter"],
    },
};
export default config;
