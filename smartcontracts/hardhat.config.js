require("@nomicfoundation/hardhat-toolbox");
require('dotenv').config();

const pvtkey = process.env.PRIVATE_KEY;
const etherscanapi = process.env.ETHERSCAN_API_KEY;
const alchemyapi = process.env.ALCHEMY_API_KEY;

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.9",
  networks: {
    goerli: {
      url: `https://eth-goerli.alchemyapi.io/v2/${alchemyapi}`,
      accounts: [`${pvtkey}`]
    }
  },
  etherscan: {
    apiKey:{
      goerli:`${etherscanapi}`
    }
  }
};
