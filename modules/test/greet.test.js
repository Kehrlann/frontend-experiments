import {expect} from 'chai';
import {greet} from '../lib/greet.js';


describe('some tests', () => {
    it('uses chai', () => {
        expect("hello").to.equal("hello");
    });
    
    it('greets', () => {
        expect(greet("Daniel")).to.equal("Hello Daniel!");
    })
});