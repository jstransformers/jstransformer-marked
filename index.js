const marked = require('marked').marked

const transformer = {
  name: 'marked',
  outputFormat: 'html',
  inputFormats: ['marked', 'markdown', 'md'],
}

transformer.render = function (string, options) {
  return marked(string, options)
}

module.exports = transformer