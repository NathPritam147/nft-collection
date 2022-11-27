// SPDX-License-Identifier: MIT
pragma solidity ^0.8.4;

interface IWhitelistDApp {
    function whitelistedAddresses(address) external view returns (bool);
}