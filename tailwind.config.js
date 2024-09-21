/** @type {import('tailwindcss').Config} */
export default {
  mode: 'jit', // Enable JIT mode
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      gridTemplateColumns:{
        'auto':'repeat(auto-fill, minmax(250px,1fr))',
        'hero':'repeat(auto-fill, minmax(400px,1fr))'
       }
    },
  },
  plugins: [],
}
