const nonStandardPlugins = require('./non-standard-plugins');

module.exports = function shopifyWebPreset(context, options = {}) {
  const {modules = 'commonjs'} = options;

  return {
    presets: [
      [
        require.resolve('babel-preset-env'),
        {
          modules,
          useBuiltIns: true,
          debug: options.debug || false,
        },
      ],
      require.resolve('babel-preset-stage-3'),
    ],
    plugins: nonStandardPlugins(options),
  };
};
