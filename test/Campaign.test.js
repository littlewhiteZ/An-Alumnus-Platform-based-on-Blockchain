const assert = require('assert');
const ganache = require('ganache-cli');
const Web3 = require('web3');
const web3 = new Web3(ganache.provider());

const compiledFactory = require('../ethereum/build/DepartmentFactory.json');
const compiledDepartment = require('../ethereum/build/Department.json');
const compiledToken = require('../ethereum/build/ERC20.json');

let accounts;
let factory;
let departmentAddress;
let token;
let tokenAddress;
let department;

const getBalance = async account => {
    let balance = await web3.eth.getBalance(account);
    balance = web3.utils.fromWei(balance, 'wei');
    balance = parseFloat(balance);
    return balance;
  };

beforeEach(async () => {
    accounts = await web3.eth.getAccounts();
    let balance = await getBalance(accounts[0]);
    console.log(balance);

    try {
        factory = await new web3.eth.Contract(JSON.parse(compiledFactory.interface))
            .deploy({ data: compiledFactory.bytecode })
            .send({ from: accounts[0],gas:'1000000'});
    } catch (error) {
        console.log('error', error);
    }
    
    //await factory.methods.createDepartment('csie').send({
       // from: accounts[0],
       // gas: '1000000'
    //});
    
    //[departmentAddress] = await factory.methods.getDeployedDepartments().call();
    
    //take all address and take first one to put into departmentAddress
    //department = await new web3.eth.Contract(
        //JSON.parse(compiledDepartment.interface),
        //departmentAddress
    //);
    //tokenAddress = await department.methods.tokenAddress().call();
    //token = await new web3.eth.Contract(
      //  JSON.parse(compiledToken.interface),
        //tokenAddress
    //);
});

describe('Department', () => {
    it('accounts list',() => {
        console.log(accounts);
        assert.ok(accounts.length > 0);
    });

    it('deploys a factory and a department and token',async () => {
        //assert.ok(factory.options.address);
       // assert.ok(department.options.address);
        //assert.ok(token.options.address);
    });

    //it('marks caller as the department manager',async () => {
       // const manager = await department.methods.manager().call();
       // assert.equal(accounts[0],manager);
    //});

    //it('allows people to contribute money',async () => {
        //await department.methods.contribute().send({
           // value: '200',
           // from: accounts[1]
        //});
       // let balance = await web3.eth.getBalance(department.options.address);
       // assert.equal(balance,200);
   // });
});

