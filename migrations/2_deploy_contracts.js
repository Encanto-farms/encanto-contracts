// const Flashswap = artifacts.require('./Flashswap.sol');
const EncantoToken = artifacts.require('./EncantoToken.sol');
const MasterChef = artifacts.require('./MasterChef.sol');
const Timelock = artifacts.require('./Timelock.sol');
module.exports = function (deployer, network, accounts) {
  console.log(network, accounts)
  return deployer.then(() => {
    return deployContracts(deployer, network, accounts)
  })
}

async function deployContracts(deployer, network, accounts) {
 // let encantoToken = await deployer.deploy(EncantoToken);
  // let masterChef = await deployer.deploy(MasterChef, encantoToken.address, '0x337eE188771A907e6b59d45068A289B27085ac24', '0x337eE188771A907e6b59d45068A289B27085ac24', 1, 1072291);
  let timelock = await deployer.deploy(Timelock, "0xD0E5a41603C3ec410faD2623B64507C6Cd0141D1", 25200)
}
