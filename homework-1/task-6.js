"use strict";

const credits = 23580;
const pricePerDroid = 3000;
let androids = prompt("Enter number");

if (androids == null) {
    console.log(`Отменено пользователем!`);
} else {
    let totalPrice
    totalPrice = pricePerDroid * Number(androids)
    if (totalPrice > credits) {
    console.log(`Недостаточно средств на счету!`) 
} else {
    console.log(`Вы купили ${androids} дроидов, на счету осталось ${credits - totalPrice} кредитов.`) 
    }
}