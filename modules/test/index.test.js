import {expect} from 'chai';
import {setup} from '../lib/index.js';

describe('index', () => {
    beforeEach(() => {
        global.document = {
            getElementById: (id) => null
        }
    })

    it('updates the title', () => {
        let h1 = {textContent: ""}
        let capturedId = null;
        document.getElementById = (id) => {
            capturedId = id;
            return h1;
        };
        setup();

        expect(capturedId).to.equal("greeting");
        expect(h1.textContent).to.equal("Hello Daniel!");
    });

});