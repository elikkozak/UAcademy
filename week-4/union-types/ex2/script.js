"use strict";
const printNumbers = function (number) {
    if (Array.isArray(number)) {
        if (typeof number[0] === "number") {
            console.log(`${"number[]"} ${number.join(" ")}`);
        }
        else if (typeof number[0] === "string") {
            console.log(`${"string[]"} ${number.join(" ")}`);
        }
        else {
            console.log("ERROR WRONG TYPE");
        }
    }
    else if (typeof number === "string" || typeof number === "number") {
        console.log(`${typeof number} ${number}`);
    }
    else {
        console.log("WRONG TYPE ERROR");
    }
};
printNumbers(["0000000", "1111111", "222222"]);
printNumbers([999999, 1111111, 222222]);
printNumbers(999999);
printNumbers("999999");
