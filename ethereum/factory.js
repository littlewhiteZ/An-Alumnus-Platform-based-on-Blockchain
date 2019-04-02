import web3 from './web3';
import departmentFactory from './build/DepartmentFactory.json';
import config from '../config/config';

const instance = new web3.eth.Contract(
    JSON.parse(departmentFactory.interface),
    config.contracts.departmentFactory.address
);

export default instance;