// class Person {
//     constructor(firstName, lastName, gender, age) {
//         this.firstName = firstName;
//         this.lastName = lastName;
//         this.gender = gender;
//         this.age = age;
//     }


//     get fullName() {
//         return `${this._firstName} ${this._lastName}`;
//     }

//     set fullName(value) {
//         [this._firstName, this._lastName] = value.split(' ');
//     }

//     get gender() {
//         return this._gender;
//     }

//     set gender(value) {
//         this._gender = value;
//     }

//     get age() {
//         return this._age;
//     }

//     set age(value) {
//         this._age = value;
//     }

//     toString() {
//         return JSON.stringify(this);
//     }
// }

// const person1 = new Person('Aram', 'Antonyan', 'male', 24);
// const person2 = new Person('Anahit', 'Gevorgyan', 'female', 23);


// class Student extends Person {
//     constructor(firstName, lastName, gender, age, programs = [], year, fee) {
//         super(firstName, lastName, gender, age);
//         this.programs = programs;
//         this.year = year;
//         this.fee = fee;
//     }

//     get programs() {
//         return this._programs;
//     }

//     set programs(value) {
//         this._programs = value;
//     }

//     get year() {
//         return this._year;
//     }

//     set year(value) {
//         this._year = value;
//     }

//     get fee() {
//         return this._fee;
//     }

//     set fee(value) {
//         this._fee = value;
//     }


//     passExam(program, grade) {
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
// }

// const student_1 = new Student('Aram', 'Rushanyan', 'male', 21, ['Algebra', 'English'], 2020, '700000֏');
// const student_2 = new Student('Artyom', 'Atabekyan', 'male', 22, ['Algebra'], 2020, '500000֏');

// student_1.passExam(['Algebra', 'English'], [50, 90]);

// class Teacher extends Person {
//     constructor(firstName, lastName, gender, age, program, pay) {
//         super(firstName, lastName, gender, age);
//         this.program = program;
//         this.pay = pay;
//     }

//     get program() {
//         return this._program;
//     }

//     set program(value) {
//         this._program = value;
//     }

//     get pay() {
//         return this._pay;
//     }

//     set pay(value) {
//         this._pay = value;
//     }
// }

// const teacher = new Teacher('Gevorg', 'Manucharyan', 'male', 35, ['Algebra', 'English'], '700000֏');


