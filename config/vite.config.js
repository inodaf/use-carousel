const path = require('path')

module.exports = {
  build: {
    outDir: path.join(__dirname, '../dist'),
    lib: {
      entry: path.join(__dirname, '../src/index.ts'),
      name: 'useCarousel',
    },
    rollupOptions: {
      external: ['react', 'react-dom'],
      output: { globals: { react: 'React' } },
    },
  },
}
