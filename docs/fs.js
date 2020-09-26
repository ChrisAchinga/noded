// file system
const fs = require("fs");
const path = require("path");

// create folder
fs.mkdir(path.join(__dirname, 'demo_folder'), {}, err => {
    if(err) throw err;
    console.log('Folder created')
})

// create and write to file
fs.writeFile(
  path.join(__dirname, '/demo_folder', 'hello.txt'),
  'Hello World!',
  err => {
    if (err) throw err;
    console.log('File written to...');

    // File append
    fs.appendFile(
      path.join(__dirname, '/demo_folder', 'hello.txt'),
      ' I love Node.js',
      err => {
        if (err) throw err;
        console.log('File written to...');
      }
    );
  }
);
