module.exports = {
  transpileDependencies: ["vuetify"],
  pwa: {
    workboxPluginMode: "InjectManifest",
    workboxOptions: {
      swSrc: "src/service-worker.js",
      exclude: "public/_redirects",
    },
  },
};
