/**
 * Created by kfirerez on 16/11/2016.
 */
'use strict';

const chai = require('chai');
const expect = chai.expect;
const Q = require('q');
const JSDOM = require('jsdom');
const jsdom = JSDOM.jsdom;

describe('Test suite', function () {
  it('expect true to be true', function () {
    expect(true).to.be.true;
  });
  
  it('expect body to have one div', function () {
    let doc = jsdom('<html><body><div>div1</div><div>div2</div></body></html>');
    let divs = doc.querySelectorAll('div');
    expect(divs).to.be.an.array;
    expect(divs).to.have.length(2);
  });
});
