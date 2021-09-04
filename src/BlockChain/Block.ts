import hash from "crypto";

export class Block {
  index: any;
  timeStamp: any;
  info: any;
  nextHash: string;

  constructor(index: any, timestamp: any, info: any, nextHash?: any) {
    this.index = index;
    this.timeStamp = timestamp;
    this.info = info;
    this.nextHash = nextHash;
  }
  computerHash() {
    return hash
      .createHash("sha256")
      .update(
        this.info + this.nextHash + this.timeStamp + JSON.stringify(this.info)
      )
      .digest("base64");
  }
}
