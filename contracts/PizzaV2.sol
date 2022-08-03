// SPDX-License-Identifier: MIT
// contract address: 0xAE0D85c7f4d32C04e91861Fe922C26540d5Cf873
pragma solidity ^0.8.10;

import "./Pizza.sol";

contract PizzaV2 is Pizza {
   ///@dev increments the slices when called
   function refillSlice() external {
       slices += 1;
   }

   ///@dev returns the contract version
   function pizzaVersion() external pure returns (uint256) {
       return 2;
   }
}