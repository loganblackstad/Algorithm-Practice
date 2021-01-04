function evensDivisble(int1, int2) {

// define all variables
var lowestParam, highestParam, divisibleArr;


// assign the low and high params given the two positive integer inputs
if(int1<int2){
  lowestParam = int1;
  highestParam = int2;
} else {
  lowestParam = int2;
  highestParam = int1;
}


// loop through all the numbers in between the low and high params and add even numbers to the evensArr
for (let i = 0; i<=highestParam, i++){
  
  var x = lowestParam+i;

  if((x % 2 === 0) && (x % lowestParam === 0)){
    divisbleArr.push(x);
  }
}


console.log(evensDivisble(17,4))