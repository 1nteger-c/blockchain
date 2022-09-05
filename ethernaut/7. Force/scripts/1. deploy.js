(async () => {
    const account = await ethers.getSigner();
    log(`Deploying Contract - account : ${account.address}`)
  
    const Attack = await ethers.getContractFactory("Attack");
    const attack = await Attack.deploy();
  
    log(`attack Contract address: ${attack.address}`)
  
  })();