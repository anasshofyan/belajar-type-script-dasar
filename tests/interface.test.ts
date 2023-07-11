import { Seller } from "../src/seller";

describe("interface", () => {
  it("should support interface", () => {
    const seller: Seller = {
      id: 1,
      name: "john doe",
      email: "hallo@gmail.com",
      address: "jalan jalan",
    };

    console.info("interface", seller);
  });
});
