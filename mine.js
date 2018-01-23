const Block = require('./Block');
const Blockchain = require('./Blockchain');

let simpleCoin = new Blockchain();

console.log('Mining block...');
simpleCoin.addBlock(new Block(1, '2018-01-16', { from: 'John', to: 'Jerry', amt: 100 }));

console.log('Mining block...');
simpleCoin.addBlock(new Block(2, '2018-01-17', {from: 'Frank', to: 'Henry', amt: 200}));