const concat = function(str:(string | string[]),toPrint:(boolean | number)):void{
    if((typeof toPrint === "boolean" && toPrint === true) ||(typeof toPrint === "number" && toPrint === 1) ){
        if(Array.isArray(str)){
            console.log(str.reduce(
                (previousValue, currentValue) => previousValue + currentValue,
                ""
            )
            )
        }
        else{
            console.log(str)
        }
    }   
}

concat("abc",true)
concat(["a","b","c"],1)
concat(["a","b","c","a","b","c"],false)
concat("abcabc",0)

// concat("abcabc","0")
