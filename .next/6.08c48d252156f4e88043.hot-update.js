webpackHotUpdate(6,{

/***/ 540:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


//const CampaignFactory = require('../ethereum/build/CampaignFactory.json');
var config = {
  account: {
    address: '@your metamask address',

    mnemonic: '@your metamask mnemonic',

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
    gateway: 'https://gateway.ipfs.io/ipfs/'
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
  accounts: {}
};
module.exports = config;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVua25vd24iXSwibmFtZXMiOlsiY29uZmlnIiwiYWNjb3VudCIsImFkZHJlc3MiLCJtbmVtb25pYyIsInByaXZhdGVLZXkiLCJwcm92aWRlciIsIkFQSSIsImluZnVyYSIsIkFQSV9rZXkiLCJjb250cmFjdHMiLCJkZXBhcnRtZW50RmFjdG9yeSIsInRva2VuIiwiaXBmcyIsImhvc3QiLCJwb3J0IiwicHJvdG9jb2wiLCJnYXRld2F5IiwiYnJhZnRFZGl0b3IiLCJsYW5ndWFnZSIsImNvbnRlbnRGb3JtYXQiLCJoZWlnaHQiLCJpbml0aWFsQ29udGVudCIsImFjY291bnRzIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6Ijs7QUFBQTtBQUNBLElBQUlBLFNBQVM7QUFDWEMsV0FBUztBQUNQQyxhQUFTLHdCQURGOztBQUdQQyxjQUFVLHlCQUhIOztBQUtQQyxnQkFBWTtBQUxMLEdBREU7QUFRWEMsWUFBVTtBQUNSQyxTQUFLLDREQURHO0FBRVI7QUFDQUMsWUFBUTtBQUNOQyxlQUFTO0FBREg7QUFIQSxHQVJDO0FBZVhDLGFBQVc7QUFDVEMsdUJBQW1CO0FBQ2pCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBUixlQUFTO0FBTlEsS0FEVjtBQVNUUyxXQUFPO0FBQ0w7QUFDQTtBQUNBOztBQUVBO0FBQ0FULGVBQVM7QUFOSjtBQVRFLEdBZkE7QUFpQ1hVLFFBQU07QUFDSkMsVUFBTSxnQkFERjtBQUVKQyxVQUFNLElBRkY7QUFHSkMsY0FBVSxPQUhOO0FBSUpDLGFBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQVhJLEdBakNLO0FBOENYQyxlQUFhO0FBQ1hDLGNBQVUsU0FEQztBQUVYQyxtQkFBZSxNQUZKO0FBR1hDLFlBQVEsR0FIRztBQUlYQyxvQkFBZ0I7QUFKTCxHQTlDRjtBQW9EWEMsWUFBVTtBQXBEQyxDQUFiO0FBc0RBQyxPQUFPQyxPQUFQLEdBQWlCeEIsTUFBakIiLCJmaWxlIjoidW5rbm93biIsInNvdXJjZXNDb250ZW50IjpbIi8vY29uc3QgQ2FtcGFpZ25GYWN0b3J5ID0gcmVxdWlyZSgnLi4vZXRoZXJldW0vYnVpbGQvQ2FtcGFpZ25GYWN0b3J5Lmpzb24nKTtcbnZhciBjb25maWcgPSB7XG4gIGFjY291bnQ6IHtcbiAgICBhZGRyZXNzOiAnQHlvdXIgbWV0YW1hc2sgYWRkcmVzcycsXG5cbiAgICBtbmVtb25pYzogJ0B5b3VyIG1ldGFtYXNrIG1uZW1vbmljJyxcblxuICAgIHByaXZhdGVLZXk6ICdAeW91ciBtZXRhbWFzayBwcml2YXRlIGtleSdcbiAgfSxcbiAgcHJvdmlkZXI6IHtcbiAgICBBUEk6ICdodHRwczovL3JpbmtlYnkuaW5mdXJhLmlvLzMwNzQzZjRlNmMyZjRlNWJhZDZkMmQxNzMxY2QxYzJhJyxcbiAgICAvL0FQSTogJ2h0dHA6Ly8nLCAvLyBwcml2YXRlIG5ldHdvcmtcbiAgICBpbmZ1cmE6IHtcbiAgICAgIEFQSV9rZXk6ICczMDc0M2Y0ZTZjMmY0ZTViYWQ2ZDJkMTczMWNkMWMyYSdcbiAgICB9XG4gIH0sXG4gIGNvbnRyYWN0czoge1xuICAgIGRlcGFydG1lbnRGYWN0b3J5OiB7XG4gICAgICAvL3ByaXZhdGUgbmV0d29ya1xuICAgICAgLy9hZGRyZXNzOiAnMHhjQkU2M0E4QjdlMDBCMTI1OTM1OURkMzMyRTg0NWIyNTg1MEZCMWI1J1xuICAgICAgLy9hZGRyZXNzOiAnMHhEMDZmZTYyQzlBREI0QjdiRWQ1QmNBRGRjMmY0NmJhNTU2MjgxMTc0J1xuXG4gICAgICAvL1JpbmtieSB0ZXN0IG5ldHdvcmtcbiAgICAgIGFkZHJlc3M6ICcweDBlNjM2OTU0OGVmNDdlZmQ3NGZjMjIzMDdiMTczNzUwNWEzZGQ3ZjMnXG4gICAgfSxcbiAgICB0b2tlbjoge1xuICAgICAgLy9wcml2YXRlIG5ldHdvcmtcbiAgICAgIC8vYWRkcmVzczogJzB4ZkMzNTEzOWFkZWQwZDlGZThGRkM3ZjQxNjE5RDI5NzczNTczMTY1MydcbiAgICAgIC8vYWRkcmVzczogJzB4MzU1QkM4ZDkwNTdhNjcxOEE4MmYxOUMyMDVEZmRmODk1RTZjY0FFQSdcblxuICAgICAgLy9SaW5rYnkgdGVzdCBuZXR3b3JrXG4gICAgICBhZGRyZXNzOiAnMHg3M0QwNEFlMUM3M2Q5ODJFRjZCMWY3OEZFZWZBMjdCNURhNTdiRjc2J1xuICAgIH1cbiAgfSxcbiAgaXBmczoge1xuICAgIGhvc3Q6ICdpcGZzLmluZnVyYS5pbycsXG4gICAgcG9ydDogNTAwMSxcbiAgICBwcm90b2NvbDogJ2h0dHBzJyxcbiAgICBnYXRld2F5OiAnaHR0cHM6Ly9nYXRld2F5LmlwZnMuaW8vaXBmcy8nXG4gICAgLy8gQVBJOiB7XG4gICAgLy8gICBIVFRQSGVhZGVyczoge1xuICAgIC8vICAgICBcIkFjY2Vzcy1Db250cm9sLUFsbG93LU9yaWdpblwiOiBcIltcXFwiaHR0cDovL2xvY2FsaG9zdDozMDAwXFxcIl1cIixcbiAgICAvLyAgICAgXCJBY2Nlc3MtQ29udHJvbC1BbGxvdy1DcmVkZW50aWFsc1wiOiBcIltcXFwidHJ1ZVxcXCJdXCIsXG4gICAgLy8gICAgIFwiQWNjZXNzLUNvbnRyb2wtQWxsb3ctTWV0aG9kc1wiOiBcIltcXFwiUFVUXFxcIiwgXFxcIlBPU1RcXFwiLCBcXFwiR0VUXFxcIl1cIlxuICAgIC8vICAgfSxcbiAgICAvLyB9XG4gIH0sXG4gIGJyYWZ0RWRpdG9yOiB7XG4gICAgbGFuZ3VhZ2U6ICd6aC1oYW50JyxcbiAgICBjb250ZW50Rm9ybWF0OiAnaHRtbCcsXG4gICAgaGVpZ2h0OiA1MDAsXG4gICAgaW5pdGlhbENvbnRlbnQ6ICc8cD5IZWxsbyBXb3JsZCE8L3A+J1xuICB9LFxuICBhY2NvdW50czoge31cbn07XG5tb2R1bGUuZXhwb3J0cyA9IGNvbmZpZzsiXX0=
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVua25vd24iXSwibmFtZXMiOlsiY29uZmlnIiwiYWNjb3VudCIsImFkZHJlc3MiLCJtbmVtb25pYyIsInByaXZhdGVLZXkiLCJwcm92aWRlciIsIkFQSSIsImluZnVyYSIsIkFQSV9rZXkiLCJjb250cmFjdHMiLCJkZXBhcnRtZW50RmFjdG9yeSIsInRva2VuIiwiaXBmcyIsImhvc3QiLCJwb3J0IiwicHJvdG9jb2wiLCJnYXRld2F5IiwiYnJhZnRFZGl0b3IiLCJsYW5ndWFnZSIsImNvbnRlbnRGb3JtYXQiLCJoZWlnaHQiLCJpbml0aWFsQ29udGVudCIsImFjY291bnRzIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6Ijs7QUFBQTtBQUNBLElBQUlBLFNBQVM7QUFDWEMsV0FBUztBQUNQQyxhQUFTLHdCQURGOztBQUdQQyxjQUFVLHlCQUhIOztBQUtQQyxnQkFBWTtBQUxMLEdBREU7QUFRWEMsWUFBVTtBQUNSQyxTQUFLLDREQURHO0FBRVI7QUFDQUMsWUFBUTtBQUNOQyxlQUFTO0FBREg7QUFIQSxHQVJDO0FBZVhDLGFBQVc7QUFDVEMsdUJBQW1CO0FBQ2pCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBUixlQUFTO0FBTlEsS0FEVjtBQVNUUyxXQUFPO0FBQ0w7QUFDQTtBQUNBOztBQUVBO0FBQ0FULGVBQVM7QUFOSjtBQVRFLEdBZkE7QUFpQ1hVLFFBQU07QUFDSkMsVUFBTSxnQkFERjtBQUVKQyxVQUFNLElBRkY7QUFHSkMsY0FBVSxPQUhOO0FBSUpDLGFBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQVhJLEdBakNLO0FBOENYQyxlQUFhO0FBQ1hDLGNBQVUsU0FEQztBQUVYQyxtQkFBZSxNQUZKO0FBR1hDLFlBQVEsR0FIRztBQUlYQyxvQkFBZ0I7QUFKTCxHQTlDRjtBQW9EWEMsWUFBVTtBQXBEQyxDQUFiO0FBc0RBQyxPQUFPQyxPQUFQLEdBQWlCeEIsTUFBakIiLCJmaWxlIjoidW5rbm93biJ9

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } /* eslint-disable camelcase, no-undef */ var webpackExports = typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__ : module.exports; /* eslint-enable camelcase, no-undef */ if (typeof webpackExports === 'function') { __REACT_HOT_LOADER__.register(webpackExports, 'module.exports', "/Users/littlewhite/NCUcoin/config/config.js"); return; } /* eslint-disable no-restricted-syntax */ for (var key in webpackExports) { /* eslint-enable no-restricted-syntax */ if (!Object.prototype.hasOwnProperty.call(webpackExports, key)) { continue; } var namedExport = void 0; try { namedExport = webpackExports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/littlewhite/NCUcoin/config/config.js"); } } })();

/***/ })

})