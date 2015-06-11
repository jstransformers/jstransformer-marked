# jstransformer-marked

[Marked](http://npm.im/marked) support for [JSTransformers](http://github.com/jstransformers).

[![Build Status](https://img.shields.io/travis/jstransformers/jstransformer-marked/master.svg)](https://travis-ci.org/jstransformers/jstransformer-marked)
[![Coverage Status](https://img.shields.io/coveralls/jstransformers/jstransformer-marked/master.svg)](https://coveralls.io/r/jstransformers/jstransformer-marked?branch=master)
[![Dependency Status](https://img.shields.io/david/jstransformers/jstransformer-marked/master.svg)](http://david-dm.org/jstransformers/jstransformer-marked)
[![NPM version](https://img.shields.io/npm/v/jstransformer-marked.svg)](https://www.npmjs.org/package/jstransformer-marked)

## Installation

    npm install jstransformer-marked

## API

```js
var marked = require('jstransformer')(require('jstransformer-marked'))

foo.render('# Hello World!').body
//=> '<h1>Hello World!</h1>'
```

## License

MIT
