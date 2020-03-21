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

// const x = 11;
// const y = 5;
// const z = 2;
// console.log(x + y); // 16
// console.log(x - y); // 5
// console.log(x * y); // 55
// console.log(x / y); // 2.2
// console.log(x % y); // 11

// console.log(y ** z); // 25

// console.log(x + y * z); // 21

// console.log((x + y) * z); //32

// console.log(x + y ** z);
// console.log((x + y) * z);

// let value = 100;
// value = value + 33;
// console.log(value);
// value = value + 33;
// console.log(value);

// value += 44;
// console.log(value);

// const p = 100;
// const r = 3;
// const s = 100;
// console.log("p > r", p > r); // true

// console.log("p < r", p < r); // false
// console.log("p <= s", p <= s);

// console.log("p > s", p > s);
// console.log("p >= s", p >= s);

// console.log(3 > 2 > 1);
// console.log(3 > 2 >= 1);

// console.log(3 > 2 == 1); //true
// console.log(3 > 2 === 1); //false

// console.log("p === r", p === r) // false
// console.log("p == r", p == r) // false
// console.log(3 == "3");
// console.log(3 === "3");

// console.log ("p !== r", p !==r); // true
// console.log ("p !== s", p !==s); // false
// console.log("3 != '3'", 3 != "3")
// console.log("3 !== '3'", 3 !== "3")

// const num1 = 5;
// const num2 = 18;
// const str1 = "5";
// const str2 = "18";
// console.log("num === str", num1 === str1);
// console.log("num == str", num1 == str1);
// console.log(num1 + str1);
// console.log(typeof (num1 + str1));
// console.log(str1 + num1 + str2);
// console.log(str1 + num1 + num2 + str2);
// console.log(num1 + num2 + str1 + str2);
// console.log(typeof (num1 + num2 + str1 + str2));

// // let userAge = prompt("Enter ur age")
// // console.log(userAge);
// // console.log(typeof userAge);
// // userAge = Number(userAge);
// // console.log(userAge);
// // console.log(typeof userAge);

// // const val1 = "17"
// // console.log(Number(val1));

// console.log(Number.parseInt("112px"));
// console.log(Number.parseInt("11abc22"));
// console.log(Number.parseInt("1.1xy9"));
// console.log(Number.parseInt("qweEe131"));


// console.log(Number.parseFloat("112px"));
// console.log(Number.parseFloat("11abc22"));
// console.log(Number.parseFloat("1.1xy9"));
// console.log(Number.parseFloat("qweEe131"));

// const validNumber = Number("1024");
// console.log(validNumber);
// console.log(Number.isNaN(validNumber));

// const invalidNumber = Number("ggg");
// console.log(invalidNumber);
// console.log(Number.isNaN(invalidNumber));

// const V = 0.1;
// const W = 0.2;
// console.log("0.1 + 0.2 = ", V + W);
// console.log(V + W === 0.3);

// console.log ((V* 10 + W * 10) / 10);

// console.log(Math.floor(1.99));
// console.log(Math.floor(1.5));
// console.log(Math.floor(1.1));

// console.log(Math.ceil(1.99));
// console.log(Math.ceil(1.5));
// console.log(Math.ceil(1.1));

// console.log(Math.round(1.99));
// console.log(Math.round(1.5));
// console.log(Math.round(1.1));

// console.log(Math.max(1, 3, 2, 0));
// console.log(Math.min(1, -3, 2, 0));

// console.log(Math.pow(3, 2));

// console.log(Math.random());
// console.log(Math.random() * (10-1) + 1);
// console.log(Math.random() * 10);

// let animal = "tiger";
// console.log(animal.length);

// animal = "pink panter!";

// Classwork2

console.log(Boolean(0));
console.log(typeof 0);

console.log(Boolean(NaN));
console.log(typeof NaN);

console.log(Boolean(null));
console.log(typeof null);

console.log(Boolean(undefined));
console.log(typeof undefined);

console.log(Boolean(false));
console.log(typeof false);

console.log(Boolean(""));
console.log(typeof "");

console.log(Boolean(" "));
console.log(typeof " ");

console.log(Number(false));
console.log(Number(true));

console.log(false == undefined)
console.log(false == null)
console.log(undefined == null)
console.log(undefined === null)

const KPI = 30
const fact = KPI > 20 && KPI < 31;
console.log(fact); // true

console.log("cat" && "dog" && "parrot");

const fact2 = KPI > 20 && KPI < 29;
//    true && false;

console.log(fact2);
console.log("cat" && false);

const fact1 = KPI > 31 && KPI <32
//             false && true
console.log(fact1);

const age = 30;
const trueAge = age < 31 || age > 29
console.log(trueAge);

console.log("cat" || "parrot");
//           true || true

const trueAge1 = age < 31 || age > 32;
//                   true || false

console.log(trueAge1); // true
console.log("cat" || false);
//           true || false // cat
const trueAge2 = age < 29 || age > 27;
//                  false || true // true

console.log(trueAge2);
console.log(false || "parrot");

const trueAge3 = age < 29 || age > 31;
//                  false || false

console.log(trueAge3);

console.log(!true);
console.log(!false);

console.log(!1);
console.log(!!1);

console.log(!0);
console.log(!!0);

console.log(!"cat");

const quantity = 50;

console.log((false && true) || true);
//           (false)        || true

console.log(false && (true || true))

console.log((quantity > 39 && quantity < 49) || quantity > 48)
// (true && false) || true

console.log((true && false) || "parrot");

console.log((quantity > 51 && quantity < 53) || quantity > 48);
//            false && true || true // true
//                    false || true; // true

console.log((quantity > 51 && quantity < 49) || quantity > 49)

console.log((quantity > 51 && quantity < 51) || quantity > 52);

console.log((quantity > 39 && quantity > 49) || quantity > 51);

console.log((quantity > 51 && quantity < 49) || quantity > 52);

console.log((false && true) || NaN);

console.log((true && true) || NaN);

console.log(NaN || (true && true));



let cost;

const subscribtion = "pr";

if (subscribtion === "pro") {
    cost = 100;
}

if (subscribtion === "pr") {
    cost = 0;
}

if (subscribtion === "pr") {
    cost = 34;
}

console.log(cost); 


// let day = prompt("Enter today day please")
// let weekday;

// if (day === String("Saturday") || day === String("Sunday")) {
//     weekday = "holiday"

// } else {
//     weekday = "workday";
// }
// console.log(day)
// console.log (weekday);



// let value = prompt("Boolean value")
// let bool;

// if (value === "true" || value === "false") {
//     bool = "Boolean";
// } else {
//     bool = "It's no a bool"
// }

// console.log(value)
// console.log(bool)



// let day = prompt("Enter today day please")
// let weekday;

// if (day === String("Saturday") || day === String("Sunday")) {
//     weekday = "holiday"
// } else if (
//     day === "Monday"
//     day === "t"
//     day === "w"w
//     day === "t"
//     day === "f"

// ) else {
//     weekday = "workday";
// }
// console.log(day)
// console.log (weekday);


// let studentAge = prompt("Enter ur age")
// let group;

// if (studentAge > 11 && studentAge < 15) {
//     group = "Junior";
// } else if (studentAge > 14 && studentAge < 18){
//     group = "Middle"
// } else {
//     group = "....."
// }
// console.log(studentAge)
// console.log(group);



// let answer;
// let question = confirm("Student?")

// // if (question === true) {
// //     answer = "yes"
// // } else {
// //     answer = "no";
// // }

// answer = question === true ? "yes" : "no";

// console.log(answer);


// let day = prompt("Day")
// let weekday;

// switch (day) {
//     case "Monday":
//         weekday = "bad day"
//         break;

//     case "Tuesday":
//         weekday = "hd"
//         break;

//     case "Wednesday":
//         weekday = "a workday and hd"
//         break;

// }

// Взять в конспекте


// let myFirstName = "Sasha";
// console.log("GLOBAL scope:", myFirstName);

// if (true) {
//     console.log("BLOCK scope:", myFirstName);
// }

// if (true) {
//     let mySecondName = "Hrevtsova";
//     console.log("BLOCK scope:", mySecondName);

// }

// console.log("GLOBAL scope:", mySecondName);


// const global = "GLOBAL!!!";

// if (true) {
//     const blockA = "block A";
//     console.log(blockA);
//     console.log(global);
//     // console.log(blockB);
//     console.log(blockC);

//     if (true) {
//         const blockB = "block B";
//     }
    
// }

// // Взять в конспекте

// if (true) {
//     const blockC = "block C"
// }



// let counter = 0;

// while (counter <= 10) {
//     console.log("counter:", counter);
//     counter += 1;
// }


// let clientCounter = 18;
// const maxClients = 25;

// while (clientCounter <= maxClients) {
//     console.log(clientCounter);
//     clientCounter += 1;
// }


// let password = "";

// do {
//     password = prompt("parol")

// } while (password.length < 5);

// console.log("Parol:", password);



// const max = 100;

// for (let i = 10; i <= max; i += 5) {
//     console.log(i);
// // }


// const target = 4;
// let sum = 0;

// for (let i = 0; i <= target; i +=1) {
//     console.log(i);
//     sum += i;

// }
// console.log(sum);


// const max = 10;

// for (let i = 0; i < max; i += 1) {
//     console.log(`${max} % ${i} = `, max % i)
// }

// for (let i = 0; i < 10; i+= 1) {
//     if (i === 5) {
//         console.log(i);
//         console.log("5hfgjhf")
//         break;
//     }
// }



const number = 10;

for (let i = 0; i < number; i += 1) {
    if (i % 2 === 0) {
        continue;
    }
    console.log("Нечётное i:", i)
}