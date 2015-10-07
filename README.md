# babelify-slowdown
An example of babelify slowing down over time.

## How to reproduce slowdown

### Install
```bash
git clone https://github.com/synthecypher/babelify-slowdown
cd babelify-slowdown
npm install
npm start
```

### Edit

If you edit either `index.js` or `bug.js` or even just save the file without making changes you'll see that the time it takes to build the `bundle.js` gradually takes longer and longer.

#### Output
```bash
> npm start

> babelify-slowdown@1.0.0 start /Users/synthecypher/Projects/babelify-slowdown
> gulp

[23:21:01] Using gulpfile ~/Projects/babelify-slowdown/gulpfile.js
[23:21:01] Starting 'browser-sync'...
[23:21:01] Finished 'browser-sync' after 6.2 ms
[23:21:01] Starting 'watch-scripts'...
[23:21:01] 🕒  Building Scripts...
[BS] Access URLs:
------------------------------------
      Local: http://localhost:3000
   External: http://192.168.0.2:3000
------------------------------------
         UI: http://localhost:3001
UI External: http://192.168.0.2:3001
------------------------------------
[BS] Serving files from: ./dist
[23:21:02] ✅  Built Scripts in 149ms
[BS] 1 file changed (bundle.js)
[23:21:02] Finished 'watch-scripts' after 164 ms
[23:21:02] Starting 'default'...
[23:21:02] Finished 'default' after 4.02 μs
[23:21:09] 🕒  Building Scripts...
[23:21:09] ✅  Built Scripts in 105ms
[BS] 1 file changed (bundle.js)
[23:21:10] 🕒  Building Scripts...
[23:21:10] ✅  Built Scripts in 137ms
[BS] 1 file changed (bundle.js)
[23:21:10] 🕒  Building Scripts...
[23:21:11] ✅  Built Scripts in 170ms
[BS] 1 file changed (bundle.js)
[23:21:11] 🕒  Building Scripts...
[23:21:11] ✅  Built Scripts in 199ms
[BS] 1 file changed (bundle.js)
[23:21:11] 🕒  Building Scripts...
[23:21:12] ✅  Built Scripts in 247ms
[BS] 1 file changed (bundle.js)
[23:21:12] 🕒  Building Scripts...
[23:21:12] ✅  Built Scripts in 350ms
[BS] 1 file changed (bundle.js)
[23:21:12] 🕒  Building Scripts...
[23:21:13] ✅  Built Scripts in 392ms
[BS] 1 file changed (bundle.js)
[23:21:13] 🕒  Building Scripts...
[23:21:13] ✅  Built Scripts in 479ms
[BS] 1 file changed (bundle.js)
[23:21:14] 🕒  Building Scripts...
[23:21:14] ✅  Built Scripts in 560ms
[BS] 1 file changed (bundle.js)
[23:21:14] 🕒  Building Scripts...
[23:21:15] ✅  Built Scripts in 650ms
[BS] 1 file changed (bundle.js)
[23:21:15] 🕒  Building Scripts...
[23:21:16] ✅  Built Scripts in 822ms
[BS] 1 file changed (bundle.js)
[23:21:16] 🕒  Building Scripts...
[23:21:17] ✅  Built Scripts in 888ms
[BS] 1 file changed (bundle.js)
[23:21:17] 🕒  Building Scripts...
[23:21:18] ✅  Built Scripts in 997ms
[BS] 1 file changed (bundle.js)
[23:21:18] 🕒  Building Scripts...
[23:21:19] ✅  Built Scripts in 1134ms
[BS] 1 file changed (bundle.js)
[23:21:20] 🕒  Building Scripts...
[23:21:21] ✅  Built Scripts in 1320ms
[BS] 1 file changed (bundle.js)
[23:21:21] 🕒  Building Scripts...
[23:21:23] ✅  Built Scripts in 1359ms
[BS] 1 file changed (bundle.js)
[23:21:23] 🕒  Building Scripts...
[23:21:25] ✅  Built Scripts in 1560ms
[BS] 1 file changed (bundle.js)
[23:21:26] 🕒  Building Scripts...
[23:21:27] ✅  Built Scripts in 1657ms
[BS] 1 file changed (bundle.js)
[23:21:28] 🕒  Building Scripts...
[23:21:30] ✅  Built Scripts in 1903ms
[BS] 1 file changed (bundle.js)
[23:21:30] 🕒  Building Scripts...
[23:21:32] ✅  Built Scripts in 2004ms
[BS] 1 file changed (bundle.js)
```
