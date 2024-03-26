import plugin from "tailwindcss/plugin";

/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
		},
		colors: {
			surface: "#141218",
			text: "#E6E0E9",
			primary: "#D0BCFF",
			primaryText: "#381E72"
		}
	},
	plugins: [
		plugin(function({addBase, theme}) {
			addBase({
				'a': {
					textDecoration: 'underline',
					textDecorationColor: 'currentColor',
				},
				'h2': {
					fontSize: theme('fontSize.2xl'),
					marginTop: theme('margin.4'),
					marginBottom: theme('margin.2'),
				},
				'hr': {
					marginTop: theme('margin.4'),
					marginBottom: theme('margin.4'),
				}
			})
		})
	],
}
