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
		backgroundImage: {
			'card-bg': "url('/img/card-bg.svg')",
		},
		fontFamily: {
		  poppins: ["Poppins", "sans-serif"]
		},
		typography: (theme) => ({
		  DEFAULT: {
			css: {
			  fontFamily: theme('fontFamily.poppins').join(', '),
			},
		  },
		})
	  }
	},
	plugins: [
	  require('@tailwindcss/typography')
	]
  };
  