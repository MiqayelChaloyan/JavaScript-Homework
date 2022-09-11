// function Person(firstName, lastName, gender, age) {
//     this.firstName = firstName;
//     this.lastName = lastName;
//     this.gender = gender;
//     this.age = age;
// }

// Object.defineProperty(Library.prototype, 'toString', {
//     writable: true,
//     configurable: true,
//     enumerable: false,
//     value: function () {
//         return JSON.stringify(this);
//     }
// });


// const person1 = new Person('Aram', 'Antonyan', 'male', 24);
// const person2 = new Person('Anahit', 'Gevorgyan', 'female', 23);

// function Student(firstName, lastName, gender, age, programs = [], year, fee) {
//     Person.call(this, firstName, lastName, gender, age);
//     this.programs = programs;
//     this.year = year;
//     this.fee = fee;
// }

// Student.prototype = Object.create(Person.prototype);
// Student.prototype.constructor = Student;

// Object.defineProperty(Library.prototype, 'passExam', {
//     writable: true,
//     configurable: true,
//     enumerable: false,
//     value: function (program, grade) {
//         let i = 0;
//         let review;
//         const book = program.reduce((accum, elem) => {
//             review = true;
//             if (grade[i] >= 50) {
//                 accum[elem] = grade[i];
//             } else {
//                 review = false;
//             }
//             i += 1;
//             return accum;
//         }, {});

//         if (review) {
//             this.year += 1;
//             return;
//         } else {
//             return false;
//         }
//     }
// });

// const student_1 = new Student('Aram', 'Rushanyan', 'male', 21, ['Algebra', 'English'], 2020, '700000֏');
// const student_2 = new Student('Artyom', 'Atabekyan', 'male', 22, ['Algebra'], 2020, '500000֏');

// student_1.passExam(['Algebra', 'English'], [50, 90]);

// function Teacher(firstName, lastName, gender, age, program, pay){
//     Person.call(this, firstName, lastName, gender, age);
//     this.program = program;
//     this.pay = pay;
// }

// Teacher.prototype = Object.create(Person.prototype);
// Teacher.prototype.constructor = Teacher;

// const teacher = new Teacher('Gevorg', 'Manucharyan', 'male', 35, ['Algebra', 'English'], '700000֏');
