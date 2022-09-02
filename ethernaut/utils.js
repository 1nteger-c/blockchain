const fs = require("fs");
const parse = (str) => {
  let res = {};
  let lines = str.split("\n");
  for (const line of lines) {
    const match = line.match(/^([^=:#]+?)[=:](.*)/);
    if (match) {
      res[match[1]] = match[2];
    }
  }
  return res;
};
const stringify = (data) => {
  let result = "";
  for (const [key, value] of Object.entries(data)) {
    if (key) {
      result += `${key}=${value}\n`;
    }
  }
  return result;
};

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
  setEnv: (key, value) => {
    fs.readFile(".env", "utf-8", (err, data) => {
      res = parse(data);
      res[key] = value;
      res = stringify(res);
      fs.writeFile(".env", res, (err) => {});
    });
  },
};
module.exports = {
  imports: () => Object.keys(utils).forEach((id) => (global[id] = utils[id])),
};
