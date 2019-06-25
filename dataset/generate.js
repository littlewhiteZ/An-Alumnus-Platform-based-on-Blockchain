const config = require('../config/config');
const Web3 = require('web3');
const HDWalletProvider = require('truffle-hdwallet-provider');
const compiledFactory = require('../ethereum/build/DepartmentFactory.json');
const compiledDepartment = require('../ethereum/build/Department.json');
const faker = require('faker');

const ipfs = require('../utils/ipfs');



var departmentContractABI = JSON.parse(compiledDepartment.interface);
const factoryABI = JSON.parse(compiledFactory.interface);

const factoryContractAddress = config.contracts.departmentFactory.address;

const createDepartmentContract = async ({
  web3,
  title,
}) => {
  
    const accounts = await web3.eth.getAccounts();
    const factoryContract = await new web3.eth.Contract(
      factoryABI,
      factoryContractAddress
    );
    return await factoryContract.methods
      .createDepartment(title)
      .send({
        from: accounts[0],
        gas: '1000000',
        gasPrice: '31000000000'
      })
      .on('transactionHash', transactionHash => {
        console.log(
          `Successfully submitted contract creation. Transaction hash: ${transactionHash}`
        );
      })
      .catch(console.log);
};

const getRequestContracts = async ({ web3 }) => {
  const accounts = await web3.eth.getAccounts();
  const factoryContract = await new web3.eth.Contract(
    factoryABI,
    factoryContractAddress
  );
  return await factoryContract.methods.getDeployedCampaigns().call();
};

const getRequestContract = async ({ web3, requestContractAddress }) => {
  const requestContract = await new web3.eth.Contract(
    requestContractABI,
    requestContractAddress,
    {
      gas: '1000000',
      gasPrice: '31000000000'
    }
  );
  return requestContract;
};

const main = async () => {
  /* create DepartmentContract from factory contract */
  console.log('generating provider');
  const provider = new HDWalletProvider(
    config.account.mnemonic,
    config.provider.API,
  );
  console.log('generating web3');
  const web3 = new Web3(provider);
  console.log('generating accounts');
  const accounts = await web3.eth.getAccounts();
  console.log('accounts', accounts);
  

  // createRequestContract
  console.log('Creating DepartmentContract...');
  const times = 5;
  for (let i = 0; i < times; i++) {
    try {
      const fakeTitle = faker.lorem.sentence();

      const result = createDepartmentContract({
        web3,
        title: fakeTitle
      }).then(result => {
        console.log(`DepartmentContract ${i} created!`, result);
      });
    } catch (error) {
      console.log('error', error);
      continue;
    }
    // await ipfs.add(buffer, (err, ipfsHash) => {
    //   console.log('ipfsHash', ipfsHash);
    //   return createRequestContract({
    //     web3,
    //     title: fakeTitle,
    //     desc: ipfsHash[0].hash,
    //     minDistribution,
    //     term
    //   });
    // });
  }
  console.log('=== All promise sent! ===');
  // const promises = _.times(times, async () => {
  //   const fakeTitle = faker.lorem.sentence();
  //   const fakeDesc = faker.lorem.paragraph();
  //   console.log('fakeDesc', fakeDesc);
  //   const buffer = Buffer.from(fakeDesc, 'utf8');
  //   console.log('buffer', buffer);

  //   let hash;
  //   ipfs.add(buffer, (err, ipfsHash) => {
  //     console.log('ipfsHash', ipfsHash);
  //     return createRequestContract({
  //       web3,
  //       title: fakeTitle,
  //       desc: ipfsHash[0].hash,
  //       minDistribution,
  //       term
  //     });
  //   });
  // });
  // console.log('RequestContract created!', promises);
  // const result = await Promise.all(promises);

  // getRequestContracts
  // console.log('Getting RequestContracts...');
  // const addressesOfRequestContracts = await getRequestContracts({ web3 });
  // console.log('Received RequestContracts!');

  // get RequestContract
  // console.log('Getting RequestContract...');
  // const requestContractIndex = addressesOfRequestContracts.length -1 ;
  // const requestContract = await getRequestContract({
  //   web3,
  //   requestContractAddress: addressesOfRequestContracts[requestContractIndex]
  // });
  // console.log('Received RequestContract!');

  // contribute to RequestContract
  // console.log('contributing to RequestContract...');

  // const res = await requestContract.methods.contribute().send({
  //   value: minDistribution,
  //   from: accounts[0],
  // });
  // console.log('Contributed!', res);
  // const isContributor = await requestContract.methods.contributors(accounts[0]).call();
  // console.log('isContributor', isContributor);
  // contribute contract
};

main();
