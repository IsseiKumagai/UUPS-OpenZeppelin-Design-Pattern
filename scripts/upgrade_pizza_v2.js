const { ethers, upgrades } = require("hardhat");

const PROXY = "0x469F0c3dF1b43b10959BC9404135AEB8d0A26CEF";

async function main() {
  const PizzaV2 = await ethers.getContractFactory("PizzaV2");
  console.log("Upgrading Pizza...");
  await upgrades.upgradeProxy(PROXY, PizzaV2);
  console.log("Pizza upgraded successfully");
}

main();
