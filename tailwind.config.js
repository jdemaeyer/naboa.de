/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    fontFamily: {
      'display': ['Raleway'],
      'body': ['Nunito'],
      'emph': ['Josefin Sans'],
    },
    extend: {
			keyframes: {
				slideIn: {
          from: { opacity: 0, transform: "translateY(5%)" },
					to: { opacity: 1, transform: "translateY(0)" },
				},
			},
    },
  },
  plugins: [],
}
