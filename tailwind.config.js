module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}', // Adjust the paths as per your project structure
    './public/index.html',
  
  ],
  darkMode: 'class',
  theme: {
    extend: {},
  },
  plugins: [
    require('daisyui'),
  ],
};