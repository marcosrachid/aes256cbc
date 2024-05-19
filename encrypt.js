import aes256cbc from "./aes256cbc.js";

const param = process.argv[2];

const m = aes256cbc.encrypt(param);
console.log(m);
