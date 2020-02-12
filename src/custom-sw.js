self.addEventListener("install", () => {
  console.log("install");
});
self.addEventListener("activate", () => {
  console.log("activate");
});

// We need this in Webpack plugin (refer to swSrc option): https://developers.google.com/web/tools/workbox/modules/workbox-webpack-plugin#full_injectmanifest_config
workbox.precaching.precacheAndRoute(self.__precacheManifest);

// app-shell
workbox.routing.registerRoute(
  new RegExp("https:.*min.(css|js)"),
  workbox.strategies.staleWhileRevalidate({
    cacheName: "cache"
  })
);
