/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      color: {
        pink: '#F50081',
        blue: '#3F3D56',
        purple: '#8d0f4e'
      },
    },
  },
  plugins: [],
}

