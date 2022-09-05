// Spot Check 1

class Person {
  constructor(name, startYear) {
    this.name = name;
    this.startYear = startYear;
    this.courses = [];
  }

  addCourse(course) {
    this.courses.push(course);
  }
}

class Student extends Person {
  constructor(name, startYear) {
    super(name, startYear);
    this.grades = [];
  }

  receiveGrade(courseName, finalGrade) {
    this.grades.push({
      course: courseName,
      grade: finalGrade,
    });
  }

  //method overriding!
  addCourse(course) {
    if (this.courses.indexOf(course) == -1) {
      super.addCourse(course);
    }
  }
}

// class Teacher extends Person {
//   constructor(name, startYear, salary) {
//     super(name, startYear);
//     this.salary = salary;
//   }

//   giveGrade(student, courseName, finalGrade) {
//     student.grades.push({
//       course: courseName,
//       grade: finalGrade,
//     });
//   }
// }

// const s1 = new Student("Ronda", 2017);
// const t1 = new Teacher("Cassandra", 2002, 40000);

// t1.giveGrade(s1, "Algebra II", 82);
// const firstGrade = s1.grades[0];

// console.log(
//   `${s1.name} received an ${firstGrade.grade} in ${firstGrade.course}`
// );
//above should print "Ronda received an 82 in Algebra II"

// Spot Check 2

// const s1 = new Student("Ronda", 2017)
// const t1 = new Teacher("Cassandra", 2002, 40000)
// const p1 = new Person("Anon", 1999)

// s1 instanceof Person //True
// t1 instanceof Teacher //True
// t1 instanceof Person // True
// s1 instanceof Teacher //False
// t1 instanceof Student // False
// p1 instanceof Person //True
// p1 instanceof Student // False
// p1 instanceof Teacher// Fa;se

// s1 instanceof p1

// Spot Check 3

class Teacher extends Person {
  constructor(name, startYear, salary) {
    super(name, startYear);
    this.salary = salary;
    this.courses = {};
  }

  giveGrade(student, courseName, finalGrade) {
    student.grades.push({
      course: courseName,
      grade: finalGrade,
    });
  }

  //method overriding!
  addCourse(course) {
    if (this.courses[course] !== undefined) {
      this.courses[course] += 1;
    } else {
      this.courses[course] = 1;
    }
  }
}

const t1 = new Teacher("Cassandra", 2002, 40000);
t1.addCourse("Math");
t1.addCourse("Math");
console.log(t1.courses);
t1.addCourse("Algebra");
t1.addCourse("Algebra");
console.log(t1.courses);
