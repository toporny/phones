## Vodafone mobile friendly working prototype
Technologies:
Javascript, jQuery, and few ES6 instructions + babel to keep compalibility with vanilla JS.

File structure:
- css (simple CSS files - no reason to make SASS this time)
- images 
- js (custom js for this project)
- js_ext (js from external providers)
- json 
- index.html

### How to build in simple building process
- npm install
- gulp

## Simple bulding process explanation
- gulp concatenates all CSS files and makes copy to dist folder
- makes similar operations with JS and lauch babel plugin to keep compatibility with vanillaJS
- copy all images and JSON to dist folder

### How to run
- cd dist
- http-server

### Online working versions
all JS concatenated (with Babel):
http://alltic.home.pl/vodafone_prod

development version:
http://alltic.home.pl/vodafone_dev

### For future
- add SASS compilation formula to bower and start using SASS
- add js and CSS uglification
- move everything to Vue.js to better scalability (routing, etc)


