const { ethers } = require("hardhat");
require("dotenv").config({ path: ".env" });
require("@nomiclabs/hardhat-etherscan");


// I used this script when it was becoming difficult verifying
async function main() {
    
    // Verify the contract after deploying
    await hre.run("verify:verify", {
      address: "0xD6D72AEF1e9703797f38e2C8309Fc48751899939",
      constructorArguments: [],
    });
  }

  // Call the main function and catch if there is any error
main()
.then(() => process.exit(0))
.catch((error) => {
    console.error(error);
    process.exit(1);
});