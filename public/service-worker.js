const DATA_PORTFOLIO = "data-portfolio-v4";

const FILES_TO_CACHE = [
          '/manifest.webmanifest',
          '/Assets/css/newStyle.css',
          '/Assets/Docs/DanielSoledadResume.pdf',
          '/Assets/images/Untitled.png',
          '/Assets/images/logo-2.png',
          '/Assets/images/logo.png',
          '/Assets/images/small-logo.png',
          '/Assets/images/small-logo-2.png',
          '/Assets/images/small-logo-3.png',
          '/Assets/images/burger-example.png',
          '/Assets/images/me.png',
          '/Assets/images/seattle.jpg',
          '/Assets/images/example.png',
          '/Assets/images/movie.png',
          '/Assets/images/Weather-App.png',
          '/Assets/images/My-Team.png',
          '/Assets/js/index.js',
          '/Assets/js/toggle.js'
        ]
// install
self.addEventListener("install", function (evt) {

  evt.waitUntil(
    caches.open(DATA_PORTFOLIO).then((cache) => cache.addAll(FILES_TO_CACHE))
  );

  self.skipWaiting();
});

self.addEventListener("activate", function(evt) {
  evt.waitUntil(
    caches.keys().then(keyList => {
      return Promise.all(
        keyList.map(key => {
          if (key !== DATA_PORTFOLIO) {
            console.log("Removing old cache data", key);
            return caches.delete(key);
          }
        })
      );
    })
  );

  self.clients.claim();
});

self.addEventListener('fetch', function(evt) {
  // code to handle requests goes her
      evt.respondWith(
          caches.match(evt.request).then(response => {
              return response || fetch(evt.request);
            })
      )
});
