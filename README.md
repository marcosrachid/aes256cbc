# aes256cbc
A simple AES 256 CBC encrypt and decrypt module

## Function

- encrypt()
- decrypt()

# Usage

```
var aes256cbc = require('./aes256cbc.js')
var text = 'Hello World!'

var m = aes256cbc.encrypt(text)
console.log(m)

var p = aes256cbc.decrypt(m)
console.log(p)

```

# Output

```
71f99aee73bbaf9f3e9a7ecf5eacdc6f
Hello World!
```

# Standalone

Encrypting
```
node encrypt.js 'example text'
016ee8836abdd098d0b9ef20b35a39d1
```

Decrypting
```
node decrypt.js '016ee8836abdd098d0b9ef20b35a39d1'
example text
```
