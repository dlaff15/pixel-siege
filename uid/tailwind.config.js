/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        tcu: {
          purple:      '#4D1979',
          'purple-dark':  '#3A1259',
          'purple-light': '#6B2D9E',
          'purple-pale':  '#F3EBF9',
          'purple-50':    '#FAF5FF',
        },
      },
      fontFamily: {
        sans: ['"Sen"', '-apple-system', 'BlinkMacSystemFont', '"Segoe UI"', 'Roboto', 'Helvetica', 'Arial', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
