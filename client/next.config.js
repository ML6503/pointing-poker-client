/** @type {import('next').NextConfig} */
const crypto = require('crypto');

try {
  crypto.createHash('md4');
} catch (e) {
  console.warn('Crypto "md4" is not supported anymore by this Node version');
  const origCreateHash = crypto.createHash;
  crypto.createHash = (alg, opts) => {
    return origCreateHash(alg === 'md4' ? 'md5' : alg, opts);
  };
}

module.exports = {
  root:'',
  reactStrictMode: false,
  requireConfigFile: false,
}
