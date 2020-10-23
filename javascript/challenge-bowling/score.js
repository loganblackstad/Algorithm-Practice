

// extract the number of rolls (n) and an array of scores bowled
// read in text file
// readline() and parseInt()

var fs = require("fs");
const readline = require('readline');
var text = fs.readFileSync("./bowl1.txt", "utf-8");
var textByLine = text.split("\n");

var n = parseInt(textByLine[0], 10);
var rolls = textByLine[1].split(" ");
var rollsInNumber = rolls.map(Number);

// var rolls = textByLine[1].map(Number);


console.log(n);
console.log(rolls);
console.log(rollsInNumber);


// loop through the array of rolls and generate an array of frames

var frames = 0;
var frameArr = [];

for (i = 0; i < n; i++) {
  // console.log(`\n`);
  // console.log(`2 balls: `, rolls[i], rolls[i + 1]);
  // console.log('1: ', rolls[i]);
  // console.log('2: ', rolls[i + 1]);

  console.log(`frames: `, frames);
  console.log(`frameArr: `, frameArr);

  // strike
  if (rolls[i] === 10) {
    console.log('strike')
    frameArr.push(10);
    frames += 1;
  }

  // spare
  else if ((rolls[i] + rolls[i + 1]) === 10) {
    console.log('spare')
    frameArr.push(10);
    frames += 1;
    i++;
  }

  // base
  else {
    console.log('base')
    frameArr.push((rolls[i] + rolls[i + 1]));
    frames += 1;
    i++;
  }
}

console.log(frames);
console.log(frameArr);
