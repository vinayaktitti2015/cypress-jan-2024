var date = new Date();
var hour = date.getHours();
var day = date.getDay();
var todaysDate = date.getDate();
var month = date.getMonth() + 1;
var year = date.getFullYear();

const format = todaysDate + "-" + month + "-" + year;
console.log(format);

function greet() {
  var greeting;
  if (hour < 12) {
    return (greeting = "Good Morning!");
  } else if (hour > 12 && hour < 18) {
    return (greeting = "Good Afternoon!");
  } else {
    return (greeting = "Good Night!");
  }
}

console.log(greet());
