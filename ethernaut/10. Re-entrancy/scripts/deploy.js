(async () => {
    const account = await ethers.getSigner();
    const contract = await ethers.getContractFactory("Attack");
    const attack = await contract.deploy(process.env.INSTANCE);
    log(`attack Contract : ${attack.address}`);
})();

//0xB5B84ef6bE447D5bBa7d1dD5c152a0f10E9332Ba