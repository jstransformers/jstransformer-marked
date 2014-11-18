'use strict';

var marked = require('marked');

exports.outputFormat = 'html';
exports.compile = function (str, options) {
  return marked(str, options);
};
