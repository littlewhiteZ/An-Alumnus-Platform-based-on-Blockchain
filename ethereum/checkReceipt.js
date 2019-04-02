const HDWalletProvider = require('truffle-hdwallet-provider');
const Web3 = require('web3');
const config = require('../config/config');

const provider = new HDWalletProvider(
  config.account.mnemonic,
  config.provider.API,
  8
);
const web3 = new Web3(provider);
web3.eth
  .getTransactionReceipt(
    '0xd9363fdd3a4c0492f91ecf3f2fee731a0a2161eebb95602ae9fc449da8ed1483'
    //'0x475d5916de57cf6fe9757177ba2885820d19cdfbc4367167eb3677c71f8d1b79'
    
  )
  .then(console.log);