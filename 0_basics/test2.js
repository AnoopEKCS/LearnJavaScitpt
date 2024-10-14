// let value = 3
// let negValue = -value
// console.log(negValue)

// console.log(1+2+4)
// console.log(1+2+"2")
// console.log("2"+1+2)
// console.log(+true)
// console.log(true+) not valid
// console.log(+"")

// let gameCounter = 100
// //gameCounter++;
// ++gameCounter;
// console.log(gameCounter)


// const scoreData = 100;
// const scoreValue = 100.3

// const isLoggedIn = false
// const outsideTemp = null
// let userEmial;

// const id = Symbol('123');
// const anotherId = Symbol('123');
// console.log(id === anotherId);


// let myObject = {
//     myName: "Anoop Upadhyay",
//     age: 22,
//     phone: 9540218752
// }

// console.log(myObject)

// const myHeading = document.querySelector("h1");
// myHeading.textContent = "Hello world!";

const strValue = "Hello";
console.log(strValue.at(1)); // Outputs: e
console.log(strValue.at(-1)); // Outputs: o

// const strValue = "Hello";
// console.log(strValue.charAt(1)); // Outputs: e

function isCompanyEmail(email) {
    return email.endsWith("@company.com");
  }
  console.log(isCompanyEmail("employee@company.com")); // Outputs: true
  console.log(isCompanyEmail("user@gmail.com"));       // Outputs: false
  
