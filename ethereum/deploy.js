const HDWalletProvider = require('truffle-hdwallet-provider');
const Web3 = require('web3');
const compiledFactory = require('./build/DepartmentFactory.json');
const config = require('../config/config');

const provider = new HDWalletProvider(
    config.account.mnemonic,
    config.provider.API,
    0
);
const web3 = new Web3(provider);

const deploy = async () =>{
    const accounts = await web3.eth.getAccounts();

    console.log('Attempting to deploy from account',accounts[0]);
    try {
        const result = await new web3.eth.Contract(JSON.parse(compiledFactory.interface))
        .deploy({ data: compiledFactory.bytecode })
        .send({ gas: '2000000', from: accounts[0], gasPrice: '30000000000' })
        .on('transactionHash', transactionHash => {
            console.log(
              `Successfully submitted contract creation. Transaction hash: ${transactionHash}`
            );
          });
    console.log('Contract deployed to', result.options.address);
    //0xd9423E6230475BC0815C8B1b5E54Fa9F8fE4E4e7 on Rinky network
    
    } catch (error) {
        console.log('error',error);
    }
    
};

deploy();
