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
  const Network = `https://goerli.infura.io/v3/${process.env.INFURA_KEY}`;
  // // Connect
  const httpProvider = ethers.getDefaultProvider(Network);
  const account = new ethers.Wallet(
    process.env.METAMASK_PRIVATE_KEY,
    httpProvider
  );
  // get abi

  abi= [
    'function createLevelInstance(address _level) public payable',
    'event LevelInstanceCreatedLog(address indexed player, address instance)'
  ]
  // // get Contract
  const contract = new ethers.Contract(process.env.ETHERNAUT, abi, account);
  
  // // specific level require some Ether
  Option = {}
  Option['gasLimit'] = 0x600000
  Option['gasPrice'] = 8000000
  
  if (level == 9 || level == 10){
    Option['value'] = ethers.utils.parseEther("0.001");
  }
  // // call "createLevelInstance" function
  tx = await contract.createLevelInstance(process.env['LEVEL' + level], Option);
  // // wait for the "LevelInstanceCreatedLog" Event occur 
  log(`Listening the event ...`)
  contract.on("LevelInstanceCreatedLog", (address, instance) => {
    if (address ==account.address){
      log(`New Instance : ${instance}`)
      setEnv('INSTANCE',instance)
    }
  });
})(); 
