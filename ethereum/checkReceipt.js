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
    '0x475d5916de57cf6fe9757177ba2885820d19cdfbc4367167eb3677c71f8d1b79'
    //'0x17d6014f67b7d058887b1c4299e5390d86d95b817be09eb16146773d70dbb189'
  )
  .then(console.log);