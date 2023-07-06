import { sayHello } from "../src/say-hello";

describe("sayHello", () => {
  it("should say hello", () => {
    expect(sayHello("John", "Hello World!")).toBe("John says Hello World!");
  });
});
