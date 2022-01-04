// Marked 2.1.0 is Node 8 compatible only when required from the lib folder
const marked = require('marked/lib/marked')

exports.name = 'marked'
exports.outputFormat = 'html'
exports.inputFormats = ['marked', 'markdown', 'md']
exports.render = function (string, options) {
  return marked(string, options)
}
