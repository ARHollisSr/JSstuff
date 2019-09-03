describe("Avoid Aliasing", function () {
    it("Enable Strict", function () {
        expect(infiltrate('Shogun')).toEqual('Shogun');
    });
});
