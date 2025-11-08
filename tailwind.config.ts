import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./lib/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "1.5rem",
        md: "2rem",
        lg: "3rem",
        "2xl": "4rem",
      },
    },
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        card: "var(--card)",
        "card-foreground": "var(--card-foreground)",
        popover: "var(--popover)",
        "popover-foreground": "var(--popover-foreground)",
        primary: {
          DEFAULT: "var(--primary)",
          foreground: "var(--primary-foreground)",
        },
        secondary: {
          DEFAULT: "var(--secondary)",
          foreground: "var(--secondary-foreground)",
        },
        muted: {
          DEFAULT: "var(--muted)",
          foreground: "var(--muted-foreground)",
        },
        accent: {
          DEFAULT: "var(--accent)",
          foreground: "var(--accent-foreground)",
        },
        destructive: {
          DEFAULT: "var(--destructive)",
          foreground: "var(--destructive-foreground, #fff)",
        },
        border: "var(--border)",
        input: "var(--input)",
        ring: "var(--ring)",
        saffron: "var(--saffron)",
        maroon: "var(--maroon)",
        jasmine: "var(--jasmine)",
        lotus: "var(--lotus)",
      },
      fontFamily: {
        sans: ["var(--font-sans)", "Inter", "sans-serif"],
        heading: ["var(--font-heading)", "Playfair Display", "serif"],
      },
      borderRadius: {
        xl: "var(--radius-xl)",
        lg: "var(--radius-lg)",
        md: "var(--radius-md)",
        sm: "var(--radius-sm)",
      },
      boxShadow: {
        glow: "0 25px 55px -35px rgba(205, 150, 102, 0.55)",
        "glow-dark": "0 30px 70px -40px rgba(223, 192, 128, 0.45)",
      },
      backdropBlur: {
        soft: "22px",
      },
      backgroundImage: {
        "temple-arch":
          "radial-gradient(circle at top, rgba(255, 255, 255, 0.5), transparent 65%), url('data:image/svg+xml,%3Csvg width=\"160\" height=\"160\" viewBox=\"0 0 160 160\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"%3E%3Cg opacity=\"0.12\"%3E%3Cpath d=\"M0 80L80 0L160 80L80 160L0 80Z\" stroke=\"%23C47A3F\" stroke-width=\"0.8\"/%3E%3Ccircle cx=\"80\" cy=\"80\" r=\"22\" stroke=\"%23C47A3F\" stroke-width=\"0.8\"/%3E%3C/g%3E%3C/svg%3E')",
      },
    },
  },
  plugins: [],
};

export default config;

