const browsers = require('./browsers');
const nonStandardPlugins = require('./non-standard-plugins');

module.exports = function shopifyWebPreset(context, options = {}) {
  const {modules = 'commonjs'} = options;

  return {
    presets: [
      [require.resolve('@babel/preset-env'), {
        modules,
        useBuiltIns: 'usage',
        targets: {
          browsers: options.browsers || browsers,
        },
      }],
      [require.resolve('@babel/preset-stage-3'), {
        useBuiltIns: true,
      }],
    ],
    plugins: nonStandardPlugins(options),
  };
};
