const path = require('path');
const solc = require('solc');
const fs = require('fs-extra');

const buildPath = path.resolve(__dirname,'build');

fs.removeSync(buildPath);

const Path2 = path.resolve(__dirname,'contracts','IERC20.sol');
const Path3 = path.resolve(__dirname,'contracts','NCU.sol');
const Path4 = path.resolve(__dirname,'contracts','SafeMath.sol');

var input = {
    'IERC20.sol': fs.readFileSync(Path2, 'utf8'),
    'NCU.sol': fs.readFileSync(Path3, 'utf8'),
    'SafeMath.sol': fs.readFileSync(Path4, 'utf8')
};

const output = solc.compile({sources: input},1).contracts;

fs.ensureDirSync(buildPath);

for (let contract in output) {
    fs.outputJsonSync(
        path.resolve(buildPath, contract.replace(':','') + '.json'),
        output[contract]
    );
}