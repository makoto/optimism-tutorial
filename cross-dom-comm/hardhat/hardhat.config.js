require("@nomiclabs/hardhat-waffle");
require('dotenv').config()

// This is a sample Hardhat task. To learn how to create your own go to
// https://hardhat.org/guides/create-task.html
task("accounts", "Prints the list of accounts", async (taskArgs, hre) => {
  const accounts = await hre.ethers.getSigners();

  for (const account of accounts) {
    console.log(account.address);
  }
});


// You need to export an object to set up your config
// Go to https://hardhat.org/config/ to learn more

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
  solidity: "0.8.4",
  networks: {
     "optimism-goerli": {
        url: `https://opt-goerli.g.alchemy.com/v2/${process.env.OPTIMISM_GOERLI_ALCHEMY_KEY}`,
        accounts: { mnemonic: process.env.MNEMONIC }
      },
      "goerli": {
        url: `https://eth-goerli.g.alchemy.com/v2/${process.env.GOERLI_ALCHEMY_KEY}`,
        accounts: { mnemonic: process.env.MNEMONIC }
      },
      "bedrock-alpha": {
        url: `https://alpha-1-replica-0.bedrock-goerli.optimism.io`,
        accounts: { mnemonic: process.env.MNEMONIC }
      }      
  } 
};
