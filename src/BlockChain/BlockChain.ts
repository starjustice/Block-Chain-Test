import { Block } from "./Block";

export class BlockChain {
  block1chain: any;
  constructor() {
    this.block1chain = [this.initGenesisBlock()];
  }

  initGenesisBlock() {
    return new Block(0, "06/04/2021", "Initial Block in Chain", "0");
  }

  obtainLatestBlock() {
    return this.block1chain[this.block1chain.length - 1];
  }

  addNewBlock(newBlock: any) {
    newBlock.previousHash = this.obtainLatestBlock().hash;
    newBlock.mineBlock(2);
    this.block1chain.push(newBlock);
  }

  checkChainValidity() {
    for (let i = 1; i < this.block1chain.length; i++) {
      const currentBlock = this.block1chain[i];
      const previousHash = this.block1chain[i - 1];

      if (currentBlock.hash !== currentBlock.computeHash()) {
        return false;
      }
      if (currentBlock.previousHash !== previousHash.hash) return false;
    }
    return true;
  }
}
