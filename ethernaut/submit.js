const fetch = require("node-fetch");
const ethers = require("ethers");
require("dotenv").config();
log = console.log;
const instance = "0xbcAc2aE7E3Df8D34826d10892FAF3CEc6819889d"; // you should write the result of "newInstance.js"

(async () => {
  const Network = `https://rinkeby.infura.io/v3/${process.env.INFURA_KEY}`;
  // Connect
  const httpProvider = ethers.getDefaultProvider(Network);
  const account = new ethers.Wallet(
    process.env.METAMASK_PRIVATE_KEY,
    httpProvider
  );
  // get abi
  URL = `https://api-rinkeby.etherscan.io/api?module=contract&action=getabi&address=${process.env.ETHERNAUT}&apikey=${process.env.ETHERSCAN_API_KEY}`;
  abi = (await (await fetch(URL)).json()).result;

  // get Contract
  const contract = new ethers.Contract(process.env.ETHERNAUT, abi, account);

  // call "submitLevelInstance" function
  await contract.submitLevelInstance(instance);
  
  // wait for the "LevelCompletedLog" Event occur 
  await contract.once("LevelCompletedLog", (address, level) => {
    log(`[!! CLEAR !!]`)
    log(`Level Instance : ${level}`)
  });
})();
