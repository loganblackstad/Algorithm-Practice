

// extract the number of rolls (n) and an array of scores bowled
// read in text file
// readline() and parseInt()

var fs = require("fs");
const readline = require('readline');
var text = fs.readFileSync("./bowl1.txt", "utf-8");
var textByLine = text.split("\n");

var n = textByLine[0]
var rolls = textByLine[1]

console.log(n);
console.log(rolls);


// loop through the array of rolls and generate an array of frames

var frames = 0;
var frameArr = [];

for (i = 0; i < n, i++) {

}



//

* /