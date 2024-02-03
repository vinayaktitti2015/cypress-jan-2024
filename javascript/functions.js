// function expression
const obj = {
  fullDetails: function () {
    return console.log("this is a function expression");
  },
};

// function declaration
function userSignup() {
  console.log("user sign up successfully");
}

obj.fullDetails();

userSignup();

// ES6 module - arrow functions
const count = (a, b, c) => {
  return console.log(a + b + c);
};

count(10, 20, 30);
