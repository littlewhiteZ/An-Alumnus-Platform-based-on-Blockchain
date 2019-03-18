import web3 from './web3';
import department from './build/Department.json';

export default address => {
    return new web3.eth.Contract(
        JSON.parse(department.interface),
        address
    );
};