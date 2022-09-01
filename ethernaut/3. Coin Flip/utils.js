const utils = {
    log: (msg) => console.log(msg ? msg : ""),
    set: (k, v) =>
      hre.network.provider.send("hardhat_setCode", [
        ethers.utils.id(k).slice(0, 42),
        `0x${Buffer.from(v).toString("hex")}`,
      ]),
    get: async (k) =>
      Buffer.from(
        (
          await hre.network.provider.send("eth_getCode", [
            ethers.utils.id(k).slice(0, 42),
          ])
        ).slice(2),
        "hex"
      ).toString(),
  };
  module.exports = {
    imports: () => Object.keys(utils).forEach((id) => (global[id] = utils[id])),
  };
  