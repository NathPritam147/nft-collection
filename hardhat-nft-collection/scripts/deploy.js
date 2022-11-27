const { ethers } = require("hardhat");
require("dotenv").config({ path: ".env" });
const { WHITELIST_CONTRACT_ADDRESS, METADATA_URL } = require("../constants");

/**
 * 
 * @author pritam.nath
 */
async function main() {
  // Address of the whitelist contract that you deployed in the previous module
  const whitelistContract = WHITELIST_CONTRACT_ADDRESS;
  // URL from where we can extract the metadata for a Crypto Dev NFT
  const metadataURL = METADATA_URL;
  /*
  A ContractFactory in ethers.js is an abstraction used to deploy new smart contracts,
  so CryptoSpartansContract here is a factory for instances of our CryptoDevs contract.
  */
  const CryptoSpartansContract = await ethers.getContractFactory(
    "CryptoSpartans"
  );

  // deploy the contract
  const deployedCryptoSpartansContract = await CryptoSpartansContract.deploy(
    metadataURL,
    whitelistContract
  );

  // print the address of the deployed contract
  console.log(
    "Crypto Spartans Contract Address:",
    deployedCryptoSpartansContract.address
  );
}

// Call the main function and catch if there is any error
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
