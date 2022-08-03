require("@nomiclabs/hardhat-ethers");
require("@openzeppelin/hardhat-upgrades");
require("@nomiclabs/hardhat-etherscan");
// require("dotenv").config();
require("@nomicfoundation/hardhat-toolbox");

// Go to https://www.alchemyapi.io, sign up, create
// a new App in its dashboard, and replace "KEY" with its key
const ALCHEMY_API_KEY = "Q7GrPDWL8Mim_e3HbnFFuzjTmy4a-NHS";

// Replace this private key with your Goerli account private key
// To export your private key from Metamask, open Metamask and
// go to Account Details > Export Private Key
// Beware: NEVER put real Ether into testing accounts
const GOERLI_PRIVATE_KEY =
  "1d42bafda1878128f3fc8c63b45e6abf4d028e238812871f94b054d22dae9a46";

const ETHERSCAN_API_KEY = "CUQHPI4IH2QH6RDFFGU2WRST6CSND2PDIK";

module.exports = {
  solidity: "0.8.10",
  networks: {
    goerli: {
      url: `https://eth-goerli.alchemyapi.io/v2/${ALCHEMY_API_KEY}`,
      accounts: [GOERLI_PRIVATE_KEY],
    },
  },
  etherscan: {
    apiKey: ETHERSCAN_API_KEY,
  },
};

// My Pizza smart contract is: 0xC99886bf6647e63A6A5B937554476C4214B224Ff
// My Proxy address is: 0x469F0c3dF1b43b10959BC9404135AEB8d0A26CEF
