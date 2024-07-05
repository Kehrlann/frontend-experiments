const greet = require("../lib/greet.js");

describe('some tests', () => {
    it('uses chai', () => {
        expect("hello").toBe("hello");
    });
    
    it('greets', () => {
        expect(greet("Daniel")).toBe("Hello Daniel!");
    })
});