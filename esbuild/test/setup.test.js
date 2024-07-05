import {expect} from 'chai';
import {setup} from '../lib/setup.js';
import sinon from 'sinon';


describe('setup', () => {
    beforeEach(() => {
        global.document = {}
    })

    it('updates the title', () => {
        const h1 = sinon.fake()
        document.getElementById = sinon.fake.returns(h1)
        setup();

        expect(document.getElementById.callCount).to.equal(1)
        expect(document.getElementById.firstCall.args)
            .to.have.length(1)
            .and.to.include("greeting")
        expect(h1.textContent).to.equal("Hello Daniel!")
    });

});