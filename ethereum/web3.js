import Web3 from 'web3';
import config from '../config/config';

let web3;

if (typeof window !== 'undefined' && typeof window.web3 !== 'undefined') {
    //we are in the browser
    web3 = new Web3(window.web3.currentProvider);
    
} else {
    // we are on the server OR the user is not running metamask
    const provider = new Web3.providers.HttpProvider(
        config.provider.API
    );
    const options = {
        transactionConfirmationBlocks: 1
      };
    web3 = new Web3(provider,null,options);
}

export default web3;