let args = process.argv.slice(2);

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
  let luckyNumbers = [];
  // create range of numbers
  let range = [];
  for (var k = num1; k <= num2; k++) {
    range.push(k);
  }
  // pass each number into findSum, if it's a lucky number, add number to luckyNumbers array
  for (var j = 0; j < range.length; j++) {
    let sum = findSum(range[j]);
    if (sum === 7) {
      luckyNumbers.push(range[j]);
      console.log(range[j]);
    }
  }
  if (luckyNumbers.length === 0) {
    console.log('Sorry, no lucky numbers!');
  }
}

findRange(args[0], args[1]);
