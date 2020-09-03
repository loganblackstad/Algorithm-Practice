function printDateTime() {


  // currDateTime = Date();
  // returns > 'Thu Sep 03 2020 10:39:12 GMT-0400 (Eastern Daylight Time)'

  // currDateTime = new Date();
  // returns > 2020 - 09 - 03T14: 39: 23.135Z

  // Date.now()
  // returns > 1599144094215

  let currDateTime = new Date();

  let day = currDateTime.getDay();


  console.log(`Today is: ${day}`)
  console.log("Current Time is:")
}