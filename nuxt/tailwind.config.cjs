module.exports = {
    mode: 'jit',
    content: [
        "./components/**/*.{js,vue,ts}",
        "./layouts/**/*.vue",
        "./pages/**/*.vue",
        "./plugins/**/*.{js,ts}",
        "./app.vue",
        "./error.vue",
      ],
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
  