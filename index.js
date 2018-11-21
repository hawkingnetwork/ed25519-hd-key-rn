/*
 * Adapted for React Native compatibility from https://github.com/alepop/ed25519-hd-key
 */
const createHmac = require('create-hmac');
const utils_1 = require('./utils');

const ED25519_CURVE = 'ed25519 seed';
const HARDENED_OFFSET = 0x80000000;

exports.getMasterKeyFromSeed = seed => {
  const hmac = createHmac('sha512', ED25519_CURVE);
  const I = hmac.update(Buffer.from(seed, 'hex')).digest();
  const IL = I.slice(0, 32);
  const IR = I.slice(32);
  return { key: IL, chainCode: IR };
};

const CKDPriv = ({ key, chainCode }, index) => {
  const indexBuffer = Buffer.allocUnsafe(4);
  indexBuffer.writeUInt32BE(index, 0);
  const data = Buffer.concat([Buffer.alloc(1, 0), key, indexBuffer]);
  const I = createHmac('sha512', chainCode)
    .update(data)
    .digest();
  const IL = I.slice(0, 32);
  const IR = I.slice(32);
  return { key: IL, chainCode: IR };
};

exports.isValidPath = path => {
  if (!utils_1.pathRegex.test(path)) {
    return false;
  }
  return !path
    .split('/')
    .slice(1)
    .map(utils_1.replaceDerive)
    .some(isNaN);
};

exports.derivePath = (path, seed) => {
  if (!exports.isValidPath(path)) {
    throw new Error('Invalid derivation path');
  }
  const { key, chainCode } = exports.getMasterKeyFromSeed(seed);
  const segments = path
    .split('/')
    .slice(1)
    .map(utils_1.replaceDerive)
    .map(el => parseInt(el, 10));
  return segments.reduce(
    (parentKeys, segment) => CKDPriv(parentKeys, segment + HARDENED_OFFSET),
    { key, chainCode }
  );
};
