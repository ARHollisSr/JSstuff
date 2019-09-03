describe("Substitute default param", function () {
    it("Default value used", function () {
        expect(performAction('Ozak')).toEqual('Ozak slashing');
    });

    it("Default value used", function () {
        expect(performAction('Kilmonger')).toEqual('Kilmonger slashing');
    });

    it("Default value used", function () {
        expect(performAction('Rodan')).toEqual('Rodan slashing');
    });

    it("Provided value used", function () {
        expect(performAction('Kileak','dashing')).toEqual('Kileak dashing');
    });
});
