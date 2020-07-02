# sr_browser_ts - common typescript code run from a browser

* sr_core_ts contains common typescript functions. But it contains functions dependent on the node.js file system and path functions. sr_browser_ts is standalone typescript functions used by browser typescript code. 
* primarily used by vscode extension webview code.

## path methods
* dirName = path_dirName( filePath );

## publish instructions
* increment version number in package.json
* npm run build
* npm run test
* git add, commit, push to repo
* npm publish
* npm update in projects which use this package
