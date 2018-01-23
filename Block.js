const CryptoJS = require('crypto-js');

class Block {

  constructor(index, timestamp, data, previousHash = '') {
    this.index = index;
    this.timestamp = timestamp;
    this.data = data;
    this.previousHash = previousHash;
    this.hash = this.calculateHash();
    this.nonce = 0;
  }

  calculateHash() {
    return CryptoJS.SHA256(this.index + this.previousHash + this.timestamp + JSON.stringify(this.data) + this.nonce).toString();
  }

  mineBlock(difficulty) {
    let startTime = new Date().getTime();
    while (this.hash.substring(0, difficulty) !== Array(difficulty + 1).join("9")) {
      this.nonce++;
      this.hash = this.calculateHash();
    }
    console.log(`Block mined: ${this.hash} | Tried ${this.nonce} times in ${new Date().getTime() - startTime} ms`);
  }

}

module.exports = Block;


