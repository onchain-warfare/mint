// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.20;

import {Test, console} from "forge-std/Test.sol";
import {TestWe} from "../src/TestWe.sol";

contract TestWeTest is Test {
    TestWe instance;
    address owner;
    address recipient;
    string constant baseURI = "ipfs://QmYNsRQWtiC37rkf66gxPSvu4FRtFWp2kgMU9z2yi1HfPi";

    function setUp() public {
        instance = new TestWe();
        owner = address(this);
        recipient = makeAddr("recipient");
    }

    function testSafeMint() public {
        string memory tokenURI = "ipfs://QmYNsRQWtiC37rkf66gxPSvu4FRtFWp2kgMU9z2yi1HfPi";
        instance.safeMint(recipient, tokenURI);
        assertEq(instance.ownerOf(0), recipient);
        assertEq(instance.tokenURI(0), string(abi.encodePacked(baseURI, tokenURI)));
    }
}
