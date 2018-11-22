module.exports = function shopifyNonStandardPlugins(options = {}) {
  const {inlineEnv = false} = options;

  const plugins = [
    require.resolve('@babel/plugin-proposal-class-properties'),
    require.resolve('@babel/plugin-syntax-dynamic-import'),
  ];

  if (inlineEnv) {
    plugins.push(
      require.resolve('babel-plugin-transform-inline-environment-variables'),
    );
  }

  return plugins;
};
