"use strict";
let a = 12;
let b = "Harsh Verma";
let c = true;
console.log(a);
console.log(b);
console.log(c);
let num = 124;
console.log(num);
let str_num;
str_num = "aa";
// what type a function return
const func = (n, m) => {
    return (n * m);
};
const funcname = (n, m) => {
    return n * m;
};
// Arrays
const arr = [2, 3, 5, 6];
const arr1 = ["s", 3];
const obj = {
    height: 34,
    weight: 33,
    gender: false
};
const obj2 = {
    height: 34,
    weight: 33
};
const object = {
    height: 32,
    haircolor: "blue",
    eyecolor: "red"
};
const func4 = (n, m, l) => {
    if (l === undefined) {
        return n * m;
    }
    return n * m * l;
};
console.log(func4(3, 4));
console.log(func4(3, 4, 5));
const func5 = (n, m, l = 10) => {
    return n * m * l;
};
console.log(func5(3, 4));
console.log(func5(3, 4, 5));
const func6 = (...m) => {
    return m;
};
const getProduct = (products) => {
    // products.id = 2345 // cannot assign because it is only readable not changeable
    console.log(products.name);
};
const p = {
    name: "mac",
    price: 2345656,
    image: "image.jpg",
    id: 44533
};
getProduct(p);
// Never type
const errorHandler = () => {
    throw new Error(); // throw return never 
};
