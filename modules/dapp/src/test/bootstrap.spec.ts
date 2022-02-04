import { assert, expect } from "chai";
import { Bootstrap } from "../bootstrap";


describe("Storage", async function () {
    it("Should be able to store correctly", async function () {
      const bootstrap = new Bootstrap();
      const file = bootstrap.uploadFile(__dirname + "/resource/error.png");

      assert.isNotNull(file);
    });
});
