if(!self.define){let e,s={};const t=(t,n)=>(t=new URL(t+".js",n).href,s[t]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=t,e.onload=s,document.head.appendChild(e)}else e=t,importScripts(t),s()})).then((()=>{let e=s[t];if(!e)throw new Error(`Module ${t} didn’t register its module`);return e})));self.define=(n,i)=>{const c=e||("document"in self?document.currentScript.src:"")||location.href;if(s[c])return;let o={};const a=e=>t(e,c),r={module:{uri:c},exports:o,require:a};s[c]=Promise.all(n.map((e=>r[e]||a(e)))).then((e=>(i(...e),o)))}}define(["./workbox-de803542"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"app.0392084c.js",revision:null},{url:"assets/css/index-93d5ed24.css",revision:"8d315509e71a935f1335e7a95785a8a1"},{url:"index.html",revision:"276774036e32a39649a6a55445478555"},{url:"registerSW.js",revision:"39cadec8d2b14b331044e14fc0d9aa45"},{url:"assets/fonts/app-icons.ttf",revision:"17ab44485c6648921cd7712d66d68350"},{url:"assets/favicon-a69cfcce.ico",revision:"698c7090ca32fdabd4e67f79db158608"},{url:"manifest.webmanifest",revision:"82ad990f115c279602f8cf019bd34eb5"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html"))),e.registerRoute(/^https:\/\/fonts\.googleapis\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-cache",plugins:[new e.ExpirationPlugin({maxEntries:10,maxAgeSeconds:31536e3}),new e.CacheableResponsePlugin({statuses:[0,200]})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.gstatic\.com\/.*/i,new e.CacheFirst({cacheName:"gstatic-fonts-cache",plugins:[new e.ExpirationPlugin({maxEntries:10,maxAgeSeconds:31536e3}),new e.CacheableResponsePlugin({statuses:[0,200]})]}),"GET")}));
