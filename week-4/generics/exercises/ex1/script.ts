// type Type = number | number[] | string | string[]
function sum<Type>(numbers:Type):number {
    if(Array.isArray(numbers)){
        if(typeof numbers[0] === "number"){
            const sum = numbers.reduce((acc, curr) => acc + curr, 0);
            return sum
        }
        else if(typeof numbers[0] === "string"){
            let sum =0
            for (let str of numbers){
                const parsed = parseInt(str)
                sum += !isNaN(parsed)?parsed:0
            }
            return sum
        }
        else{
            console.log("ERROR")
            return -1
        }
    }
    else if(typeof numbers === 'number'){
        return numbers
    }
    else if(typeof numbers === 'string'){
        let parsed = parseInt(numbers)
        return !isNaN(parsed)?parsed:-1
    }
    else{
        console.log("ERROR")
        return -1
    }

}

console.log(sum("100"))
console.log(sum(100))
console.log(sum([1,1,1,1,1]))
console.log(sum(["100","sd","300"]))
console.log(sum(true))