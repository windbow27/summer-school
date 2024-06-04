import withNuxt from './.nuxt/eslint.config.mjs'

export default withNuxt({
    files: ['**/*.ts', '**/*.tsx'],
    rules: {
      camelcase: 'off',
      semi: 0,
      'vue/multi-word-component-names': 'off',
      indent: [
          'error',
          4
      ],
    }
  },
  
)
