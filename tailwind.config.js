/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx,scss}'],
  theme: {
    theme: {
      // breakpoints
      screens: {
        sm: '480px',
        md: '768px',
        lg: '976px',
        xl: '1280'
      },
      // fonts
      fontFamily: {
        inter: ['Inter', 'sans-serif']
      },
      fontSize: {
        xs: [
          '0.75rem',
          {
            lineHeight: '1rem'
          }
        ],
        sm: [
          '0.875rem',
          {
            lineHeight: '1.5rem'
          }
        ],
        base: [
          '1rem',
          {
            lineHeight: '1.75rem'
          }
        ],
        lg: [
          '1.62rem', // 26px
          {
            lineHeight: '1.30952em'
          }
        ],
        xl: [
          '1.75rem', // 28px
          {
            lineHeight: '2.5rem'
          }
        ]
      }
    }
  },
  plugins: []
}
