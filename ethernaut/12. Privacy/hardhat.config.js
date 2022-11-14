require("@nomiclabs/hardhat-waffle");
require("dotenv").config({path : '../.env'});
require("../utils.js").imports(); // in test scripts, I use set & get
module.exports = {
  solidity: "0.8.15",
  defaultNetwork : "localhost",
  networks: {
    hardhat: {},
    goerli:{
      url: `https://goerli.infura.io/v3/${process.env.INFURA_KEY}`,
      accounts: [`${process.env.METAMASK_PRIVATE_KEY}`]
    }
  }
};