'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "b793a125a5f8e629066c1c5279ed3188",
"assets/AssetManifest.bin.json": "f29eee21d84a56f004b16722f7cb125e",
"assets/AssetManifest.json": "1f48d32d5802a7f004ebaa7b3c2784fc",
"assets/assets/icons/add_quantity.svg": "3a074adc99bbef262334515efcc2586a",
"assets/assets/icons/delete.svg": "79b6eee61f91ca88aca64dcd719a2c7e",
"assets/assets/icons/edit.svg": "6bed0143508bc2a2e6a6f38fb94d9198",
"assets/assets/icons/nav/add.svg": "b0570f71fa69f4a4f6a996905b253119",
"assets/assets/icons/nav/history.svg": "613949e79cb133b0525afdf4a1ef1f72",
"assets/assets/icons/nav/home.svg": "3cb2898b5d29695ddd8d81455fb70b36",
"assets/assets/icons/nav/logout.svg": "5c319dbb6da878c678c7a6a7ea1a0453",
"assets/assets/icons/nav/profile.svg": "145ba422414f4ba9542897a839ff13fe",
"assets/assets/icons/nav/scan.svg": "ca5bc5f69fa166d7d62dd5cac9b0de93",
"assets/assets/icons/nav/search.svg": "9c0f269d6c967a7af138708a4b4dbd98",
"assets/assets/icons/nav/setting.svg": "70f0e4603df558e3d1414387aff35eef",
"assets/assets/icons/nav/task.svg": "672da3da76bf52b25228b7607c3e8dd9",
"assets/assets/icons/nav/ticket.svg": "1c190725ad7801073299e03114c9cb4f",
"assets/assets/icons/payment/qris.svg": "baaa90abb617362b75d39dbfafdd66d0",
"assets/assets/icons/payment/transfer.svg": "e634a1d1fbb1974a74dc0e6fb43d5c26",
"assets/assets/icons/payment/tunai.svg": "dbe2dbdc19722dbfb91ccfd4e58037e1",
"assets/assets/icons/plus.svg": "cf0a7b4aa035c37bf1a6389e4a8e8309",
"assets/assets/icons/reduce_quantity.svg": "49e5c3a64815d0757200f10e130c6932",
"assets/assets/icons/settings/logout.svg": "cbf4365b4e40a6798066c9044541244e",
"assets/assets/icons/settings/printer.svg": "8aadf5bf5edc5daae80157a8d6b3c30e",
"assets/assets/icons/settings/sync-data.svg": "a38b87468e14829f0e63638b5621b062",
"assets/assets/images/back.png": "b93378ebdcd554b899ba66c4b1cb53d6",
"assets/assets/images/dev.jpg": "a3379e1bcd0d0beabd3e22b57eb7cb18",
"assets/assets/images/icon.png": "c3503ef7e74bd941580b3407452f4341",
"assets/assets/images/iconpanah.jpg": "3ab82b74dd6ee5f20ddfcbfb6ab75314",
"assets/assets/images/idn.png": "d216c797241358873bca568607bdcf2a",
"assets/assets/images/logo.jpg": "c644d2be7957a58dd9201ccdb3c77a96",
"assets/assets/images/logo_blue.png": "5d7506ef24eaa1824f9353ef762f86b6",
"assets/assets/images/logo_white.png": "c4d68d7a1e56566e2c08a8b705d9e4e5",
"assets/assets/images/receipt_card.png": "f3481c43a316ac7df5f446b923be23b0",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "e165c23667a0644d5851e27a160cdb89",
"assets/NOTICES": "1ed7d8872c27ca196b59aa2c485d9acf",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/packages/flutter_inappwebview/assets/t_rex_runner/t-rex.css": "5a8d0222407e388155d7d1395a75d5b9",
"assets/packages/flutter_inappwebview/assets/t_rex_runner/t-rex.html": "16911fcc170c8af1c5457940bd0bf055",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "738255d00768497e86aa4ca510cce1e1",
"canvaskit/canvaskit.js.symbols": "74a84c23f5ada42fe063514c587968c6",
"canvaskit/canvaskit.wasm": "9251bb81ae8464c4df3b072f84aa969b",
"canvaskit/chromium/canvaskit.js": "901bb9e28fac643b7da75ecfd3339f3f",
"canvaskit/chromium/canvaskit.js.symbols": "ee7e331f7f5bbf5ec937737542112372",
"canvaskit/chromium/canvaskit.wasm": "399e2344480862e2dfa26f12fa5891d7",
"canvaskit/skwasm.js": "5d4f9263ec93efeb022bb14a3881d240",
"canvaskit/skwasm.js.symbols": "c3c05bd50bdf59da8626bbe446ce65a3",
"canvaskit/skwasm.wasm": "4051bfc27ba29bf420d17aa0c3a98bce",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "383e55f7f3cce5be08fcf1f3881f585c",
"flutter_bootstrap.js": "2decbc5c80869955721dd1cf64a588cd",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "c1fb0c31a4191291d6f37f463b88b4d3",
"/": "c1fb0c31a4191291d6f37f463b88b4d3",
"main.dart.js": "a8d45dfb308a498c3befbea12ccbca42",
"manifest.json": "aa79bd7a4430cf804fea10a543fa6e9a",
"version.json": "6e219987ebc110d8f6d87e34448379f6"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
