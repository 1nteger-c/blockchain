const fetch = require("node-fetch");
const ethers = require("ethers");
require("dotenv").config();
log = console.log;

(async () => {
  const Network = `https://goerli.infura.io/v3/${process.env.INFURA_KEY}`;
  // Connect
  const httpProvider = ethers.getDefaultProvider(Network);
  const account = new ethers.Wallet(
    process.env.METAMASK_PRIVATE_KEY,
    httpProvider
  );
  // get abi
  abi= [
    'function submitLevelInstance(address _instance) public',
    'event LevelCompletedLog(address indexed player, address level)'
  ]
  // get Contract
  const contract = new ethers.Contract(process.env.ETHERNAUT, abi, account);

  // call "submitLevelInstance" function
  await contract.submitLevelInstance(process.env.INSTANCE);
  log(`Listening the event ...`)
  // wait for the "LevelCompletedLog" Event occur
  contract.on("LevelCompletedLog", (address, level) => {
    log(address)
    log(level)
    if (address ==account.address){
      log(`[!! CLEAR !!]`)
      log(`Level Instance : ${level}`)
    }
  });
})();
