//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.0;

contract Storage {
    string[] public cids;
    event CIDSaved(uint8);

    constructor(){}

    function saveCID(string memory cid) public  {
        (uint8 _isExist,) = isExist(cid);
        if(_isExist == 0) {
            cids.push(cid);
            emit CIDSaved(1);
        }
        emit CIDSaved(0);
    }

    function isExist(string memory cid) public view returns (uint8, int256) {
        for (uint256 index = 0; index < cids.length; index++) {
            if(keccak256(abi.encodePacked(cids[index])) == keccak256(abi.encodePacked(cid))){
                return (1, int256(index));
            }
        }
        return (0, -1);
    }

    function all() public view returns(string[] memory){
        return cids;
    }
}