(async() => {
    account = await ethers.getSigner();
    contract = await ethers.getContractFactory("contracts/attack.sol:Building");
    const attack = await contract.deploy(process.env.INSTANCE);
    log(`attack Contract : ${attack.address}`);
})();   