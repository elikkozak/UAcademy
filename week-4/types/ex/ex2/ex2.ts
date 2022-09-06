class Student{
    name:string;
    age:number;
    grades:number[];
    constructor(name:string, age:number,grades:number[]){
        this.name = name,
        this.age = age,
        this.grades = grades
        
    }

    addGrade(grade:number){
        this.grades.push(grade)
    }

    getGradeAvg():number{
        let sum:number = 0
        for (let num of this.grades){
            sum += num
        }
        return sum / (this.grades.length)
    }
}

const student1 = new Student("John",27,[80,90,100,90])
const student2 = new Student("Maya",21,[80,70,80,60])
const student3 = new Student("Jonas",23,[80,70,80,90])
const student4 = new Student("Hana",24,[80,80,90,90])

const studentsArr:Student[] = [student1,student2,student3,student4]

for(let student of studentsArr){
    console.log(`My name is ${student.name} and my average grade is ${student.getGradeAvg()}`)
}