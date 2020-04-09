"use strict";
let input = Number(prompt(`Enter number`));
let total = 0;

do { 
    input = Number(prompt(`Enter number`));
    total = total + input;
} while (input);

console.log("Total: ", total);