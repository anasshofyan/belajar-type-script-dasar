describe("tipe data array", () => {
  it("Should must declare", () => {
    const names: string[] = ["anas", "budi", "caca"];
    const balences: number[] = [100, 200, 300];
    console.info("tipe data array", names, balences);
  });

  it("Should support readonly array", () => {
    const hobbies: ReadonlyArray<string> = ["mancing", "berenang", "makan"];
    console.info("tipe data array", hobbies);
  });

  it("Should support tuple", () => {
    const biodata: readonly [string, number] = ["anas", 20];

    console.info("tipe data array tuple", biodata);
  });
});
