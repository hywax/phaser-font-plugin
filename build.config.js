import { defineBuildConfig } from 'unbuild'

export default defineBuildConfig({
  entries: ['src/index'],
  externals: ['phaser'],
  clean: true,
  rollup: {
    emitCJS: true,
    inlineDependencies: true,
  },
  sourcemap: true,
})
