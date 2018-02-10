var aes256cbc = require('./aes256cbc.js')

var param = process.argv[2];

var m = aes256cbc.encrypt(param);
console.log(m);
