import { dark } from '@svelteuidev/core/*';

/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			colors: {
				text: '#e4dafb',
				background: '#1a0b3b',
				'background-dark': '#0d0421',
				primary: '#5017d3',
				secondary: '#0f2d09',
				accent: '#532fa7'
			}
		}
	},
	plugins: []
};
