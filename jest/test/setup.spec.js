const setup = require("../lib/setup.js");

let element;
let getElementByIdSpy;

beforeEach(() => {
    element = {};
    getElementByIdSpy = jest.fn(id => element);
    global.document = {
        getElementById: getElementByIdSpy
    };
});

describe('window setup', () => {
    it('setup', () => {
        setup();
        
        expect(getElementByIdSpy).toBeCalledTimes(1);
        expect(getElementByIdSpy).toBeCalledWith("greeting");
        expect(element.textContent).toBe("Hello Daniel!");
    })
});