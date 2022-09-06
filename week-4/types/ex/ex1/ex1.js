"use strict";
const sum = (numArr) => {
    let sum = 0;
    for (let num of numArr) {
        sum += num;
    }
    return sum;
};
const isEven = (num) => {
    return num % 2 === 0;
};
let arr1 = [1, 1, 1, 1];
console.log(`arr:${arr1} sum: ${sum(arr1)} is even:${isEven(sum(arr1))}`);
let arr2 = [1, 2, 3, 4];
console.log(`arr:${arr2} sum: ${sum(arr2)} is even:${isEven(sum(arr2))}`);
let arr3 = [1];
console.log(`arr:${arr3} sum: ${sum(arr3)} is even:${isEven(sum(arr3))}`);
