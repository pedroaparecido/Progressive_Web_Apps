const OFF_URL = '/offline.html'

// eslint-disable-next-line no-restricted-globals
self.addEventListener("install", (event) => { 
    event.waitUntil(
      caches
        .open("v1")
        .then((cache) =>
          cache.addAll([
            "/",
            "bundle.js",
            "/index.html",
            "/main.css",
            "/index.css",
            "img/avatars.png",
            "img/botoes.png",
            "img/favicon.ico",
            "img/logo.png",
          ]),
        ),
    );
});

// eslint-disable-next-line no-restricted-globals
self.addEventListener("fetch", (event) => {
    if (event.request.mode === 'navigate') {
      event.respondWith(
        fetch(event.request)
        .catch(() => caches.match(OFF_URL))
      )
    } else {
      event.respondWith(caches.match(event.request)
      .then((response) => {
        if (response) {
          return response
        }
        return fetch(event.request)
      }));
    }
});

// eslint-disable-next-line no-restricted-globals
self.addEventListener("activate", (event) => {
    const cacheAllowlist = ["v1"];
  
    event.waitUntil(
      caches.keys().then((cacheNames) => {
        return Promise.all(
          cacheNames.filter((cacheName) => cacheName !== cacheAllowlist)
          .map((cacheName) => caches.delete(cacheName)),
        );
      }),
    );
});  