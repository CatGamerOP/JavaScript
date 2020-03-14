"use strict";

// let a;
// console.log(a)
// console.log(typeof a);

// a=34
// console.log(a)
// console.log(typeof a);

// let b = "30"
// b = 30;
// console.log(b);
// console.log(typeof b);

// let c = false
// c = true
// console.log(c);
// console.log(typeof c);

// var d = 20;
// console.log(d);
// console.log(typeof d);

// const name = "OwO";
// console.log(name);
// console.log(typeof name);
// // name = "Kate"
// // console.log(name);
// // console.log(typeof name);

// const isAuthenticated = true;
// console.log(isAuthenticated);
// console.log(typeof isAuthenticated);

// const isModalOpen = false
// console.log(isModalOpen);
// console.log(typeof isModalOpen);

// const fe_group = null;
// console.log(fe_group);
// console.log(typeof fe_group);

// const message = "hello! Great to have you here!";
// console.log(message);

// let men = "Ben";
// console.log(men);
// console.log(`${men}, ${message}`)

// // alert(`${men}, ${message}`)

// // const isReady = confirm ("reeweeeeeeeeeeeeeeeerrrrwrewrerwrwrwrererwrewewrewrew")
// // console.log(isReady);

// const enterName = prompt('Enter ur name!');
// console.log(enterName);
// console.log(typeof enterName);  

// Classwork1

const x = 11;
const y = 5;
const z = 2;
console.log(x + y); // 16
console.log(x - y); // 5
console.log(x * y); // 55
console.log(x / y); // 2.2
console.log(x % y); // 11

console.log(y ** z); // 25

console.log(x + y * z); // 21

console.log((x + y) * z); //32

console.log(x + y ** z);
console.log((x + y) * z);

let value = 100;
value = value + 33;
console.log(value);
value = value + 33;
console.log(value);

value += 44;
console.log(value);

const p = 100;
const r = 3;
const s = 100;
console.log("p > r", p > r); // true

console.log("p < r", p < r); // false
console.log("p <= s", p <= s);

console.log("p > s", p > s);
console.log("p >= s", p >= s);

console.log(3 > 2 > 1);
console.log(3 > 2 >= 1);

console.log(3 > 2 == 1); //true
console.log(3 > 2 === 1); //false

console.log("p === r", p === r) // false
console.log("p == r", p == r) // false
console.log(3 == "3");
console.log(3 === "3");

console.log ("p !== r", p !==r); // true
console.log ("p !== s", p !==s); // false
console.log("3 != '3'", 3 != "3")
console.log("3 !== '3'", 3 !== "3")

const num1 = 5;
const num2 = 18;
const str1 = "5";
const str2 = "18";
console.log("num === str", num1 === str1);
console.log("num == str", num1 == str1);
console.log(num1 + str1);
console.log(typeof (num1 + str1));
console.log(str1 + num1 + str2);
console.log(str1 + num1 + num2 + str2);
console.log(num1 + num2 + str1 + str2);
console.log(typeof (num1 + num2 + str1 + str2));

// let userAge = prompt("Enter ur age")
// console.log(userAge);
// console.log(typeof userAge);
// userAge = Number(userAge);
// console.log(userAge);
// console.log(typeof userAge);

// const val1 = "17"
// console.log(Number(val1));

console.log(Number.parseInt("112px"));
console.log(Number.parseInt("11abc22"));
console.log(Number.parseInt("1.1xy9"));
console.log(Number.parseInt("qweEe131"));


console.log(Number.parseFloat("112px"));
console.log(Number.parseFloat("11abc22"));
console.log(Number.parseFloat("1.1xy9"));
console.log(Number.parseFloat("qweEe131"));

const validNumber = Number("1024");
console.log(validNumber);
console.log(Number.isNaN(validNumber));

const invalidNumber = Number("ggg");
console.log(invalidNumber);
console.log(Number.isNaN(invalidNumber));

const V = 0.1;
const W = 0.2;
console.log("0.1 + 0.2 = ", V + W);
console.log(V + W === 0.3);

console.log ((V* 10 + W * 10) / 10);

console.log(Math.floor(1.99));
console.log(Math.floor(1.5));
console.log(Math.floor(1.1));

console.log(Math.ceil(1.99));
console.log(Math.ceil(1.5));
console.log(Math.ceil(1.1));

console.log(Math.round(1.99));
console.log(Math.round(1.5));
console.log(Math.round(1.1));

console.log(Math.max(1, 3, 2, 0));
console.log(Math.min(1, -3, 2, 0));

console.log(Math.pow(3, 2));

console.log(Math.random());
console.log(Math.random() * (10-1) + 1);
console.log(Math.random() * 10);

let animal = "tiger";
console.log(animal.length);

animal = "pink panter!";