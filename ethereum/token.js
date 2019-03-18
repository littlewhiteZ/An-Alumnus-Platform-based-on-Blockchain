import web3 from './web3';
import token from './build/ERC20.json';
import config from '../config/config';

const instance = new web3.eth.Contract(
    JSON.parse(token.interface),
    config.contracts.token.address
    //'0x1293ee1f997530086359128dD69728909B0Fb7fe'
    //'0xd9423E6230475BC0815C8B1b5E54Fa9F8fE4E4e7'
);

export default instance;