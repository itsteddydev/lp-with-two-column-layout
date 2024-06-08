/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			// 			### Fonts
			fontFamily: {
				// #### Headings, Call- to - actions, Header Navigation
				"heading": ['"Raleway"', "sans-serif"],
				// #### Body
				"body": ['"Open Sans"', "serif"],
			},
			fontWeight: {
				"regular-raleway": 400,
				"bold-raleway": 700,
				// #### Body
				"regular-sans": 400,
			},

			colors: {
				// ### Primary
				"very-dark-dlue": "hsl(243, 87%, 12%)",
				"desaturated-blue": "hsl(238, 22%, 44%)",
				// ### Accent
				"bright-blue": "hsl(224, 93%, 58%)",
				"moderate-cyan": "hsl(170, 45%, 43%)",
				// ### Neutral
				"light-grayish-blue": "hsl(240, 75%, 98%)",
				"light-gray": "hsl(0, 0 %, 75 %)"
			}
		},
	},
	plugins: [],
}
