let { findSum, findRange } = require('../lucky.js');

let mocha = require('mocha');
let describe = mocha.describe;
let expect = require('chai').expect;

describe('The findSum function', function() {
  it('should return a single digit number', function() {
    let single = findSum(4);
    expect(single).to.equal(4);
  });
  it('should return the sum of a two digit number', function() {
    let double = findSum(35);
    expect(double).to.equal(8);
  });
  it('should return a single digit sum of a multi-digit number', function(){
    let multi = findSum(12345);
    expect(multi).to.equal(6);
  });
});

describe('The findRange function', function() {
  it('should return the correct number of lucky numbers', function() {
    let array = findRange(100, 200);
    expect(array).to.have.length(11);
  });
  it('should return a message if no lucky numbers are found', function() {
    let array = findRange(100, 105);
    expect(array).to.equal('Sorry, no lucky numbers!')
  });
});
