/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      size: {
        '2': '0.5rem',
        '4': '1rem',
        '5': '1.25rem',
        '6': '1.5rem',
        '8': '2rem',
        '10': '2.5rem',
        '12': '3rem',
        '16': '4rem',
      },
      colors: {
        primary: "var(--color-primary)",
        "background-light": "var(--color-background-light)",
        "background-dark": "var(--color-background-dark)",
        "text-light": "var(--color-text-light)",
        "text-dark": "var(--color-text-dark)",
        "accent-light": "var(--color-accent-light)",
        "accent-dark": "var(--color-accent-dark)",
        "border-light": "var(--color-border-light)",
        "border-dark": "var(--color-border-dark)",
        "surface-light": "var(--color-surface-light)",
        "surface-dark": "var(--color-surface-dark)",
        "muted-light": "var(--color-muted-light)", 
        "muted-dark": "var(--color-muted-dark)",
        "subtle-light": "var(--color-subtle-light)",
        "subtle-dark": "var(--color-subtle-dark)",
      },
      fontFamily: {
        display: ["var(--font-work-sans)", "var(--font-lexend)", "var(--font-spline-sans)", "sans-serif"]
      },
      container: {
        center: true,
        padding: {
          DEFAULT: "1rem",
          sm: "1.5rem",
          lg: "2rem",
          xl: "2.5rem",
        },
      },
    },
  },
  darkMode: "class",
  plugins: [
    require('@tailwindcss/forms'),
  ],
}