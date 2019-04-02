import web3 from './web3';
import token from './build/ERC20.json';
import config from '../config/config';

const instance = new web3.eth.Contract(
    JSON.parse(token.interface),
    config.contracts.token.address
);

export default instance;