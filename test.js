var aes256cbc = require('./aes256cbc.js')
var text = 'Hello World!'

var m = aes256cbc.encrypt(text)
console.log(m)

var p = aes256cbc.decrypt(m)
console.log(p)
