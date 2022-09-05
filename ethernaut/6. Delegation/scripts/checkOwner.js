(async () => {
  const account = await ethers.getSigner();
  const contract = await ethers.getContractAt(
    "Delegation",
    process.env.INSTANCE,
    account
  );
  const owner = await contract.owner()
  log(`owner : ${owner}`)
  if (owner == account.address){
    log(`You are owner !!`)
  }
})();
 