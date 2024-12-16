import { fontFamily } from "tailwindcss/defaultTheme";

/** @type {import('tailwindcss').Config} */
const config = {
  darkMode: ["class"],
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        foreground: "var(--foreground)",
        primary: "var(--primary-foreground)",

        accent: "var(--accent-foreground)",
        card: "var(--card-foreground)",
        destructive: "var(--destructive-foreground)",
        "primary-foreground": "var(--primary-foreground)",
        "muted-foreground": "var(--muted-foreground)",
        "accent-foreground": "var(--accent-foreground)",
        "card-foreground": "var(--card-foreground)",
        "destructive-foreground": "var(--destructive-foreground)",
      },
      backgroundImage: {
        background: "var(--background)",
        primary: "var(--primary)",
        muted: "var(--muted-gradient)",
        accent: "var(--accent)",
        "accent-gradient": "var(--accent-gradient)",
        card: "var(--card)",
        destructive: "var(--destructive)",
        "destructive-gradient": "var(--destructive-gradient)",
      },
      borderRadius: {
        xl: "calc(var(--radius) + 4px)",
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      fontFamily: {
        header: ["var(--font-franklin)", ...fontFamily.sans],
        body: ["var(--font-calibri)", ...fontFamily.sans],
      },
    },
  },
  plugins: [],
};

export default config;
