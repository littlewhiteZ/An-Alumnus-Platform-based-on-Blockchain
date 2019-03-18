import web3 from './web3';
import departmentFactory from './build/DepartmentFactory.json';
import config from '../config/config';

const instance = new web3.eth.Contract(
    JSON.parse(departmentFactory.interface),
    config.contracts.departmentFactory.address
    //'0x246EE733cB3c76004C130B28C12ADBFcB5256E1C'
    //'0xd9423E6230475BC0815C8B1b5E54Fa9F8fE4E4e7'
);

export default instance;