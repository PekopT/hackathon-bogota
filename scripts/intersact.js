// interact.js

const CONTRACT_ADDRESS = '0x38463a28b7b3ee7cAd835f81F883aec2Bb1B92a4';
const fs = require('fs')
const { abi } = JSON.parse(fs.readFileSync('../build/contracts/HelloWorld.json'))

var Contract = require('web3-eth-contract');

// set provider for all later instances to use
Contract.setProvider('https://nd-934-738-609.p2pify.com/57e6666822a12f2ffb05a27ae563bac2');

var contract = new Contract(abi, CONTRACT_ADDRESS);

contract.methods.greet('Vasya').call({from: '0xEeAF9d92d35A2ab1eB5ffD36f9Caf3F14a3621D5'})
    .then(function(balance) {
        console.log(balance);
    });