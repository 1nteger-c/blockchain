const { ethers } = require("hardhat");

(async () => {
    const account = await ethers.getSigner();
    const Attack = await ethers.getContractFactory("Attack");
    const attack = await Attack.deploy(process.env.INSTANCE);
    log(`attack Contract : ${attack.address}`);
})();