module.exports = function shopifyTypeScriptPreset() {
  return {
    presets: [
      require.resolve('@babel/preset-typescript'),
    ],
    plugins: [
      require.resolve('@babel/plugin-proposal-decorators'),
    ],
  };
};
