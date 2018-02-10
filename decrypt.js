var aes256cbc = require('./aes256cbc.js')

var param = process.argv[2];

var p = aes256cbc.decrypt(param);
console.log(p);
