const {marked} = require('marked')

const transformer = {
  name: 'marked',
  outputFormat: 'html',
  inputFormats: ['marked', 'markdown', 'md'],
}

transformer.render = function (string, options) {
  return marked(string, { ...options, async: false })
}

// Marked doesn't really support async rendering, but this enables async walkTokens extensions,
// see https://marked.js.org/using_pro#async
transformer.renderAsync = function (string, options) {
  const rendered = marked(string, {
    ...options,
    async: true,
  })
  if (rendered instanceof Promise) {
    return rendered
  }

  return Promise.resolve(rendered)
}

module.exports = transformer
