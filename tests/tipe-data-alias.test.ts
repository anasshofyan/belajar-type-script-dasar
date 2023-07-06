import { Category, Product } from "../src/type-alias";

describe("tipe data alias", () => {
  it("should support in typescripe", () => {
    const category: Category = {
      id: 1,
      name: "makanan",
    };

    const product: Product = {
      id: 1,
      name: "nasi goreng",
      price: 10000,
      category: category,
    };

    console.info(category, product);
  });
});
