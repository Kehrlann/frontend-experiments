import {expect} from 'chai';
import {setup} from '../lib/spring-security.js';
import sinon from 'sinon';

describe('index', () => {
    beforeEach(() => {
        global.document = {
            getElementById: (id) => null
        }
    })

    describe('update the title', () => {
        it('does not use a mock', () => {
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
        
        it('uses a mock', () => {
            const h1 = sinon.fake()
            document.getElementById = sinon.fake.returns(h1)
            
            setup();
            
            expect(document.getElementById.callCount).to.equal(1)
            expect(document.getElementById.firstCall.args)
                .to.have.length(1)
                .and.to.include("greeting")
        })    
    })
    

});