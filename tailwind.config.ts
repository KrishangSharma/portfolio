import plugin from "tailwindcss/plugin";
import type { Config } from "tailwindcss";
import { fontFamily } from "tailwindcss/defaultTheme";

import { default as flattenColorPalette } from "tailwindcss/lib/util/flattenColorPalette";

export default {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        txt: {
          50: "#eae9fc",
          100: "#d4d2f9",
          200: "#a9a5f3",
          300: "#7e78ed",
          400: "#534be7",
          500: "#281fe0",
          600: "#2018b4",
          700: "#181287",
          800: "#100c5a",
          900: "#08062d",
          950: "#040316",
        },
        bgd: {
          50: "#ebebfa",
          100: "#d6d6f5",
          200: "#adadeb",
          300: "#8585e0",
          400: "#5c5cd6",
          500: "#3333cc",
          600: "#2929a3",
          700: "#1f1f7a",
          800: "#141452",
          900: "#0a0a29",
          950: "#050514",
        },
        pirm: {
          50: "#eaeafb",
          100: "#d6d4f7",
          200: "#ada9ef",
          300: "#847ee7",
          400: "#5b54de",
          500: "#3129d6",
          600: "#2821ab",
          700: "#1e1881",
          800: "#141056",
          900: "#0a082b",
          950: "#050415",
        },
        sec: {
          50: "#e7e5ff",
          100: "#cfccff",
          200: "#9e99ff",
          300: "#6e66ff",
          400: "#3d33ff",
          500: "#0d00ff",
          600: "#0a00cc",
          700: "#080099",
          800: "#050066",
          900: "#030033",
          950: "#01001a",
        },
        acc: {
          50: "#e6e5ff",
          100: "#ceccff",
          200: "#9c99ff",
          300: "#6b66ff",
          400: "#3a33ff",
          500: "#0800ff",
          600: "#0700cc",
          700: "#050099",
          800: "#030066",
          900: "#020033",
          950: "#01001a",
        },
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
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
        chart: {
          "1": "hsl(var(--chart-1))",
          "2": "hsl(var(--chart-2))",
          "3": "hsl(var(--chart-3))",
          "4": "hsl(var(--chart-4))",
          "5": "hsl(var(--chart-5))",
        },
      },
      fontFamily: {
        inter: ["var(--font-inter)", ...fontFamily.sans],
        montserrat: ["var(--font-montserrat)", ...fontFamily.sans],
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        slowPulse: {
          "0%, 100%": { transform: "scale(1)" },
          "50%": { transform: "scale(1.25)" },
        },
      },
      animation: {
        "slow-pulse": "slowPulse 5s ease-in-out infinite",
      },
    },
  },
  plugins: [
    require("tailwindcss-animate"),
    addVariablesForColors,
    plugin(function ({ addUtilities }: any) {
      addUtilities({
        ".animate-slow-pulse": {
          animation: "slowPulse 5s ease-in-out infinite",
        },
      });
    }),
  ],
} satisfies Config;

// This plugin adds each Tailwind color as a global CSS variable, e.g. var(--gray-200).
function addVariablesForColors({ addBase, theme }: any) {
  const allColors = flattenColorPalette(theme("colors"));
  const newVars = Object.fromEntries(
    Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
  );

  addBase({
    ":root": newVars,
  });
}
