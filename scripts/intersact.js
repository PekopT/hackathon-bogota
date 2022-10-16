// interact.js

const CONTRACT_ADDRESS = '0x38463a28b7b3ee7cAd835f81F883aec2Bb1B92a4';
const fs = require('fs')
const { abi } = JSON.parse(fs.readFileSync('../build/contracts/HelloWorld.json'))

var Contract = require('web3-eth-contract');

// set provider for all later instances to use
Contract.setProvider('https://alpha-fittest-hexagon.arbitrum-goerli.quiknode.pro/6cc579fc1022a906f03687720d32f28f7ed7edc1/');

var contract = new Contract(abi, CONTRACT_ADDRESS);

contract.methods.greet('Vasya').call({from: '0xEeAF9d92d35A2ab1eB5ffD36f9Caf3F14a3621D5'})
    .then(function(balance) {
        console.log(balance);
    });