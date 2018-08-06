## Vodafone
Technologies:
Javascript, jQuery, and few ES6 instructions + babel to keep compalibility with vanilla JS.

- css (simple CSS files no reason to make SASS this timme)
- images 
- js (custom js)
- js_ext (js from external providers)
- json 
- index.html

### How to build in simple building process
npm install
gulp

## Simple bulding process explanation
- gulp concatenates all CSS files and makes copy to dist folder
- makes similar operations with JS and lauch babel plugin to keep compatibility with vanillaJS
- copy all images and JSON to dist folder

### How to run
cd dist
http-server
