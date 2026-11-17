import type { Config } from "tailwindcss";

const c = (v: string) => `rgb(var(${v}) / <alpha-value>)`;

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./content/**/*.ts"],
  theme: {
    extend: {
      colors: {
        cream: c("--bg"), // #FAF8F5
        ink: c("--fg"), // #2D312E
        sage: c("--sage"), // #6B8E78 (decorativo)
        sagetext: c("--sagetext"), // salvia accesible para texto/bordes
        sagedeep: c("--sagedeep"),
        terra: c("--terra"), // #D48C70
        card: c("--card"),
        muted: c("--muted"),
      },
      fontFamily: {
        display: ["var(--font-fraunces)", "Georgia", "serif"],
        sans: ["var(--font-jakarta)", "system-ui", "sans-serif"],
      },
      keyframes: {
        pop: { from: { opacity: "0", transform: "translateY(12px) scale(.98)" }, to: { opacity: "1", transform: "none" } },
        fade: { from: { opacity: "0" }, to: { opacity: "1" } },
      },
      animation: { pop: "pop .25s ease-out", fade: "fade .2s ease-out" },
    },
  },
  plugins: [],
};
export default config;
