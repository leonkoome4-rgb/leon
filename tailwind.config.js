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
        bg: '#070314',
        ink: '#0c0818',
        pink: '#ff3cac',
        violet: '#9444ff',
        blue: '#2b86c5',
        muted: '#a0a3b8'
      }
    }
  },
  plugins: []
}
