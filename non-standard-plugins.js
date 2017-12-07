module.exports = function shopifyNonStandardPlugins(options = {}) {
  const {inlineEnv = false} = options;

  const plugins = [
    [
      require.resolve('@babel/plugin-transform-runtime'),
      {
        helpers: true,
        polyfill: false,
        regenerator: true,
      },
    ],
  ];

  if (inlineEnv) {
    plugins.push(
      require.resolve('babel-plugin-transform-inline-environment-variables')
    );
  }

  return plugins;
};
