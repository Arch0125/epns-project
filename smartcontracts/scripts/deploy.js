
const hre = require("hardhat");

async function main(){
  const Add = await hre.ethers.getContractFactory("Add");
  const add = await Add.deploy();

  await add.deployed();

  console.log("Add deployed to:", add.address);
}

main().catch((error) => {
  console.log(error);
  process.exitCode=1;
})

//Contract Address : 0x45D2D5ae050174f6a2EaA3490c893D5726662C07