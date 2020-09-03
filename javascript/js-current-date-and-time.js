function printDateTime() {


  // currDateTime = Date() ==  new Date().toString(36)
  // returns >> 'Thu Sep 03 2020 10:39:12 GMT-0400 (Eastern Daylight Time)'

  // currDateTime = new Date();
  // new Date() - creates a Date object representing the current date / time
  // returns >> 2020 - 09 - 03T14: 39: 23.135Z

  // Date.now()
  // Date.now() - returns the number of milliseconds since midnight 01 January, 1970 UTC
  // Date.now() == new Date().getTime() == new Date().valueOf
  // returns >> 1599144094215

  // const date = new Date(Date.UTC(2012, 11, 20, 3, 0, 0));
  // returns >> 2012 - 12 - 20T03: 00: 00.000Z

  let dateObj = new Date();

  let day = dateObj.getDay();

  let days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

  console.log(`Today is: ${days[day]}`)
  // console.log(`Today is: ${dateObj.toLocaleString("default", {weekday: "long"})}`)

  // var weekday = dateObj.toLocaleString("default", { weekday: "long" })
  // console.log(`Today is: ${days[day]}`)

  // alternatively
  // dateObj.toLocaleString([locales[, options]])
  // console.log(new Intl.DateTimeFormat('en-US').format(date));
  // returns >> "12/20/2012"

  // let o = new Intl.DateTimeFormat("en" , { timeStyle: "medium", dateStyle: "short"});
  // console.log(o.format(Date.now())); 
  // returns >> "07/07/20, 13:31:55 AM"



  console.log("Current Time is:")



}

printDateTime();


/*

getFullYear()
getMonth()	>> 0 - 11
getDate()	>> 1 - 31
getHours()	>> 0 - 23
getMinutes()	>> 0 - 59
getSeconds()	>> 0 - 59
getMilliseconds()	>> 0 - 999
getTime()	Get the time(milliseconds since January 1, 1970)
getDay()	>> 0 - 6

Date.now()

Error:    Date.now().getTIme()
Instead:  new Date().getTime()

*/