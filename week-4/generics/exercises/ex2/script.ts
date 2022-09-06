class MyGeneric<Type>{
    numbers : Type[]; 
    constructor(numbers:Type[]){
        this.numbers =(numbers)

    }
    addNumber(num:Type):void{
        this.numbers.push(num)
    }

    getNumValue(val: string | number): number {
        if (typeof val === 'string') {
            const num: number = parseInt(val);
            return !isNaN(num) ? num : 0;
        } else {
            return val;
        }
    }

     sum(): number {
        let total: number = 0;
        this.numbers.forEach(elem => {
            if (typeof elem === 'string' || typeof elem === 'number') {
                total += this.getNumValue(elem)
            }
        });
        return total;
        }    
}

const numbers1: MyGeneric<string> = new MyGeneric<string>(["asd", "1"]);
numbers1.addNumber("10");
numbers1.addNumber("wow");
numbers1.addNumber("1");

const numbers2: MyGeneric<number> = new MyGeneric<number>([5]);
numbers2.addNumber(24);
numbers2.addNumber(231);

console.log(`1: ${numbers1.sum()}`);
console.log(`2: ${numbers2.sum()}`);