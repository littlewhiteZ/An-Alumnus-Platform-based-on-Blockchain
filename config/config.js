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
    //API: 'https://rinkeby.infura.io/30743f4e6c2f4e5bad6d2d1731cd1c2a',
    API: 'http://140.115.52.54:8545', // private network
    // API: 'http://localhost:8545',
    infura: {
      API_key: '30743f4e6c2f4e5bad6d2d1731cd1c2a'
    }
  },
  contracts: {
    departmentFactory: {
      //private network
      //address: '0x79d0fAC3Af768d704Be0BeC19f6EFf39319b0463'
      address: '0xb3CfedEFAe12e50E8Ee9A5abAca79BF0E0E376c1'
    },
    token: {
      //address: '0x57d5024b60675A1872Fe563b626E9d8003Ff3E42'
      address: '0x8BEfd5b1b86aFC3ACf84BB65Cc1c2a8142F43dca'
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
