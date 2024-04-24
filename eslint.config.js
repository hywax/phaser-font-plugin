import antfu from '@antfu/eslint-config'

export default antfu({
  ignores: [
    '.github',
    'dist',
    'node_modules',
  ],
})
