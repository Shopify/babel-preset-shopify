module.exports = function shopifyNonStandardPreset(options = {}) {
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
    require.resolve('@babel/plugin-proposal-decorators'),
  ];

  if (inlineEnv) {
    plugins.push(
      require.resolve('babel-plugin-transform-inline-environment-variables')
    );
  }

  return {plugins};
};
