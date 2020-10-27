
// Applied Software Pre - Interview Question 1
// Completed with Javascript
// candidate: Logan Blackstad
// date: OCt 26 2020 

/*
Question 1: 1 Write a function that given two positive integer value parameters will print out all even numbers
between 2 and the highest parameter value(inclusive) which is evenly divisible by the lowest parameter
value.
*/

function evensDivisible(int1, int2) {

  // define all variables
  var lowestParam;
  var highestParam;
  var divisibleArr = [];


  // determine the low and high params given the two positive integer inputs
  if (int1 < int2) {
    lowestParam = int1;
    highestParam = int2;
  } else {
    lowestParam = int2;
    highestParam = int1;
  }

  // loop through all the numbers in between the low and high params and add even numbers divisible by the low Param to the evensArr
  for (let i = 0; i <= highestParam - lowestParam; i++) {
    var iter = lowestParam + i;
    if ((iter % 2 === 0) && (iter % lowestParam === 0)) {
      divisibleArr.push(iter);
    }
  }

  return divisibleArr;
}


// Test Cases:
console.log(evensDivisible(17, 4));
console.log(evensDivisible(21, 7));
console.log(evensDivisible(5, 20));
console.log(evensDivisible(3, 10));
console.log(evensDivisible(2, 2));
