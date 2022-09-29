const CACHE_NAME = "version-1";

const urlsToCache = [
  "/index.html",
  "/src/css/main.css",
  "/src/js/app.js",
  "/src/assets/icons/cube.svg",
  "/src/assets/images/mee.png",
  "/src/assets/elements/1.png",
  "/src/assets/elements/2.png",
  "/src/assets/elements/3.png",
  "/src/assets/elements/4.png",
  "/src/assets/elements/5.png",
  "/src/assets/elements/6.png",
  "/src/assets/elements/7.png",
  "/src/assets/elements/8.png",
  "/src/assets/elements/9.png",
  "/src/assets/elements/10.png",
  "/src/assets/elements/11.png",
  "/src/assets/elements/12.png",
];

self.addEventListener("install", (installEvent) => {
  installEvent.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      // console.log("Opened cache");
      return cache.addAll(urlsToCache);
    })
  );
});

self.addEventListener("fetch", (fetchEvent) => {
  fetchEvent.respondWith(
    caches.match(fetchEvent.request).then((res) => {
      return res || fetch(fetchEvent.request);
    })
  );
});

self.addEventListener("activate", (event) => {
  const cacheWhiteList = [];
  cacheWhiteList.push(CACHE_NAME);
  event.waitUntil(
    caches.keys().then((cacheNames) =>
      Promise.all(
        cacheNames.map((cacheName) => {
          if (!cacheWhiteList.includes(cacheName)) {
            return caches.delete(cacheName);
          }
        })
      )
    )
  );
});
