import hash from "crypto";

export class Block {
  index: any;
  timeStamp: any;
  info: any;
  previousHash: string;
  hash: string;
  nonce: number;

  constructor(index: any, timestamp: any, info: any, previousHash?: any) {
    this.index = index;
    this.timeStamp = timestamp;
    this.info = info;
    this.previousHash = previousHash;
    this.hash = this.computeHash();
    this.nonce = 0;
  }
  computeHash() {
    return hash
      .createHash("sha256")
      .update(
        this.info +
          this.previousHash +
          this.timeStamp +
          JSON.stringify(this.info) +
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
