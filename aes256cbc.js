import crypto from "crypto";

const algorithm = "aes-256-cbc";
const key = "put-your-key-in-here";
const _iv = "put-your-valid-initialization-vector"; // LENGTH 16

const encrypt = (plaintext) => {
  const sha256sum = crypto.createHash("sha256");
  const _key = sha256sum.update(key).digest();
  const cipher = crypto.createCipheriv(algorithm, _key, _iv);
  const encrypted =
    cipher.update(plaintext, "binary", "hex") + cipher.final("hex");
  return encrypted;
};

const decrypt = (encrypted) => {
  const sha256sum = crypto.createHash("sha256");
  const _key = sha256sum.update(key).digest();
  const decipher = crypto.createDecipheriv(algorithm, _key, _iv);
  const decrypted =
    decipher.update(encrypted, "hex", "binary") + decipher.final("binary");
  return decrypted;
};

export default { encrypt, decrypt };
