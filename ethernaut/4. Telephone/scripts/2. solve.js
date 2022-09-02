log = console.log;
attackContractAddress = "0xC8Cf5a496bae0d0381161bd059Bcf9D0E13D8C50"; // have to write the result of deploy.js
(async () => {
  const account = await ethers.getSigner();
  const contract = await ethers.getContractAt("Attack", attackContractAddress, account);
  await contract.attack();

})();