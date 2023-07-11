import { Customer, CustomerType } from "../src/enum";

describe("tipe data enum", () => {
  it("should support in typescript", () => {
    const customer: Customer = {
      id: 1,
      name: "john doe",
      type: CustomerType.PREMIUM,
    };

    console.info("customer", customer);
  });
});
