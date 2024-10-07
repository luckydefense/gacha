'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "7a94d45d8b0f133c887aceb34ca3c892",
"assets/AssetManifest.bin.json": "b70877c12f4f80aceef995d109a40e80",
"assets/AssetManifest.json": "b7441b1bc5a4e659edc192877eccb0b4",
"assets/assets/images/background.png": "026208394b87bd419271530ac5f525ed",
"assets/assets/images/Fx_T_Etc_Sprite_44.png": "fc97fb1a4fe3dd90375ac8b964b5306d",
"assets/assets/images/icon_100391_uiprofile.png": "57315ddb4c07b76a5edd7cb037f887ff",
"assets/assets/images/icon_2003_uiprofile.png": "959a2dc91f46062497a26afb7cc0e740",
"assets/assets/images/icon_5114_uiprofile.png": "73abebc2ab583c175367eed3881e2d44",
"assets/assets/images/icon_box_key.png": "119eaad879dea39bab658979550d429d",
"assets/assets/images/icon_profile_150041_cat_2.png": "f0f7cf6d9a844c324e9d478f314610d3",
"assets/assets/images/icon_relic_bamba_doll.png": "2c13c8eab422230badf56cc0a42fc363",
"assets/assets/images/icon_relic_bat.png": "705109e05c0f1b34a0e1dae26aa4c7d9",
"assets/assets/images/icon_relic_bomb.png": "81e29f5921a43a999b3fdc5a7917beb5",
"assets/assets/images/icon_relic_fairy_bow.png": "d188a08a2f86f49b4c30fcec9894739a",
"assets/assets/images/icon_relic_fortress.png": "1aa98208d97f8d53593a759b057e6c64",
"assets/assets/images/icon_relic_gambler_wrist.png": "11cd074c79d4d01be2882035eefaeaf8",
"assets/assets/images/icon_relic_golden_dice.png": "17e5430b2903662410510ddafc0931c7",
"assets/assets/images/icon_relic_golden_hammer.png": "b00cc756a60870aee4a266416eb42816",
"assets/assets/images/icon_relic_golden_pickaxe.png": "b7eae3fdf98878661ad0efc93dd31616",
"assets/assets/images/icon_relic_great_sword.png": "f889f1b5f9ee2b83bdf252709d6ae0b8",
"assets/assets/images/icon_relic_horn.png": "d9f3bec104136f3dc12e83d1d670a31a",
"assets/assets/images/icon_relic_horseshoe.png": "0733826eade5eb5dd21d56ae6b534e20",
"assets/assets/images/icon_relic_king_pigeon.png": "498c32463ee57915ce8c3e53b7bc11db",
"assets/assets/images/icon_relic_lamp.png": "84c65ae500e49afcd49e65075484cf0a",
"assets/assets/images/icon_relic_lucky_stone.png": "e2531f9af12bc929d3ecec7e54ddc724",
"assets/assets/images/icon_relic_magic_gauntlet.png": "509622261004b573f75b351c133ae1cc",
"assets/assets/images/icon_relic_meat.png": "a653a9406622b95000f81a23e89dc2f2",
"assets/assets/images/icon_relic_money_gun.png": "1c8b31b9d106c304e13d8e607bec6470",
"assets/assets/images/icon_relic_old_book.png": "73e630a74d64312afa4312fd98bf087c",
"assets/assets/images/icon_relic_punch_glove.png": "99f2e7d8a3cb936d96c9d8f3a37d4ca9",
"assets/assets/images/icon_relic_receipt.png": "a157b2f4a43dea7146ca9850cfe8b4e0",
"assets/assets/images/icon_relic_sage_yogurt.png": "2c3bb5f3e8d49787ca4a495b31e43176",
"assets/assets/images/icon_relic_shining_lever.png": "25f538ca18dafa824b279ce2654b3055",
"assets/assets/images/icon_relic_skull_stone.png": "8b26f06b14840addce574f1ba5412c47",
"assets/assets/images/icon_relic_snail.png": "1c8d128ccc43df83b6f3a41ddc25afae",
"assets/assets/images/icon_relic_spell_book.png": "45a138c3e68b6b40944b01c853300014",
"assets/assets/images/icon_relic_strength_potion.png": "94bd3ad202aaafe656d9880153c59fde",
"assets/assets/images/icon_relic_tanghulu.png": "0b3642297ba0e32693c89a6f4c9e890f",
"assets/assets/images/icon_relic_vault.png": "e7e0a7ddebedc37fdbc43af3a3ec7ae6",
"assets/assets/images/icon_relic_wallet.png": "e8a5bad5debb7362a5d445ccbd59b620",
"assets/assets/images/icon_relic_wizard_hat.png": "b409b13d3659d883dd50b3a303a10ee6",
"assets/assets/images/profile_150091_frog_9.png": "3c06f48e98f20d5bbf004c34472f6946",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "d492895d12e7214a79548f727fc5a6b5",
"assets/NOTICES": "10ac88098a23231895bacb5bf6ed3d6a",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "66177750aff65a66cb07bb44b8c6422b",
"canvaskit/canvaskit.js.symbols": "9a39ab8aa3d828142935da9efe99b3a2",
"canvaskit/canvaskit.wasm": "afdcccf150b5cba228e27c813548b842",
"canvaskit/chromium/canvaskit.js": "671c6b4f8fcc199dcc551c7bb125f239",
"canvaskit/chromium/canvaskit.js.symbols": "43ec75ce562f82c5dc5be1a738d87e37",
"canvaskit/chromium/canvaskit.wasm": "3909da2fbccad1a2e4a1f42750d24977",
"canvaskit/skwasm.js": "e95d3c5713624a52bf0509ccb24a6124",
"canvaskit/skwasm.js.symbols": "0b8baeff2b4484d2d6be67a7e082f9db",
"canvaskit/skwasm.wasm": "ee4afa1790abb925360fd9519c5194f7",
"canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "f393d3c16b631f36852323de8e583132",
"flutter_bootstrap.js": "c0fb8d0873e5dfc9dafeed21728c7647",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "7507cf42191e2be4550522085109cafb",
"/": "7507cf42191e2be4550522085109cafb",
"main.dart.js": "3d6d4fecdf5adcaa998440abbeb7a19b",
"manifest.json": "598e3a6427286596641a7a655d54d26c",
"version.json": "cb03fdff6cd5054076e4dbe11dce119b"};
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
