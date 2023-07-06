"use strict";
describe("tipe data any", () => {
    it("Should must declare", () => {
        const bio = {
            name: "anas",
            age: 20,
            merried: true,
        };
        bio.name = "budi";
        bio.age = "30";
        console.info("tipe data any", bio.name, bio.age, bio.merried);
    });
});
