// Réseau d'abord (pour recevoir les nouvelles cartes), cache en secours si pas de réseau.
// `cache: 'no-cache'` : GitHub Pages laisse le navigateur garder un fichier 10 minutes ; là, le serveur est toujours interrogé.
// Le numéro de CACHE est changé automatiquement par deployer-memo.js (dossier Formation Cyber) à chaque version.
var CACHE = 'memo-cyber-v7';
var FILES = ['./', 'index.html', 'memo-cyber.json', 'manifest.webmanifest', 'icon-192.png', 'icon-512.png'];

self.addEventListener('install', function (event) {
  event.waitUntil(caches.open(CACHE).then(function (cache) {
    return cache.addAll(FILES.map(function (f) { return new Request(f, { cache: 'reload' }); }));
  }));
  self.skipWaiting();
});

self.addEventListener('activate', function (event) {
  event.waitUntil(caches.keys().then(function (keys) {
    return Promise.all(keys.filter(function (k) { return k !== CACHE; }).map(function (k) { return caches.delete(k); }));
  }));
  self.clients.claim();
});

self.addEventListener('fetch', function (event) {
  if (event.request.method !== 'GET') return;
  if (new URL(event.request.url).origin !== location.origin) return;   // polices Google : le navigateur s'en occupe
  event.respondWith(
    fetch(event.request, { cache: 'no-cache' }).then(function (response) {
      var copy = response.clone();
      caches.open(CACHE).then(function (cache) { cache.put(event.request, copy); });
      return response;
    }).catch(function () {
      return caches.match(event.request, { ignoreSearch: true });
    })
  );
});
