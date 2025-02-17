const plugin = require('tailwindcss/plugin')

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
        fadeInLeft: {
          '0%': { opacity: '0', transform: 'translateX(-50px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        fadeInRight: {
          '0%': { opacity: '0', transform: 'translateX(50px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        fadeInTop: {
          '0%': { opacity: '0', transform: 'translateY(50px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: {
        float: 'float 3s ease-in-out infinite',
        fadeInLeft: 'fadeInLeft ease-out both',
        fadeInRight: 'fadeInRight ease-out both',
        fadeInTop: 'fadeInTop ease-out both',
      },
      borderRadius: {
        "custom-xl": "0 1rem 0 1rem", // Customizing the corners (tr, tl, br, bl).
        "custom-md": "0 .6rem 0 .6rem", // Customizing the corners (tr, tl, br, bl).
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
  plugins: [
    require("@tailwindcss/typography"),
    plugin(function ({ matchUtilities, theme }) {
      matchUtilities(
        {
          'animate-delay': (value) => ({
            animationDelay: value,
          }),
        },
        { values: theme('transitionDelay') }
      )
    }),
    plugin(function ({ matchUtilities, theme }) {
      matchUtilities(
        {
          'animate-duration': (value) => ({
            animationDuration: value,
          }),
        },
        { values: theme('transitionDuration') }
      )
    }),
  ]
};
