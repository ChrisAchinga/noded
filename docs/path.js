const path = require('path')

// Base File Name
console.log(path.basename(__filename));

// Directory name
console.log(path.basename(__dirname));

// Directory path
console.log(path.dirname(__filename));

// File extension
console.log(path.extname(__filename));

// path object
console.log(path.parse(__filename));

// concatenate paths
console.log(path.join(__dirname, 'test', "hello.test.js"))