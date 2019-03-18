const IPFS = require('ipfs-api');
const config = require('../config/config');

const ipfs = new IPFS(config.ipfs);
module.exports = ipfs;
