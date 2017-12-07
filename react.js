module.exports = function shopifyReactPreset(context, options = {}) {
  const development = options.development == null
    // eslint-disable-next-line no-process-env
    ? (process.env.BABEL_ENV || process.env.NODE_ENV) === 'development'
    : options.development;

  const test = options.test == null
    // eslint-disable-next-line no-process-env
    ? (process.env.BABEL_ENV || process.env.NODE_ENV) === 'test'
    : options.test;

  const plugins = [];

  const presets = [
    [require.resolve('@babel/preset-react'), {
      useBuiltIns: true,
      development,
    }],
  ];

  if (development && options.hot) {
    plugins.unshift(
      // Enable hot loading
      require.resolve('react-hot-loader/babel'),
      // Force `PureComponent`s to be `Component`s instead, which will make it
      // so they always re-render on hot reloads
      require.resolve('babel-plugin-transform-react-pure-to-component')
    );
  }

  if (!test) {
    plugins.push(require.resolve('babel-plugin-react-test-id'));
  }

  return {
    presets,
    plugins,
  };
};
