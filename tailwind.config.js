 /** @type {import('tailwindcss').Config} */
 module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        bg: '#05060b',
        neon: '#00e5ff',
        electric: '#6c5ce7'
      }
    }
  },
  plugins: []
}
