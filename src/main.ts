import { convertTypeAcquisitionFromJson } from "typescript";
import { Block } from "./BlockChain/Block";
import { BlockChain } from "./BlockChain/BlockChain";
import { Transaction } from "./BlockChain/Transaction";

let coin = new BlockChain();
// console.log("thecoin mining progressing.... 1");
// coin.addNewBlock(
//   new Block(1, "06/04/2021", {
//     sender: "Rabin Yitzack",
//     recipient: "Loyd Eve",
//     quantity: 20,
//   })
// );

// console.log("thecoin mining progressing.... 2");

// coin.addNewBlock(
//   new Block(2, "07/04/2022", {
//     sender: "Anita Vyona",
//     recipient: "Felix Mush",
//     quantity: 349,
//   })
// );

// console.log(JSON.stringify(coin, null, 4));

// console.log("is valid", coin.checkChainValidity());

coin.createTransaction(new Transaction("address1", "address2", 100));
coin.createTransaction(new Transaction("address2", "address1", 50));

console.log("start the miner");
coin.minePendingTransactions("xaviers-address");

console.log(
  "Balance of xavier is",
  coin.getBalanceOfAddress("xaviers-address")
);

console.log("start the miner again");
coin.minePendingTransactions("xaviers-address");

console.log(
  "Balance of xavier is",
  coin.getBalanceOfAddress("xaviers-address")
);
