module.exports = function shopifyTypeScriptPreset() {
  return {
    presets: [
      require.resolve('@babel/preset-typescript'),
    ],
  };
};
