import { expect } from "chai";
import { ethers } from "hardhat";

describe("Storage", function () {
  it("Should be able to store correctly", async function () {
    const Storage = await ethers.getContractFactory("Storage");
    const storage = await Storage.deploy();
    await storage.deployed();

    const all: string[] = await storage.all();
    // expect storage to be empty at first
    expect(all.length).to.equal(0);
    // save data to storage
    const res = await storage.saveCID("Talabi");
    expect(res).to.emit(storage, "CIDSaved").withArgs(1);

    const storageCheck: string[] = await storage.all();
    expect(storageCheck.length).to.equal(1);
  });

  it("Should store uniquely", async function () {
    const Storage = await ethers.getContractFactory("Storage");
    const storage = await Storage.deploy();
    await storage.deployed();

    const all: string[] = await storage.all();
    // expect storage to be empty at first
    expect(all.length).to.equal(0);
    // save data to storage
    const res = await storage.saveCID("Talabi");
    expect(res).to.emit(storage, "CIDSaved").withArgs(1);

    const res2 = await storage.saveCID("Talabi");

    expect(res2).to.emit(storage, "CIDSaved").withArgs(0);
  });
});
