describe("tipe data alias", () => {
    it("should support in typescripe", () => {
        const category = {
            id: "121",
            name: "makanan",
        };
        const product = {
            id: 1,
            name: "nasi goreng",
            price: 10000,
            category: category,
        };
        console.info(category, product);
    });
});
export {};
