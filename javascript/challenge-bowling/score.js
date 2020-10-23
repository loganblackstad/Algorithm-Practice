

// extract the number of rolls (n) and an array of scores bowled
// read in text file
// readline() and parseInt()

var fs = require("fs");
const readline = require('readline');
var text = fs.readFileSync("./bowl2.txt", "utf-8");
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
rolls = rollsInNumber;
var scoreArr = [];
var scoreArr2 = [0,];

for (i = 0; i < n; i++) {
  console.log(`\n`);
  console.log(`balls: `, rolls[i], rolls[i + 1]);
  console.log(`frames: `, frames);
  console.log(`frameArr: `, frameArr);
  console.log(`scoreArr: `, scoreArr);
  console.log(`scoreArr2: `, scoreArr2);
  console.log(`balls left:`, n - i)

  if (n - i > 1) {
    // strike
    if (rolls[i] === 10 && (n - i > 2 && ((isNaN(rolls[i + 2]) ? 0 : rolls[i + 2]) !== 10))) {
      console.log('strike')
      frameArr.push(10);
      scoreArr.push(10 + rolls[i + 1] + (isNaN(rolls[i + 2]) ? 0 : rolls[i + 2]));
      scoreArr2.push(scoreArr2[scoreArr2.length - 1] + 10 + rolls[i + 1] + (isNaN(rolls[i + 2]) ? 0 : rolls[i + 2]));
      frames += 1;
    }

    // spare
    else if ((rolls[i] + rolls[i + 1]) === 10) {
      console.log('spare')
      frameArr.push(10);
      scoreArr.push(10 + (isNaN(rolls[i + 2]) ? 0 : rolls[i + 2]));
      scoreArr2.push(scoreArr2[scoreArr2.length - 1] + 10 + (isNaN(rolls[i + 2]) ? 0 : rolls[i + 2]));
      frames += 1;
      i++;
    }

    // base
    else {
      console.log('base')
      frameArr.push((rolls[i] + rolls[i + 1]));
      scoreArr.push((rolls[i] + rolls[i + 1]))
      scoreArr2.push(scoreArr2[scoreArr2.length - 1] + (rolls[i] + rolls[i + 1]));
      frames += 1;
      i++;
    }
  }
}

var final = scoreArr2[scoreArr2.length - 1]

console.log(frames);
console.log(frameArr);
console.log(scoreArr);
console.log(scoreArr2);
console.log(`\nfinal:\n`, final)
