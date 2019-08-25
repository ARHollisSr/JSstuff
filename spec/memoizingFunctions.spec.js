describe("Cache computed values", function() {
    
    it("Check for prime number", function() {
        expect(isPrime(5)).toBeTruthy();
    });

    it("Value for 5 was cached", function() {
        expect(isPrime.answers[5]).toBeTruthy();
    });
});
