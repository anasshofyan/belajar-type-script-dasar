describe("tipe data object", () => {
  it("should support in typescript", () => {
    const person: { id: number; name: string } = {
      id: 1,
      name: "john doe",
    };
    console.info("person", person);

    person.id = 2;
    person.name = "jane doe";

    console.info("person add", person);
  });
});
