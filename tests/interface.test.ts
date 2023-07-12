import { Seller } from "../src/seller";

describe("interface", () => {
  it("should support interface", () => {
    const seller: Seller = {
      id: 1,
      name: "john doe",
      email: "hallo@gmail.com",
      address: "jalan jalan",
      nip: "1234567890",
    };

    console.info("interface", seller);
  });

  it("should support function interface", () => {
    interface Adder {
      (a: number, b: number): number;
    }

    const add: Adder = (a, b) => {
      return a + b;
    };

    expect(add(1, 2)).toBe(3);
  });
});
