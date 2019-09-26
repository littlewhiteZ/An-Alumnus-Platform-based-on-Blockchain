//const CampaignFactory = require('../ethereum/build/CampaignFactory.json');
const config = {
  account: {
    address: '@your metamask address',
    
    mnemonic:
      '@your metamask mnemonic',
      
    privateKey: '@your metamask private key'
  },
  provider: {
    API: 'https://rinkeby.infura.io/30743f4e6c2f4e5bad6d2d1731cd1c2a',
    //API: 'http://', // private network
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
