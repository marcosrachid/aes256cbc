(function (exports) {
  'use strict'

  var crypto = require('crypto')
  var algorithm = 'aes-256-cbc'
  var key = 'put-your-key-in-here'
  var _iv = 'put-your-initialization-vector'

  function encrypt (plaintext) {
    var sha256sum = crypto.createHash('sha256')
    var _key = sha256sum.update(key).digest()
    var cipher = crypto.createCipheriv(algorithm, _key, _iv)
    var encrypted = cipher.update(plaintext, 'binary', 'hex') + cipher.final('hex')
    return encrypted
  }

  function decrypt (encrypted) {
    var sha256sum = crypto.createHash('sha256')
    var _key = sha256sum.update(key).digest()
    var decipher = crypto.createDecipheriv(algorithm, _key, _iv)
    var decrypted = decipher.update(encrypted, 'hex', 'binary') + decipher.final('binary')
    return decrypted
  }

  exports.encrypt = encrypt
  exports.decrypt = decrypt
})(module.exports)
