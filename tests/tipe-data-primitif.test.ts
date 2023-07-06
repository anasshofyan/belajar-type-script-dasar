describe("tipe data primitif", () => {
  it("Should must declare", () => {
    // declare secara explisit
    let name: string = "Hello anas";
    let balence: number = 100;
    let isVip: boolean = true;

    // declare secara implisit
    let hallo = "Hello";

    console.info(name, balence, isVip, hallo);
  });
});
