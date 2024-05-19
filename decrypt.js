import aes256cbc from "./aes256cbc.js";

const param = process.argv[2];

const p = aes256cbc.decrypt(param);
console.log(p);
