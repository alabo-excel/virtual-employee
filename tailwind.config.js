module.exports = {
  content: [
    './index.html',
    './src/**/*.{vue,jsx,ts,js}',
  ],
  theme: {
    extend:{
      colors:{
        'dark-blue': '#1B1C4A',
        'blue': '#010AE8',
        "light": "#F1F9FB"
      },
      spacing: {
        '100': '25rem;',
        '120': '29rem;',
        '150': '42rem;',
      }
    },
    borderRadius: {
      'none': '0',
      'sm': '0.125rem',
      'md': '0.375rem',
      'lg': '0.5rem',
      '3xl': '1.5rem',
      'full': '9999px',
      'large': '99px',
    },
    screens: {
      'sm': { 'max': '700px' },
      'md': '700px',
      'lg': '1024px',
      'xl': '1280px',
    }
  },
  plugins: [],
}
