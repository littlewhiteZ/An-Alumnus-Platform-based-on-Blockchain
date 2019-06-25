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
    //'0x1e787e5f33e5e1cfde050adf5a396d71000328441ce38e268036350308024cba'
    //'0x7ea030147cfa090d8de21c618334d21e0714951c34cdbf620a091f9f97f7218b'
    '0x720cc9a859e452be6f87bb0060643ce0b67c9ca7229df1af7198515d6f25f8b4'
    
    
  )
  .then(console.log);