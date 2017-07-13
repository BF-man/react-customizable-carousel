module.exports = {
  plugins: [
    require('postcss-import')({ skipDuplicates: true }),
    require('postcss-cssnext')
  ]
}
