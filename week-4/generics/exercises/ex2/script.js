"use strict";
class MyGeneric {
    constructor(numbers) {
        this.numbers = (numbers);
    }
    addNumber(num) {
        this.numbers.push(num);
    }
    getNumValue(val) {
        if (typeof val === 'string') {
            const num = parseInt(val);
            return !isNaN(num) ? num : 0;
        }
        else {
            return val;
        }
    }
    sum() {
        let total = 0;
        this.numbers.forEach(elem => {
            if (typeof elem === 'string' || typeof elem === 'number') {
                total += this.getNumValue(elem);
            }
        });
        return total;
    }
}
const numbers1 = new MyGeneric(["asd", "1"]);
numbers1.addNumber("10");
numbers1.addNumber("wow");
numbers1.addNumber("1");
const numbers2 = new MyGeneric([5]);
numbers2.addNumber(24);
numbers2.addNumber(231);
console.log(`1: ${numbers1.sum()}`);
console.log(`2: ${numbers2.sum()}`);
