const APP_PREFIX = 'LetsEatADeal-';     
const VERSION = 'version_01';
const CACHE_NAME = APP_PREFIX + VERSION
const FILES_TO_CACHE = [
  "./index.html",
  "./src/components/Cart/index.js",
  "./src/components/Checkout/index.js",
  "./src/components/Footer/index.js",
  "./src/components/Header/index.js",
  "./src/components/ProductCard/index.js",
  "./src/pages/CustomerDashboard.js",
  "./src/pages/Home.js",
  "./src/pages/Login.js",
  "./src/pages/NoMatch.js",
  "./src/pages/Signup.js",
  "./src/pages/Success.js",
  "./src/pages/VendorDashboard.js",
  "./src/utils/actions.js",
  "./src/utils/auth.js",
  "./src/utils/mutations.js",
  "./src/utils/queries.js",
  "./src/utils/reducers.js",
  "./src/App.css",
  "./src/App.js",
  "./src/App.test.js",
  "./src/index.css",
  "./src/index.js",
  "./src/reportWebVitals.js",
  "./src/setupTests.js"
];

// Respond with cached resources
self.addEventListener('fetch', function (e) {
  console.log('fetch request : ' + e.request.url)
  e.respondWith(
    caches.match(e.request).then(function (request) {
      if (request) { // If cache is available, respond with cache
        console.log('responding with cache : ' + e.request.url)
        return request
      } else {       // If there are no cache, try fetching request
        console.log('file is not cached, fetching : ' + e.request.url)
        return fetch(e.request)
      }

      // You can omit if/else for console.log & put one line below like this too.
      // return request || fetch(e.request)
    })
  )
})

// Cache resources
self.addEventListener('install', function (e) {
  e.waitUntil(
    caches.open(CACHE_NAME).then(function (cache) {
      console.log('installing cache : ' + CACHE_NAME)
      return cache.addAll(FILES_TO_CACHE)
    })
  )
})

// Delete outdated caches
self.addEventListener('activate', function (e) {
  e.waitUntil(
    caches.keys().then(function (keyList) {
      // `keyList` contains all cache names under your username.github.io
      // filter out ones that has this app prefix to create keeplist
      let cacheKeeplist = keyList.filter(function (key) {
        return key.indexOf(APP_PREFIX);
      })
      // Add current cache name to keeplist
      cacheKeeplist.push(CACHE_NAME);

      return Promise.all(keyList.map(function (key, i) {
        if (cacheKeeplist.indexOf(key) === -1) {
          console.log('deleting cache : ' + keyList[i] );
          return caches.delete(keyList[i]);
        }
      }));
    })
  );
});