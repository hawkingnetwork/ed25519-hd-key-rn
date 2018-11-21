ed25519 HD Key React Native
=====

## Key Derivation for `ed25519`

[SLIP-0010](https://github.com/satoshilabs/slips/blob/master/slip-0010.md) - Specification

## Installation

    npm i --save @hawkingnetwork/ed25519-hd-key-rn

## Usage

**example:**

```js
const { derivePath, getMasterKeyFromSeed } = require("ed25519-hd-key");
const hexSeed =
  "fffcf9f6f3f0edeae7e4e1dedbd8d5d2cfccc9c6c3c0bdbab7b4b1aeaba8a5a29f9c999693908d8a8784817e7b7875726f6c696663605d5a5754514e4b484542";

const { key, chainCode } = getMasterKeyFromSeed(hexSeed);
console.log(key.toString("hex"));
// => 2b4be7f19ee27bbf30c667b642d5f4aa69fd169872f8fc3059c08ebae2eb19e7
console.log(chainCode.toString("hex"));
// => 90046a93de5380a72b5e45010748567d5ea02bbf6522f979e05c0d8d8ca9fffb

const { key, chainCode } = derivePath("m/0'/2147483647'", hexSeed);

console.log(key.toString("hex"));
// => ea4f5bfe8694d8bb74b7b59404632fd5968b774ed545e810de9c32a4fb4192f4
console.log(chainCode.toString("hex"));
// => 138f0b2551bcafeca6ff2aa88ba8ed0ed8de070841f0c4ef0165df8181eaad7f
```

## Tests

```
npm test
```

## References

[SLIP-0010](https://github.com/satoshilabs/slips/blob/master/slip-0010.md)

[BIP-0032](https://github.com/bitcoin/bips/blob/master/bip-0032.mediawiki)

[BIP-0044](https://github.com/bitcoin/bips/blob/master/bip-0044.mediawiki)
