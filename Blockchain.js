const Block = require('./Block');

class Blockchain {

  constructor() {
    this.chain = [this.createGenesisBlock()];
    this.difficulty = 3;
  }

  createGenesisBlock() {
    return new Block(0, '2018-01-01', 'Genesis block', '0');
  }

  getLatestBlock() {
    return this.chain[this.chain.length - 1];
  }

  addBlock(newBlock) {
    newBlock.previousHash = this.getLatestBlock().hash;
    newBlock.mineBlock(this.difficulty);
    if (this.canAddBlock(newBlock)) {
      this.chain.push(newBlock);
      console.log(`[SUCCESS] Block added [${newBlock.hash}]`); 
    } else {
      console.log('[ERROR] Incorrect block');
    }
  }

  canAddBlock(block) {
    return this.isBlockValid(this.getLatestBlock(), block) && this.isChainValid();
  }

  isBlockValid(previousBlock, currentBlock) {
    return currentBlock.hash === currentBlock.calculateHash() && currentBlock.previousHash === previousBlock.hash; 
  }

  isChainValid() {
    for (let i = 1; i < this.chain.length; i++) {
      const currentBlock = this.chain[i];
      const previousBlock = this.chain[i - 1];

      if (!this.isBlockValid(previousBlock, currentBlock)) {
        return false;
      }
    }

    return true;
  }
  
}

module.exports = Blockchain;



