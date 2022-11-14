(async () => {
    account = ethers.getSigner();
    const contract = await ethers.getContractFactory("Privacy")
    let x = []
    x.push(ethers.utils.formatBytes32String("AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA"))
    x.push(ethers.utils.formatBytes32String("BBBBBBBBBBBBBBBBBBBBBBBBBBBBBBB"))
    x.push(ethers.utils.formatBytes32String("CCCCCCCCCCCCCCCCCCCCCCCCCCCCCCC"))
    const chall = await contract.deploy(x)
    await log(`address : ${chall.address}`)
    await set('chall',chall.address)
})();
