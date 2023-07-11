"use strict";
exports.__esModule = true;
var enum_1 = require("../src/enum");
describe("tipe data enum", function () {
    it("should support in typescript", function () {
        var customer = {
            id: 1,
            name: "john doe",
            type: enum_1.CustomerType.PREMIUM
        };
        console.info("customer", customer);
    });
});
