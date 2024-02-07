/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {},
    colors: {
      ...colors,
      transparent: 'transparent',
      current: 'currentColor',
      primary: '#366775',
      secondary: '#244e5a',
      hoverColor: '#a0bfc7',
      btncolor: '#426673',
      frameborder: '#a5b4bf',
      darkBlue900: '#366775',
      darkBlue700: '#498594',
      redShade900: '#f5ad94',
      redShade700: '#f7d0cb',
      mmenuBg: '#fff4f2',
      smokeDark: '#8f8f8f',
      darkBlueBorder: '#1F515B',

      primarydark: '#244B56',
      primarymedium: '#366775',
      primarylight: '#5c8490',
      secondarydark: '#D66D50',
      secondarymedium: '#F7D0CB',
      secondarylight: '#F4AC94',
      manhattan50: '#FDF3F2',
      manhattan100: '#FBE7E5',
      manhattan200: '#F9DCD8',
      manhattan300: '#F7D0CB',
      manhattan400: '#EFB9A9',
      manhattan500: '#F4AC94',
      manhattan600: '#EA9575',
      manhattan700: '#D66D50',
      manhattan800: '#9A4933',
      manhattan900: '#5E2516',

      oracle50: '#F4F9FB',
      oracle100: '#CDDCE1',
      oracle200: '#A6BFC8',
      oracle300: '#80A1AC',
      oracle400: '#5C8490',
      oracle500: '#366775',
      oracle600: '#2D5662',
      oracle700: '#244B56',
      oracle800: '#1B3C46',
      oracle900: '#132D35',

      bluegray50: '#FBFBFD',
      bluegray100: '#F1F5F9',
      bluegray200: '#E2E8F0',
      bluegray300: '#CBD5E1',
      bluegray400: '#94A3B8',
      bluegray500: '#A2B4C0',
      bluegray600: '#475569',
      bluegray700: '#334155',
      bluegray800: '#1E293B',
      bluegray900: '#0F172A',
      /*button grident*/
      brgrdbtn1: '#F6F7F9',
      brgrdbtn2: '#ffffff',
      brsolidbtn: '#E2E5ED',
      brdrbtn1: '#D8DCE6',
      borderbody: '#EAEDF3',
      borderheader: '#EAECEE',
      // ...

      lightgrey:'#6c8f9a',
      grey:'#99a7bb',
      blue:'#226978'
    },
  },
  plugins: [],
}