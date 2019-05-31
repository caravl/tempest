function findSum(num) {
  let sum = 0;
  if (num.toString().length === 2) {
    return parseInt(num.toString()[0], 10) + parseInt(num.toString()[1], 10);
  } else if (num.toString().length === 1) {
    return num;
  } else {
    let array = num.toString().split('');
    for (var i = 0; i < array.length; i++) {
      array[i] = parseInt(array[i], 10);
      sum += array[i];
    }
    if (sum.toString().length > 1) {
      return findSum(sum);
    } else {
      return sum;
    }
  }
}

function findRange(num1, num2) {
  if (num1 === null || num2 === null) {
    return 'You must pass in 2 numbers';
  }
  let range = [];
  for (var k = num1; k <= num2; k++) {
    range.push(k);
  }
  for (var j = 0; j < range.length; j++) {
    let sum = findSum(range[j]);
    if (sum === 7) {
      console.log(range[j]);
    }
  }
}

let mocha = require('mocha');
let describe = mocha.describe;
let expect = require('chai').expect;

describe('The findSum function', function() {
  it('should return a single digit number', function() {
    let single = findSum(4);
    expect(single).to.equal(4);
  })
  it('should return the sum of a two digit number', function() {
    let double = findSum(35);
    expect(double).to.equal(8);
  })
  it('should return a single digit sum of a multi-digit number', function(){
    let multi = findSum(12345);
    expect(multi).to.equal(6);
  })
});

describe('The findRange function', function() {
  it('should return a message if a variable is missing', function() {
    let invalid = findRange(100);
    console.log(invalid)
    // expect(invalid).to.be
  })
});
