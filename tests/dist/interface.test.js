"use strict";
exports.__esModule = true;
describe("interface", function () {
    it("should support interface", function () {
        var seller = {
            id: 1,
            name: "john doe",
            email: "hallo@gmail.com",
            address: "jalan jalan",
            nip: "1234567890"
        };
        console.info("interface", seller);
    });
    it("should support function interface", function () {
        var add = function (a, b) {
            return a + b;
        };
        expect(add(1, 2)).toBe(3);
    });
    it("should support indexable interface", function () {
        var myArray = ["Bob", "Fred"];
        expect(myArray[0]).toBe("Bob");
    });
});
