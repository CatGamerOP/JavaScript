"use strict";

const var1 = 1
const var2 = 0
const var3 = true

console.log(var1 > var2); // true
console.log(var1 == var2); // false
console.log(var1 === var2); // false
console.log(var1 != var3); // false
console.log(var2 != var3); // true
console.log(var1 > var2 == var3); // true
console.log(var1 > var2 > var3); // false


let val = "River"
console.log(val);
console.log(isNaN(val)) // true
console.log(typeof val); // string

val = "Mountain"
console.log(val);
console.log(isNaN(val)) // true
console.log(typeof val); // string

val = 232
console.log(val);
console.log(isNaN(val)) // false
console.log(typeof val); // number

val = true
console.log(val);
console.log(isNaN(val)) // false
console.log(typeof val); // boolean

val = null
console.log(val);
console.log(isNaN(val)) // false
console.log(typeof val); // object


const alfa = 0.2
const beta = 0.4

const result = ((alfa* 10 + beta * 10) / 10);
console.log(result)

let tetra = "12px"
console.log(tetra); //12px

tetra = "13.34em"
console.log(tetra); //13.34em


const a = 2
const b = 34
const c = 99
const d = 3
const f = 22
const g = 36
const h = 733
const j = 18
console.log(Math.max(a,b,c,d,f,g,h,j)) // 733
console.log(Math.min(a,b,c,d,f,g,h,j)) // 2


let random = (Math.random() * (19-3)) + 3
console.log(random)