// Operating System

const os = require("os");

// Check platform
console.log(os.platform());

// CPU architecture
console.log(os.arch())

// cpu core info
console.log(os.cpus())

// free memory
console.log(os.freemem())

// total mem
console.log(os.totalmem())

// network
console.log(os.networkInterfaces())

// os version
console.log(os.version())

// Home dir
console.log(os.homedir());

// Uptime
console.log(os.uptime());