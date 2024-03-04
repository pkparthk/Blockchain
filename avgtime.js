 const Blockchain = require('./blockchain')
const blockchain = new Blockchain()

blockchain.addBlock({ data: "newdata" });
console.log(blockchain.chain[blockchain.replaceChain.length - 1]);
let prevTimestamp, nextTimestamp, nextBlock, timeDiff, averageTIme;

const times = [];

for (let i = 0; i < 1000; i++) {
    prevTimestamp = blockchain.chain[blockchain.chain.length - 1].timestamp;
    blockchain.addBlock({ data: `block ${i}` });
    nextBlock = blockchain.chain[blockchain.chain.length - 1];
    nextTimestamp = nextBlock.timestamp;

    timeDiff = nextTimestamp - prevTimestamp;
    times.push(timeDiff)

    averageTIme = times.reduce((total, num) => (total + num)) / times.length;

    console.log(`Time to mine block: ${timeDiff}ms, Difficulty: ${nextBlock.difficulty}, Average Time: ${averageTIme}ms`); 
}