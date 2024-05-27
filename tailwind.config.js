/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'great-vibes': 'Great Vibes',
        'roboto': 'Roboto Serif'
      },
      colors: {
        'deep-slate-blue' : 'hsla(127, 8%, 14%, 1)',
        'dark-emerald' : 'hsla(200, 10%, 20%, 1)',
        'dark-orange-red' : 'hsla(20, 8%, 15%, 1)',
        'dark-azure-blue' : 'hsla(240, 8%, 12%, 1)',
        'dark-lime-yellow' : 'hsla(45, 8%, 13%, 1)',
        'dark-magenta-red': 'hsla(320, 8%, 14%, 1)',
        'sunflower-yellow' : 'hsla(46, 100%, 56%, 1)',
        'crimson-red' : 'hsla(348, 83%, 50%, 1)',
        'ocean-blue' : 'hsla(206, 66%, 45%, 1)',
        'emerald-green' : 'hsla(145, 63%, 41%, 1)',
        'lavender-purple' : 'hsla(270, 60%, 70%, 1)'
      }
    },
  },
  plugins: [],
}