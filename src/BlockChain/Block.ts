import hash from "crypto";

export class Block {
  index: any;
  timeStamp: any;
  transactions: any;
  previousHash: string;
  hash: string;
  nonce: number;

  constructor(timestamp: any, transactions: any, previousHash?: any) {
    this.timeStamp = timestamp;
    this.transactions = transactions;
    this.previousHash = previousHash;
    this.hash = this.computeHash();
    this.nonce = 0;
  }
  computeHash() {
    return hash
      .createHash("sha256")
      .update(
        this.transactions +
          this.previousHash +
          this.timeStamp +
          JSON.stringify(this.transactions) +
          this.nonce
      )
      .digest("base64");
  }
  mineBlock(difficulty: number) {
    while (
      this.hash.substring(0, difficulty) !== Array(difficulty + 1).join("0")
    ) {
      this.nonce++;
      this.hash = this.computeHash();
    }
    console.log("block mined", this.hash);
  }
}
