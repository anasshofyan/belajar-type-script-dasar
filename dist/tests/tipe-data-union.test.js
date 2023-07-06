"use strict";
describe("tipe data union", () => {
    it("should must declare", () => {
        let sample;
        sample = 100;
        console.info("tipe data union", sample);
    });
    it("should must typeof", () => {
        function process(value) {
            if (value === "string") {
                return value.toUpperCase();
            }
            else if (typeof value === "number") {
                return value + 2;
            }
            else {
                return !value;
            }
        }
        expect(process("string")).toBe("STRING");
        expect(process(100)).toBe(102);
        expect(process(true)).toBe(false);
    });
});
