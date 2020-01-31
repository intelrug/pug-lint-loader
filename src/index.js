import PugLint from 'pug-lint';
import configFile from 'pug-lint/lib/config-file';
import validateOptions from 'schema-utils';
import { getOptions } from 'loader-utils';

const linter = new PugLint();

const schema = {
  type: 'object',
  properties: {
    emitError: {
      type: 'boolean',
    },
    config: {
      type: 'object',
    },
  },
};

export default function (content) {
  if (this.cacheable) {
    this.cacheable();
  }

  const options = getOptions(this) || {};

  validateOptions(schema, options, '@intelrug/pug-lint-loader');

  if (options.config) {
    linter.configure(options.config);
  } else {
    linter.configure(configFile.load(null, this.rootContext));
  }

  let errors = linter.checkString(content);

  if (errors.length > 0) {
    const emitter = options.emitError ? this.emitError : this.emitWarning;
    errors = errors.reduce((acc, e) => {
      if (e.message.trim()) {
        acc.push(e.message);
      }
      return acc;
    }, []);
    emitter(new Error(`\n${errors.join('\n')}`));
  }
  return content;
}
