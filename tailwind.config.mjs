export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        main: "#182C72",
        secondary: "#0C216B",
        tertiary: "#37DEAD",
        dark: "#011A51",
        white: "#fff",
        black: "#000"
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
      animation: {
        float: 'float 3s ease-in-out infinite',
      },
      borderRadius: {
        "custom-xl": "0 1rem 0 1rem", // Customizing the corners (tr, tl, br, bl).
        "custom-sm": "0 .3rem 0 .3rem" // Customizing the corners (tr, tl, br, bl).
      },
      backgroundImage: {
        "card-bg": "url('/img/card-bg.svg')"
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"]
      },
      typography: (theme) => ({
        DEFAULT: {
          css: {
            fontFamily: theme("fontFamily.poppins").join(", ")
          }
        }
      })
    }
  },
  plugins: [require("@tailwindcss/typography")]
};
