# jstransformer-marked

[Marked](http://npm.im/marked) support for [JSTransformers](http://github.com/jstransformers).

[![Build Status][ci-badge]][ci-url]
[![Coverage Status](https://img.shields.io/codecov/c/github/jstransformers/jstransformer-marked/master.svg)](https://codecov.io/gh/jstransformers/jstransformer-marked)
[![NPM version](https://img.shields.io/npm/v/jstransformer-marked.svg)](https://www.npmjs.org/package/jstransformer-marked)

## Installation

    npm install jstransformer-marked

## API

```js
let marked = require('jstransformer')(require('jstransformer-marked'));

marked.render('# Hello World!').body
//=> '<h1>Hello World!</h1>'

const markedOptions = {}
marked.render('# "Hello World"', markedOptions)
```

## License

MIT

[ci-badge]: https://github.com/jstransformers/jstransformer-marked/actions/workflows/test.yml/badge.svg
[ci-url]: https://github.com/jstransformers/jstransformer-marked/actions/workflows/test.yml