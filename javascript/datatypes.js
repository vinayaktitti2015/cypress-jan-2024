// primitive data types
const firstName = "James";
const firstName1 = "James1";

const lastName = "Doe";
const email = "doe@gmail.com";
const phone = 55353535333;
const price = 10.23;
let age = 30;

var bool = true; // commonJS
const isElementExist = true;
const lightOn = true;

const nul = null;
const undef = undefined;

// objects
const Person = {
  // properties
  firstName: "John",
  lastName: "Doe",
  age: 35,
  city: "Amsterdam",
  country: "NL",
  phone: "023434343",

  // user-defined function/methods
  getFullDetails: function () {
    return (
      this.firstName +
      " " +
      this.lastName +
      " " +
      this.age +
      " " +
      this.city +
      " " +
      this.country
    );
  },
};

console.log(
  "person name is " +
    Person.firstName +
    "\n" +
    Person.lastName +
    "\n" +
    Person.phone
);

console.log(Person.getFullDetails());

function userLogin() {
  console.log("user login successfully");
}

userLogin();
