import { ethers } from "ethers";
import { Greeter__factory as GreeterFactory, Storage__factory as StorageFactory } from "@bez-ipfs/contracts";
import * as IPFS from 'ipfs-core';
import * as fs from 'fs';
import * as readline from 'readline';
import { bootstrap } from "./bootstrap";


// const ipfs = IPFS.create();

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('please enter file directory: ', async (answer) => {
    // validator will be the file's existence
    const ipfs = await IPFS.create();
    // then simulate
    const bt = new bootstrap(await ipfs);
    const file = bt.uploadFile(answer);
    if(file !== undefined) {
        bt.simulate(file);
    }
    rl.close();

})