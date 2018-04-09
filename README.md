# jstransformer-marked

[Marked](http://npm.im/marked) support for [JSTransformers](http://github.com/jstransformers).

[![Build Status](https://img.shields.io/travis/jstransformers/jstransformer-marked/master.svg)](https://travis-ci.org/jstransformers/jstransformer-marked)
[![Coverage Status](https://img.shields.io/codecov/c/github/jstransformers/jstransformer-marked/master.svg)](https://codecov.io/gh/jstransformers/jstransformer-marked)
[![Dependency Status](https://img.shields.io/david/jstransformers/jstransformer-marked/master.svg)](http://david-dm.org/jstransformers/jstransformer-marked)
[![Greenkeeper badge](https://badges.greenkeeper.io/jstransformers/jstransformer-marked.svg)](https://greenkeeper.io/)
[![NPM version](https://img.shields.io/npm/v/jstransformer-marked.svg)](https://www.npmjs.org/package/jstransformer-marked)

## Installation

    npm install jstransformer-marked

## API

```js
let marked = require('jstransformer')(require('jstransformer-marked'));

marked.render('# Hello World!').body
//=> '<h1>Hello World!</h1>'
```

## License

MIT
