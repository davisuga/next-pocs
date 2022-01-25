module.exports = {
  webpack: (config) => {
    config.experiments = {
      topLevelAwait: true,
      asyncWebAssembly: true,
      layers: true,
    };
    return config;
  },
};
