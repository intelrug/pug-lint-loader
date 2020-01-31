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
        loader: '@intelrug/pug-lint-loader'
      }
    ]
  }
  // ...
}
```

To be safe, you should use `enforce: 'pre'` section to check source files, not modified
by other loaders (like `pug-loader`)

### Options

You can pass [pug-lint options](https://github.com/pugjs/pug-lint#configuration-file) in `config` property.
By default the loader will search for the pug-lint config in the root directory of your project.

```js
module.exports = {
  // ...
  module: {
    rules: [
      {
        enforce: 'pre',
        test: /\.pug$/,
        loader: '@intelrug/pug-lint-loader',
        options: {
          config: {
            requireLowerCaseTags: true
          }
        }
      }
    ]
  }
  // ...
}
```

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
        loader: '@intelrug/pug-lint-loader',
        options: {
          emitError: true
        }
      }
    ]
  }
  // ...
}
```

## License
MIT License
