/* eslint-disable no-undef */
workbox.core.skipWaiting();
workbox.core.clientsClaim();

self.__precacheManifest = [].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {
  ignoreURLParametersMatching: [/.*/],
});
