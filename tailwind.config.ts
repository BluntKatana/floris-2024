import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--inter)", "ui-sans-serif", "system-ui"],
        mono: ["var(--flow-wotfard)", "ui-monospace", "SFMono-Regular"],
      },
      colors: {
        background: {
          DEFAULT: "hsl(var(--background))",
          /* for svg */
          "svg-top": "hsl(var(--background-svg-top))",
          "svg-middle": "hsl(var(--background-svg-middle))",
          "svg-bottom": "hsl(var(--background-svg-bottom))",
        },
        foreground: "hsl(var(--foreground))",
        header: {
          section: "hsl(var(--header-section))",
        },
        tag: {
          1: {
            DEFAULT: "hsl(var(--tag-1))",
            active: "hsl(var(--tag-1-active))",
          },
          2: {
            DEFAULT: "hsl(var(--tag-2))",
            active: "hsl(var(--tag-2-active))",
          },
        },

        /* other */
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
      },
      brightness: {
        DEFAULT: "var(--image-brightness)",
        hover: "var(--image-brightness-hover)",
      },
      borderRadius: {
        xl: "calc(var(--radius) + 2px)",
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      transitionTimingFunction: {
        "in-out": "var(--transition-in-out)",
      },
      animation: {
        marquee: "marquee 35s linear infinite",
        "marquee-slow": "marquee 50s linear infinite",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-100%)" },
        },
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
export default config;
