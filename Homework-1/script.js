// /Task-1

// function oddOrEven(num) {
//         return num % 2 === 0 ? "even" : "odd";
// }

// console.log(oddOrEven(123));



// /Task-2

// function isDivided(n, m) {
//         return n % m === 0 || m % n === 0 ? 1 : 0;
// }

// console.log(isDivided(3, 14));

// //////----------

// function isDivided(n, m) {
//     return Number(n % m === 0 || m % n === 0);
// }

// console.log(isDivided(3, 14));

// Task - 3

// function getAngle(a, b) {
//         if (a === 0 || b === 0) return "Invalid parameter";
//         return 180 - (a + b);
// }

// console.log(getAngle(75, 25));

// Task - 4

// function concatAndAdd(n) {
//         if (n < 0) return `${n} is not a positive integer`;
//         let tmp = n + "";
//         let sum = n;
//         let count = 0;
//         while (count < 2) {
//                 tmp += n;
//                 sum += Number(tmp);
//                 count++;
//         }
//         return sum;
// }
// console.log(concatAndAdd(17));



// Task - 5

// function firstDigit(n) {
//         while (n >= 10) {
//                 n /= 10;
//         }

//         return Math.floor(n);
// }

// function lastDigit(n) {
//         return Math.floor(n % 10);
// }

// function replace(n) {
//         if (lastDigit(n) === 0 || n / 10 <= 1) return n;
//         n += "";
//         let result = [];
//         result.push(lastDigit(n));
//         for (let i = 1; i < n.length - 1; i++) {
//                 result.push(n[i]);
//         }

//         result.push(firstDigit(n));
//         return Number(result.join(""));
// }
// console.log(replace(17));

// Task - 6

// function getAverage() {
//         let sum = 0;
//         let n;
//         let txt = "Average of numbers : ";

//         for (let i = 0; i < 5; i++) {
//                 n = parseInt(prompt("Enter the number", "0"));
//                 sum += n;
//                 txt += n + " | ";
//         }

//         return `${txt} is ${sum / 5}`;
// }
// console.log(getAverage());



// Task - 7

// “21 is a multiple of 3 and 7.”
// “13 is not a multiple of 3, 5 or 7.”

// function isMultiple(num) {
//         let is_divided_three = false;
//         let is_divided_five = false;
//         let is_divided_seven = false;

//         if (num % 3 === 0) {
//                 is_divided_three = true;
//         }

//         if (num % 5 === 0) {
//                 is_divided_five = true;
//         }

//         if (num % 7 === 0) {
//                 is_divided_seven = true;
//         }

//         if (is_divided_three && is_divided_five && is_divided_seven) {
//                 return `${num} is  a multiple of 3, 5 and 7.`;
//         } else if (is_divided_three && is_divided_five && !is_divided_seven) {
//                 return `${num} is  a multiple of 3, 5.`;
//         } else if (is_divided_three && !is_divided_five && is_divided_seven) {
//                 return `${num} is  a multiple of 3, 7.`;
//         } else if (!is_divided_three && is_divided_five && is_divided_seven) {
//                 return `${num} is  a multiple of 5, 7.`;
//         } else if (is_divided_three && !is_divided_five && !is_divided_seven) {
//                 return `${num} is  a multiple of 3.`;
//         } else if (!is_divided_three && !is_divided_five && is_divided_seven) {
//                 return `${num} is  a multiple of 7.`;
//         } else if (!is_divided_three && is_divided_five && !is_divided_seven) {
//                 return `${num} is  a multiple of 5.`;
//         } else {
//                 return `${num} is not a multiple of 3, 5 or 7.`;
//         }
// }

// console.log(isMultiple(24));

// Task - 8

// function ageValidation(age, date) {
//         if (date === "month") {
//                 if (age <= 1 || age >= 12) {
//                         return "Invalid month value";
//                 } else {
//                         return "baby";
//                 }
//         } else if (date === "years") {
//                 if (age >= 1 && age <= 2) {
//                         return "toddler";
//                 } else if (age > 2 && age <= 12) {
//                         return "child";
//                 } else if (age >= 13 && age <= 17) {
//                         return "teenager";
//                 } else if (age >= 18) {
//                         return "adult";
//                 }
//         } else {
//                 return "Invalid month value";
//         }
// }

// console.log(ageValidation(45, "years"));

// Task - 9

// function getAscendingOrder(...arr) {
//         let tmp;
//         for (let i = 0; i < arr.length; i++) {
//                 for (let j = 0; j < arr.length; j++) {
//                         if (arr[i] < arr[j]) {
//                                 tmp = arr[i];
//                                 arr[i] = arr[j];
//                                 arr[j] = tmp;
//                         }
//                 }
//         }
//         return arr;
// }
// console.log(getAscendingOrder(45, 26, 78));

// Task - 10

// function getAnswerResult() {
//         let myArr = [];
//         let result;
//         for (let i = 0; i < 3; i++) {
//                 myArr.push(parseFloat(prompt("Enter the scores of the three exams.")));
//         }
//         myArr = myArr.filter(el => el >= 40);
//         if (myArr.length === 3) {
//                 result = "Passed";
//         } else if (myArr.length === 2) {
//                 myArr = myArr.reduce((x, y) => (x + y) / myArr.length);
//                 result = myArr >= 50 ? "Passed" : "Not passed";
//         } else {
//                 result = "Not passed";
//         }
//         return result;
// }
// console.log(getAnswerResult());

// Task - 11

// function isValue(a, b, c) {
//         if (a > 0 && b > 0 && c > 0) {
//                 console.log("The sign is +");
//         }
//         else if (a === 0 || b === 0 || c === 0) {
//                 console.log("unsigned");
//         }
//         else if (a > 0 && b < 0 && c < 0) {
//                 console.log("The sign is +");
//         }
//         else if (a < 0 && b > 0 && c < 0) {
//                 console.log("The sign is +");
//         }
//         else {
//                 console.log("The sign is -");
//         }
// }

// isValue(4, -19, 2);


// Task - 12

// const discriminate = (a, b, c) => {
//         let D = (Math.pow(b, 2)) - (4 * a * c);
//         let x1 = (-b + Math.sqrt(D)) / (2 * a);
//         let x2 = (-b - Math.sqrt(D)) / (2 * a);
//         if (a === 0 || b === 0 || c === 0) {
//                 return 'Enter valid constans';
//         } else if (D < 0) {
//                 return 'Solution does not exists';
//         } else if (x1 === x2) {
//                 return `Solution is ${x1}`;
//         } else {
//                 return `Solutions are ${x1} and ${x2}`;
//         }

// }
// console.log(discriminate(1, 2, 1));


// Task - 13
// var n = +prompt();

// var j = 0;
// var i = 0;

// if (n % 2 === 0 && !Math.floor(n / 10)) {
//         i += 1;
// }
// if (n % 3 === 0 && n % 10 === 1) {
//         j += 1;
// }

// Task - 14

// const isContainsNumber = ((num, n) => {
//         let myArr = [];
//         let tmp;
//         let result = "No";
//         while (num) {
//                 tmp = num % 10;
//                 num = (num - tmp) / 10;
//                 myArr.push(tmp);
//                 if (tmp === n) result = "Yes";
//         }
//         return result;
// });

// console.log(isContainsNumber(45689, 8));

// Task - 15

// function firstDigit(n) {
//         while (n >= 10) {
//                 n /= 10;
//         }

//         return Math.floor(n);
// }

// function lastDigit(n) {
//         return Math.floor(n % 10);
// }

// function reverseNumber(n) {
//         n += "";
//         let result = [];
//         result.push(lastDigit(n));
//         for (let i = 1; i < n.length - 1; i++) {
//                 result.push(n[i]);
//         }

//         result.push(firstDigit(n));
//         return Number(result.join(""));
// }
// console.log(reverseNumber(895796));

// Task - 17

// const getArea = (str, a, b) => {
//         let result;
//         if (a === 0 || b === 0) {
//                 result = `Please enter only positives`;
//         }
//         else if (str === "triangle") {
//                 result = `Square of the triangle is ${(a * b) / 2}`;
//         } else if (str === "rectangle") {
//                 result = `Square of the rectangle is ${a * b}`;
//         }
//         return result;
// }

// console.log(getArea("rectangle", 8, 5));

// Task - 18

// function differenceBetweenDigits(n) {
//         let myArr = [];
//         let tmp;
//         while (n) {
//                 tmp = n % 10;
//                 n = (n - tmp) / 10;
//                 myArr.push(tmp)
//         }
//         if (myArr.length === 1) return myArr[0];
//         let result = Math.max(...myArr) - Math.min(...myArr);
//         return result;
// }
// console.log(differenceBetweenDigits(4593653));



