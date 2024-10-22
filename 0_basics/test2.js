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

// const strValue = "Hello";
// console.log(strValue.at(1)); // Outputs: e
// console.log(strValue.at(-1)); // Outputs: o

// // const strValue = "Hello";
// // console.log(strValue.charAt(1)); // Outputs: e

// function isCompanyEmail(email) {
//     return email.endsWith("@company.com");
//   }
//   console.log(isCompanyEmail("employee@company.com")); // Outputs: true
//   console.log(isCompanyEmail("user@gmail.com"));       // Outputs: false
//   const max = 20;
//   const min = 10;
// console.log((Math.random()*10) + 1);
// console.log(Math.floor(Math.random() * (max - min + 1)) + min);
// let myDate = new Date('20/10/2024')
// console.log(Date.now());//return in current date
// console.log(Date.now()/1000);//return value in decimal 
// console.log(Math.floor(Date.now()/1000));//so here use mathfloor /1000 return in milisecondsgjgjh

const fruits = ["Apple", "Banana", "Pomegranate"]
const desiVibes = ["Bear", "takila", "whisky"]
const chakhna = ["moongfali", "salad", "chilliPotato"]
// console.log(fruits.length);
// console.log(fruits[1]);
// console.log(...fruits, ...desiVibes, ...chakhna);

const myArray = new Array(2)
//const myArray = new Array(2, 3)
// console.log(myArray[0]); 
// console.log(0 in myArray); 

const elements = ['Fire', 'Air', 'Water'];

// console.log(elements.join(', '));
// console.log(elements.join(' '));
// console.log(elements.join('-'));


const matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  ];

//   console.log(typeof (...matrix));


const users = [
    { name: 'Alice', age: 25 },
    { name: 'Bob', age: 30 },
    { name: 'Charlie', age: 35 }
  ];
  
  const names = users.map(user => user.name + '- age: ' + user.age);
//   console.log(names); // ['Alice', 'Bob', 'Charlie']

const arr2 = [0, 1, [2, [3, [4, 5]]]];
// console.log(arr2.flat(Infinity));

// console.log(...arr2)
  

const products = [
    { name: 'Laptop', price: 1000 },
    { name: 'Phone', price: 500 },
    { name: 'Tablet', price: 300 }
  ];
  
  const discountedPrices = products.map(product => ({
    name: product.name,
    price: product.price * 0.9 // Applying a 10% discount

  }));
  
  console.log(discountedPrices);
  
