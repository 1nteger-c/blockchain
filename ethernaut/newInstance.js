const fetch = require("node-fetch");
const ethers = require("ethers");
require("./utils.js").imports();
require("dotenv").config();

(async () => {
  if (process.argv.length != 3){
    log(`[USAGE]`)
    log(` - node newInstance.js {LEVEL_NUM}`)
    log(` - ex) node newInstance.js 13`)
    process.exit(-1)
  }
  level = Number(process.argv[2])
  if(isNaN(level) || level <= 0 || level > 26){
    log(`[USAGE]`)
    log(` - node newInstance.js {LEVEL_NUM}`)
    log(` - LEVEL_NUM :  1 ~ 26`)
    process.exit(-1)
  }
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

  // call "createLevelInstance" function
  await contract.createLevelInstance(process.env['LEVEL' + level], {gasLimit: 2e6});
  
  // // wait for the "LevelInstanceCreatedLog" Event occur 
  log(`Listening the event ...`)
  contract.on("LevelInstanceCreatedLog", (address, instance) => {
    if (address ==account.address){
      log(`New Instance : ${instance}`)
      setEnv('INSTANCE',instance)
    }
  });
})();
