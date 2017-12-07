const browsers = require('./browsers');

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
        loose: true,
        useBuiltIns: true,
      }],
      [require.resolve('./non-standard'), options],
    ],
  };
};
