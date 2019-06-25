//const CampaignFactory = require('../ethereum/build/CampaignFactory.json');
const config = {
  account: {
    address: '0xD07cEfefB35600Ea6F2839693017F63F414d859E',
    //address: '0xB6050B37AA9Fcc16BB2F533dc9c29288C7A41D78',
    mnemonic:
      'gaze slice chief syrup lab age truly about cupboard derive supreme cement',
      //'moral fog learn alcohol popular ripple minute choose proud come jealous air',
    privateKey: '8e81945e642d39437afbd3c53fb9caeee6097b15786968cfbf8c54022417610d'
  },
  provider: {
    API: 'https://rinkeby.infura.io/30743f4e6c2f4e5bad6d2d1731cd1c2a',
    //API: 'http://140.115.52.54:8545', // private network
    // API: 'http://localhost:8545',
    infura: {
      API_key: '30743f4e6c2f4e5bad6d2d1731cd1c2a'
    }
  },
  contracts: {
    departmentFactory: {
      //private network
      //address: '0xcBE63A8B7e00B1259359Dd332E845b25850FB1b5'
      //address: '0xD06fe62C9ADB4B7bEd5BcADdc2f46ba556281174'
      
      //Rinkby test network
      address: '0x0e6369548ef47efd74fc22307b1737505a3dd7f3'
    },
    token: {
      //private network
      //address: '0xfC35139aded0d9Fe8FFC7f41619D297735731653'
      //address: '0x355BC8d9057a6718A82f19C205Dfdf895E6ccAEA'

      //Rinkby test network
      address: '0x73D04Ae1C73d982EF6B1f78FEefA27B5Da57bF76'
    }
  },
  ipfs: {
    host: 'ipfs.infura.io',
    port: 5001,
    protocol: 'https',
    gateway: 'https://gateway.ipfs.io/ipfs/',
    // API: {
    //   HTTPHeaders: {
    //     "Access-Control-Allow-Origin": "[\"http://localhost:3000\"]",
    //     "Access-Control-Allow-Credentials": "[\"true\"]",
    //     "Access-Control-Allow-Methods": "[\"PUT\", \"POST\", \"GET\"]"
    //   },
    // }
  },
  braftEditor: {
    language: 'zh-hant',
    contentFormat: 'html',
    height: 500,
    initialContent: '<p>Hello World!</p>'
  },
  accounts: {
    
  }
};
module.exports = config;
