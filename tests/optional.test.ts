describe("optional parameter", () => {
  it("should support null and undefined", () => {
    const sayHello = (name?: string | null) => {
      if (name) {
        console.info(`Hello ${name}!`);
      } else {
        console.info("Hello world!");
      }
    };
    sayHello("john doe");
    const name: string | undefined = undefined;
    sayHello(name);
    sayHello(null);
  });
});
