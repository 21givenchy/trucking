/** @type {import('tailwindcss').Config} */

const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    screens: {
      xl: '1200px',
    },
    fontFamily: {
      sans: ['Gotham', ...defaultTheme.fontFamily.sans],
    },
    extend: {},
  },
  plugins: [],
};
