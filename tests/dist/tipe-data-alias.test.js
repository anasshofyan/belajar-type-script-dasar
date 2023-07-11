"use strict";
exports.__esModule = true;
describe("tipe data alias", function () {
    it("should support in typescripe", function () {
        var category = {
            id: "121",
            name: "makanan",
            description: "makanan sehat"
        };
        var product = {
            id: 1,
            name: "nasi goreng",
            price: 10000,
            category: category
        };
        console.info(category, product);
    });
});
