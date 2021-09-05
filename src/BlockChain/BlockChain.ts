import { Block } from "./Block";
import { Transaction } from "./Transaction";

export class BlockChain {
  block1chain: any;
  pendingTransactions: any;
  miningReward: number;
  difficulty: number;
  constructor() {
    this.block1chain = [this.initGenesisBlock()];
    this.pendingTransactions = [];
    this.miningReward = 100;
    this.difficulty = 2;
  }

  initGenesisBlock() {
    return new Block("06/04/2021", "Initial Block in Chain", "0");
  }

  obtainLatestBlock() {
    return this.block1chain[this.block1chain.length - 1];
  }

  minePendingTransactions(miningRewardAddress: any) {
    let block = new Block(Date.now(), this.pendingTransactions);
    block.mineBlock(this.difficulty);
    console.log("Block successful mined");

    this.block1chain.push(block);
    this.pendingTransactions = [
      new Transaction(null, miningRewardAddress, this.miningReward),
    ];
  }

  createTransaction(transaction: any) {
    this.pendingTransactions.push(transaction);
  }

  getBalanceOfAddress(address: any) {
    let balance = 0;
    for (let block of this.block1chain) {
      for (let trans of block.transactions) {
        if (trans.fromAddress === address) {
          balance -= trans.amount;
        }

        if (trans.toAddress === address) {
          balance += trans.amount;
        }
      }
    }

    return balance;
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
