describe("optional parameter", function () {
    it("should support null and undefined", function () {
        var sayHello = function (name) {
            if (name) {
                console.info("Hello " + name + "!");
            }
            else {
                console.info("Hello world!");
            }
        };
        sayHello("john doe");
        var name = undefined;
        sayHello(name);
        sayHello(null);
    });
});
