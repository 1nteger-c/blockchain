const ethers = require("ethers");
require("dotenv").config({path : '../.env'});
log = console.log;

(async () => {
  const Network = `https://rinkeby.infura.io/v3/${process.env.INFURA_KEY}`;
  const httpProvider = ethers.getDefaultProvider(Network);
  const account = new ethers.Wallet(
    process.env.METAMASK_PRIVATE_KEY,
    httpProvider
  );
  ABI = [
    "function Fal1out() public payable"
  ];

  const contract = new ethers.Contract(process.env.INSTANCE, ABI, account);

  // 1. call Fal1out function
  await contract.Fal1out({gasLimit : 2e6})

})();
