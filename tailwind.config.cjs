module.exports = {
  mode: 'jit',
  theme: {
      extend: {
          colors: {
          }
      }
  },
  variants: {
      extend: {}
  },
  plugins: [
      require('daisyui')
  ],
  content: [
      './index.html',
      './src/**/*.{vue,js,ts,jsx,tsx}'
  ]
}
