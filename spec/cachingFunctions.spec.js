describe("Adding unique functions to cache", function () {
    it("Add unique function", function () {
        expect(store.add(testFunction)).toBeTruthy();
    });

    it("Reject non unique function", function () {
        expect(store.add(testFunction)).toBeFalsy();
    });
});
