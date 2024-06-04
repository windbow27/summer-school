module.exports = {
  mode: 'jit',
  theme: {
  },
  variants: {
      extend: {}
  },
  plugins: [
      require('daisyui'),
  ],
  daisyui: {
    themes: ['sunset']
  },
  content: [
      './index.html',
      './src/**/*.{vue,js,ts,jsx,tsx}'
  ]
}
