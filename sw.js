if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let s=Promise.resolve();return i[e]||(s=new Promise((async s=>{if("document"in self){const i=document.createElement("script");i.src=e,document.head.appendChild(i),i.onload=s}else importScripts(e),s()}))),s.then((()=>{if(!i[e])throw new Error(`Module ${e} didn’t register its module`);return i[e]}))},s=(s,i)=>{Promise.all(s.map(e)).then((e=>i(1===e.length?e[0]:e)))},i={require:Promise.resolve(s)};self.define=(s,a,t)=>{i[s]||(i[s]=Promise.resolve().then((()=>{let i={};const c={uri:location.origin+s.slice(1)};return Promise.all(a.map((s=>{switch(s){case"exports":return i;case"module":return c;default:return e(s)}}))).then((e=>{const s=t(...e);return i.default||(i.default=s),i}))})))}}define("./sw.js",["./workbox-4a677df8"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/git-masters/_next/static/RzgtiP3lgccBEEZdzb6ol/_buildManifest.js",revision:"RzgtiP3lgccBEEZdzb6ol"},{url:"/git-masters/_next/static/RzgtiP3lgccBEEZdzb6ol/_ssgManifest.js",revision:"RzgtiP3lgccBEEZdzb6ol"},{url:"/git-masters/_next/static/chunks/136-bbc429b14eb80a9e3be5.js",revision:"RzgtiP3lgccBEEZdzb6ol"},{url:"/git-masters/_next/static/chunks/527-543c99e6462a7847271c.js",revision:"RzgtiP3lgccBEEZdzb6ol"},{url:"/git-masters/_next/static/chunks/687-a27c916840da52738dbc.js",revision:"RzgtiP3lgccBEEZdzb6ol"},{url:"/git-masters/_next/static/chunks/759-bae2cb5b8b4ba529dfbd.js",revision:"RzgtiP3lgccBEEZdzb6ol"},{url:"/git-masters/_next/static/chunks/framework-2191d16384373197bc0a.js",revision:"RzgtiP3lgccBEEZdzb6ol"},{url:"/git-masters/_next/static/chunks/main-9cf3921cbf04759c8828.js",revision:"RzgtiP3lgccBEEZdzb6ol"},{url:"/git-masters/_next/static/chunks/pages/_app-6c9d6f31dff83cbe0ccd.js",revision:"RzgtiP3lgccBEEZdzb6ol"},{url:"/git-masters/_next/static/chunks/pages/_error-737a04e9a0da63c9d162.js",revision:"RzgtiP3lgccBEEZdzb6ol"},{url:"/git-masters/_next/static/chunks/pages/assignments-7e59d792ff50aea60c15.js",revision:"RzgtiP3lgccBEEZdzb6ol"},{url:"/git-masters/_next/static/chunks/pages/course-materials-8a05971cda6ba97ff60f.js",revision:"RzgtiP3lgccBEEZdzb6ol"},{url:"/git-masters/_next/static/chunks/pages/index-7ecf7a23e3151ffd68e6.js",revision:"RzgtiP3lgccBEEZdzb6ol"},{url:"/git-masters/_next/static/chunks/pages/lectures-228e4862ac163af791e0.js",revision:"RzgtiP3lgccBEEZdzb6ol"},{url:"/git-masters/_next/static/chunks/pages/lectures/%5Bslug%5D-4bee51816bc6865caf76.js",revision:"RzgtiP3lgccBEEZdzb6ol"},{url:"/git-masters/_next/static/chunks/pages/participants-2b89fa0b1ccb2067be44.js",revision:"RzgtiP3lgccBEEZdzb6ol"},{url:"/git-masters/_next/static/chunks/pages/schedule-b4aba951b8e9b8e76478.js",revision:"RzgtiP3lgccBEEZdzb6ol"},{url:"/git-masters/_next/static/chunks/pages/syllabus-5940add0f6fcc7a9d0e2.js",revision:"RzgtiP3lgccBEEZdzb6ol"},{url:"/git-masters/_next/static/chunks/polyfills-a54b4f32bdc1ef890ddd.js",revision:"RzgtiP3lgccBEEZdzb6ol"},{url:"/git-masters/_next/static/chunks/webpack-d342ba9541e8ac540e86.js",revision:"RzgtiP3lgccBEEZdzb6ol"},{url:"/git-masters/_next/static/css/2f519c07d4c21ab15aba.css",revision:"RzgtiP3lgccBEEZdzb6ol"},{url:"/git-masters/assets/favicon/apple-touch-icon-114x114.png",revision:"416b070ee035ebd3a7aeffb45daa1f03"},{url:"/git-masters/assets/favicon/apple-touch-icon-120x120.png",revision:"4127a5c83abd04b5a49f2e5c67075115"},{url:"/git-masters/assets/favicon/apple-touch-icon-144x144.png",revision:"87996f90249db081f1a51cff9e27c101"},{url:"/git-masters/assets/favicon/apple-touch-icon-152x152.png",revision:"6bb78566d9f30ca6c5ac80529009a247"},{url:"/git-masters/assets/favicon/apple-touch-icon-57x57.png",revision:"c202b29965bc96b7042f1d2624b142ea"},{url:"/git-masters/assets/favicon/apple-touch-icon-60x60.png",revision:"6dc370860a40774626686f89a168a361"},{url:"/git-masters/assets/favicon/apple-touch-icon-72x72.png",revision:"580139b50a2267c98d0c595fdac5e239"},{url:"/git-masters/assets/favicon/apple-touch-icon-76x76.png",revision:"f8e5803f1e39c47757badc3b26f01d31"},{url:"/git-masters/assets/favicon/favicon-128.png",revision:"b1a4ad005a32500f15c4b0baf99380a0"},{url:"/git-masters/assets/favicon/favicon-16x16.png",revision:"6dc22ec3f93bd3824c33e7efa4a2d3fd"},{url:"/git-masters/assets/favicon/favicon-196x196.png",revision:"c8baed65062743e5de834d6a2cabc02e"},{url:"/git-masters/assets/favicon/favicon-32x32.png",revision:"cceddea621745d054f577b9545c7ff9a"},{url:"/git-masters/assets/favicon/favicon-96x96.png",revision:"6c742d0bea3c339d3109a0130f49ef3f"},{url:"/git-masters/assets/favicon/favicon.ico",revision:"0cf136be2a580940e849a031d862da93"},{url:"/git-masters/assets/favicon/icon-192x192.png",revision:"8ec67424b10552a78fbb00e598643456"},{url:"/git-masters/assets/favicon/icon-256x256.png",revision:"cfe5248c9c3f46a02133461609ba313c"},{url:"/git-masters/assets/favicon/icon-384x384.png",revision:"fb984cbbabb7ba6ddc67f7cfb14e7cc9"},{url:"/git-masters/assets/favicon/icon-512x512.png",revision:"cba7afa9a8f02e00f5050f9813df1eb5"},{url:"/git-masters/assets/favicon/mstile-144x144.png",revision:"87996f90249db081f1a51cff9e27c101"},{url:"/git-masters/assets/favicon/mstile-150x150.png",revision:"c22990ef848f5bb05aeb05d4258512f7"},{url:"/git-masters/assets/favicon/mstile-310x150.png",revision:"95572e868f6015777da6b4ca14332809"},{url:"/git-masters/assets/favicon/mstile-310x310.png",revision:"8a5a239f555d516e8d7def299808b7cc"},{url:"/git-masters/assets/favicon/mstile-70x70.png",revision:"b1a4ad005a32500f15c4b0baf99380a0"},{url:"/git-masters/assets/lectures/cover.png",revision:"1370080c96ae0cbe5452127ae406c8e5"},{url:"/git-masters/icons/clock-icon.svg",revision:"8728dda8a81bf14f3fedbee72249638a"},{url:"/git-masters/icons/collaboration-icon.svg",revision:"6a3e895e0a70e710d4d6ab3afe60a526"},{url:"/git-masters/icons/git-logo.svg",revision:"ad258a2797abde5045125a5da426f1b2"},{url:"/git-masters/icons/github-icon.svg",revision:"f7208e5aa6c004a74c28ae55f5ea9a20"},{url:"/git-masters/icons/linkedin-icon.svg",revision:"d40192afd85eb7fadb84fdccc00ce587"},{url:"/git-masters/icons/moon-icon.svg",revision:"d4c74f9bf1e514b7ce5e99dafdc38faf"},{url:"/git-masters/icons/nextjs-icon.svg",revision:"216415684148edcd841fb3f31de71418"},{url:"/git-masters/icons/pankod-icon.svg",revision:"176e6ccfea951905114d0c9552be18a6"},{url:"/git-masters/icons/rewrite-text-icon.svg",revision:"c4c12b7e57abe3bcc9a0a5e5f26bcaac"},{url:"/git-masters/icons/snapshot-icon.svg",revision:"4a7714222135d50f3d65b6def85158ef"},{url:"/git-masters/icons/start-icon.svg",revision:"e607ce4bac3d88b2cc234eca701b646f"},{url:"/git-masters/icons/sun-icon.svg",revision:"4a2f0ab3afe1b8801e0b2af3ba143428"},{url:"/git-masters/icons/tools-icon.svg",revision:"aac7ac63100ec1a9f85e6eb2785035fd"},{url:"/git-masters/icons/twitter-icon.svg",revision:"96694b8fd7b2aebcf9d6ad10309bfb48"},{url:"/git-masters/icons/youtube-icon.svg",revision:"08cbf01bf1fde60568ec3a55bfd5d902"},{url:"/git-masters/images/git-cover.jpeg",revision:"4f87a9e45a26616efc90d558bc0eaceb"},{url:"/git-masters/images/pro-git.jpg",revision:"96833ec22bf28560cc0ff3f9bc70e645"},{url:"/git-masters/locales/en/common.json",revision:"b3ae12fa23e351e6fec9742823eff506"},{url:"/git-masters/locales/en/home.json",revision:"2f27422784cf788caaf80b7cd2004f2b"},{url:"/git-masters/locales/tr/common.json",revision:"68ec8620db94264e7306b55a3ea9aefc"},{url:"/git-masters/locales/tr/home.json",revision:"83cb8a20aa0761468f5f2f65c1073ea5"},{url:"/git-masters/manifest.json",revision:"314f40e07f68c887b4908b1440eedea0"},{url:"/git-masters/meta.json",revision:"f63ac13dc556a8f25430ee0d95319335"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/git-masters",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:s,event:i,state:a})=>s&&"opaqueredirect"===s.type?new Response(s.body,{status:200,statusText:"OK",headers:s.headers}):s}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp4)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;const s=e.pathname;return!s.startsWith("/api/auth/")&&!!s.startsWith("/api/")}),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;return!e.pathname.startsWith("/api/")}),new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>!(self.origin===e.origin)),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET")}));
