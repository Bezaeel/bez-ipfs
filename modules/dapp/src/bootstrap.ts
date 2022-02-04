import { ethers } from "ethers";
import { Greeter__factory as GreeterFactory, Storage__factory as StorageFactory } from "@bez-ipfs/contracts";
import * as IPFS from 'ipfs-core';
import * as fs from 'fs';

export class Bootstrap {
    private provider = new ethers.providers.JsonRpcProvider('http://127.0.0.1:8545/');
    private StorageContractAddress = '0xe7f1725E7734CE288F8367e1Bb143E90bb3F0512';

    // file upload
    uploadFile(directory: string): Buffer {
        try {
            const data = fs.readFileSync(directory);
            return data;
        } catch (error) {
            // return error;
            console.log(error);
            process.exit(1);
        }
    }

    async simulate(file: Buffer) {
        const resultFromIPFS = await this.addFileToIPFS(file);
        await this.saveCID(resultFromIPFS.cid.toString());
    }

    async addFileToIPFS(file: Buffer) {
        const ipfs = await IPFS.create();
        let added = await ipfs.add({
            path: 'uploads',
            content: file,
        }, { wrapWithDirectory: true });

        return added;
    }
    
    async saveCID(cid: string) {
        try {
            console.log("cid::::", cid);
            console.log("Connecting to contract...");
            // connect to contract
            const storageContract = StorageFactory.connect(this.StorageContractAddress, this.provider.getSigner());
            // call contract function
            console.log("Saving cid....");
            await storageContract.saveCID(cid);
            console.log("Saved!");
            process.exit(1);
        } catch (error) {
            console.error(error);
            process.exit(1);
        }
    }

    async isCIDExistOnContract(cid: string) {
        try {
            // connect to contract
            const storageContract = StorageFactory.connect(this.StorageContractAddress, this.provider.getSigner());
            // call contract function
            const result =  await storageContract.isExist(cid);
            console.log(result[0]);
        } catch (error) {
            console.error(error);
        }
    }
}