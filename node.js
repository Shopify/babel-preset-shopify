module.exports = function shopifyNodePreset(context, options = {}) {
  const {
    version = 'current',
    modules = 'commonjs',
  } = options;

  return {
    presets: [
      [require.resolve('@babel/preset-env'), {
        modules,
        useBuiltIns: true,
        targets: {
          node: version,
        },
      }],
      require.resolve('@babel/preset-stage-3'),
      [require.resolve('./non-standard'), options],
    ],
  };
};
