# @intelrug/pug-lint-loader

> Pug-lint loader for webpack

## Install

Install `@intelrug/pug-lint-loader` package

```bash
$ yarn add -D @intelrug/pug-lint-loader
```

## Usage

In your webpack configuration

```js
module.exports = {
  // ...
  module: {
    rules: [
      {
        enforce: 'pre',
        test: /\.pug$/,
        exclude: /node_modules/,
        loader: '@intelrug/pug-lint-loader',
        options: {
          config: require('./.pug-lintrc.js'),
        },
      },
    ],
  },
  // ...
}
```

To be safe, you should use `enforce: 'pre'` section to check source files, not modified
by other loaders (like `pug-loader`)

### Options

You can pass [puglint options](https://github.com/pugjs/pug-lint#configuration-file)
using standard webpack [loader options](https://webpack.js.org/configuration/module/#useentry).


#### Errors or Warning?

You can still force this behavior by using `emitError`:

##### `emitError` (default: `false`)

Loader will always return errors if this option is set to `true`.

```js
module.exports = {
  // ...
  module: {
    rules: [
      {
        enforce: 'pre',
        test: /\.pug$/,
        exclude: /node_modules/,
        loader: '@intelrug/pug-lint-loader',
        options: {
          config: require('./.pug-lintrc.js'),
          emitError: true,
        },
      },
    ],
  },
  // ...
}
```

## License
MIT License
