require("../test/env");
require("../d3.tsv");

require("util").puts(JSON.stringify({
  "name": "d3.tsv",
  "version": d3.tsv.version,
  "description": "Quick hack to get tsv parsing into d3",
  "keywords": ["dom", "w3c", "visualization", "svg", "animation", "canvas"],
  "homepage": "http://vlandham.github.com/d3.tsv/",
  "author": {"name": "Jim Vallandingham", "url": "http://vallandingham.me"},
  "repository": {"type": "git", "url": "http://github.com/vlandham/d3.tsv.git"},
  "main": "d3.tsv.js",
  "dependencies": {
    "jsdom": "0.2.10",
    "d3": "2.7.3"
  },
  "devDependencies": {
    "uglify-js": "1.2.3",
    "vows": "0.6.x"
  },
  "scripts": {"test": "./node_modules/vows/bin/vows"}
}, null, 2));
