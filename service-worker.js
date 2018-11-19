/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/3.6.3/workbox-sw.js");

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "157c9d1e15b2069a5532d9c654fe77ee"
  },
  {
    "url": "about/index.html",
    "revision": "4297b6163102af7bed4ae9fc2b9e8ffe"
  },
  {
    "url": "assets/css/0.styles.a4243398.css",
    "revision": "b2da6395c1fec3f3ff868cc56688c534"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.3cb788f3.js",
    "revision": "2f5a1ef9efffc847323f0461cd0612a3"
  },
  {
    "url": "assets/js/11.e5d294f8.js",
    "revision": "1dab6b81c7fc7712bada7facbad439cc"
  },
  {
    "url": "assets/js/12.e81dba30.js",
    "revision": "4c6a99e37bb3746cffa5a2a6c5b3a19f"
  },
  {
    "url": "assets/js/13.c07b6212.js",
    "revision": "ae1f5a00892abd0a215284859695f2b3"
  },
  {
    "url": "assets/js/14.0d9915b1.js",
    "revision": "fc0d686ffc74dea028f768b43f3b0f04"
  },
  {
    "url": "assets/js/15.4b787718.js",
    "revision": "8985dedc427e8ff3e8d63227a98d5a1c"
  },
  {
    "url": "assets/js/16.eebdeb45.js",
    "revision": "9f600292c77dec12502776bba69a651c"
  },
  {
    "url": "assets/js/17.39fea8f2.js",
    "revision": "27ba5a6f24bea1270cb9c71c366594a3"
  },
  {
    "url": "assets/js/18.8baef8f6.js",
    "revision": "9d28c8c7ca2bc61d27f2160a9c41a5d8"
  },
  {
    "url": "assets/js/19.1c54f7d2.js",
    "revision": "ebfd698e43b4e47775bf8e85ac470135"
  },
  {
    "url": "assets/js/2.0924d81d.js",
    "revision": "2ca2f5afed51f8cf5e0e52e8441a4d7c"
  },
  {
    "url": "assets/js/20.7aeb6d42.js",
    "revision": "33e5f193bbdf78f92ceaf2b14a3ae3d6"
  },
  {
    "url": "assets/js/21.a4ee2d19.js",
    "revision": "3d7a524c8d6f669dc54930806be62530"
  },
  {
    "url": "assets/js/3.5d05f9f0.js",
    "revision": "b88ded82efd665dc46d140feffe81dd3"
  },
  {
    "url": "assets/js/4.aacbbf12.js",
    "revision": "735eb9c58931843af87ba8aba7d9f1b9"
  },
  {
    "url": "assets/js/5.98d1fb19.js",
    "revision": "055a3b605371cf162164e923d452aeae"
  },
  {
    "url": "assets/js/6.31b73d84.js",
    "revision": "a0e1924d2904fa6f8960d4f08d516985"
  },
  {
    "url": "assets/js/7.e666d66b.js",
    "revision": "92556ceb3a0614d06608d1c93404c29c"
  },
  {
    "url": "assets/js/8.fc31b989.js",
    "revision": "d4bf3ca069ba75f6e07fa59867ca8124"
  },
  {
    "url": "assets/js/9.33ba7398.js",
    "revision": "46fe19c1237e7154f166001d696a3d04"
  },
  {
    "url": "assets/js/app.65204a78.js",
    "revision": "1901408662d6118c24e1819e9daed981"
  },
  {
    "url": "cases/glider/index.html",
    "revision": "6ac4566e40cab29f0f4ee364a9621516"
  },
  {
    "url": "cases/upython/index.html",
    "revision": "c9dba5f3035d23c7fd92891e2d24fce8"
  },
  {
    "url": "guide/assets.html",
    "revision": "3a9a626aa06f880aa6a4a65a57ae7f70"
  },
  {
    "url": "guide/basic-config.html",
    "revision": "c8d60745678e7e30a5fd8ced7e858225"
  },
  {
    "url": "guide/custom-themes.html",
    "revision": "6ba1935c8d731530baed420373b40e79"
  },
  {
    "url": "guide/deploy.html",
    "revision": "b5cb8625d95667188cdb389c46174ec9"
  },
  {
    "url": "guide/getting-started.html",
    "revision": "e89863198a43b9790aca084d706c7537"
  },
  {
    "url": "guide/i18n.html",
    "revision": "cb3f6c9f66878bd8c3b69848ad3402b2"
  },
  {
    "url": "guide/index.html",
    "revision": "11eaf1208057c576782d69705b34e456"
  },
  {
    "url": "guide/markdown.html",
    "revision": "950a7971a8186515ea2fb19e9e2f950a"
  },
  {
    "url": "guide/using-vue.html",
    "revision": "52e263c75393232c7d37948c5bf7aa7f"
  },
  {
    "url": "help/index.html",
    "revision": "7fe13213800eb0908770b4e1ea91a70e"
  },
  {
    "url": "icons/android-chrome-192x192.png",
    "revision": "f130a0b70e386170cf6f011c0ca8c4f4"
  },
  {
    "url": "icons/android-chrome-512x512.png",
    "revision": "0ff1bc4d14e5c9abcacba7c600d97814"
  },
  {
    "url": "icons/apple-touch-icon-120x120.png",
    "revision": "936d6e411cabd71f0e627011c3f18fe2"
  },
  {
    "url": "icons/apple-touch-icon-152x152.png",
    "revision": "1a034e64d80905128113e5272a5ab95e"
  },
  {
    "url": "icons/apple-touch-icon-180x180.png",
    "revision": "c43cd371a49ee4ca17ab3a60e72bdd51"
  },
  {
    "url": "icons/apple-touch-icon-60x60.png",
    "revision": "9a2b5c0f19de617685b7b5b42464e7db"
  },
  {
    "url": "icons/apple-touch-icon-76x76.png",
    "revision": "af28d69d59284dd202aa55e57227b11b"
  },
  {
    "url": "icons/apple-touch-icon.png",
    "revision": "66830ea6be8e7e94fb55df9f7b778f2e"
  },
  {
    "url": "icons/favicon-16x16.png",
    "revision": "4bb1a55479d61843b89a2fdafa7849b3"
  },
  {
    "url": "icons/favicon-32x32.png",
    "revision": "98b614336d9a12cb3f7bedb001da6fca"
  },
  {
    "url": "icons/msapplication-icon-144x144.png",
    "revision": "b89032a4a5a1879f30ba05a13947f26f"
  },
  {
    "url": "icons/mstile-150x150.png",
    "revision": "058a3335d15a3eb84e7ae3707ba09620"
  },
  {
    "url": "icons/safari-pinned-tab.svg",
    "revision": "f78c0251d6ddd56ee219a1830ded71b4"
  },
  {
    "url": "index.html",
    "revision": "a0ab641a9b6ea9186ad53115274d0744"
  },
  {
    "url": "line-numbers-desktop.png",
    "revision": "7c8ccab7c4953ac2fb9e4bc93ecd25ac"
  },
  {
    "url": "line-numbers-mobile.gif",
    "revision": "580b860f45436c9a15a9f3bd036edd97"
  },
  {
    "url": "logo.png",
    "revision": "c926d404697c1dc1b2ef0a0d12eb3f2c"
  },
  {
    "url": "upython.png",
    "revision": "c926d404697c1dc1b2ef0a0d12eb3f2c"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
