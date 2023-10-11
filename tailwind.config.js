/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./components/**/*.{jsx,tsx}", "./app/**/*.{jsx,tsx}"],
	theme: {
		extend: {
			backgroundImage: {
				"gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
				"gradient-conic":
					"conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
			},
		},
	},
	plugins: [],
};
