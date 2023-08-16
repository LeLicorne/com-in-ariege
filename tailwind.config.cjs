/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      boxShadow: {
        Navbottom: '0px 4px 4px 0px #F7F7F7;',
        card: 'rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;',
        cardless:
          'rgba(50, 50, 93, 0.25) 0px 3px 17px -5px, rgba(0, 0, 0, 0.3) 0px 3px 11px -8px;',
      },
      colors: {
        primary: '#80CA7A',
      },
    },
  },
  plugins: [],
};
