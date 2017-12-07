module.exports = function shopifyFlowPreset() {
  return {
    presets: [
      require.resolve('@babel/preset-flow'),
    ],
  };
};
