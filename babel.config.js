module.exports = function(api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      "nativewind/babel",
      "module-resolver",
      {
        alias: {
          "@assets": "./assets",
          "@components": "./components",
          "@screens": "./screens"
        }
      }
    ],
  };
};
