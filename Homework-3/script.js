//  Task - 1

// const myArr = [-60, 2, 43, -18, 5, -19, 36, 7, 56];

// function secondMax(arr) {
//     let max = -Infinity;
//     let result = -Infinity;

//     for (let i = 0; i < arr.length; i++) {
//         const nr = arr[i];
//         if (nr > max) {
//             [result, max] = [max, nr];
//         } else if (nr < max && nr > result) {
//             result = nr;
//         }
//     }

//     const index = arr.indexOf(result, 0);

//     return index;
// }

// console.log(secondMax(myArr));



//  Task - 2

// const myArr = [1, 2, 3, 4];

// function getArrEdges(arr, padAmount) {
//     const elemIsArr = {
//         "first": [],
//         "last": []
//     };

//     if (arr.length < padAmount) return 'Invalid padding amount';

//     let i = 0;
//     while (i < padAmount) {
//         elemIsArr["first"].push(arr[i]);
//         elemIsArr["last"].push(arr[arr.length - 1 - i]);
//         i++;
//     }

//     return elemIsArr;
// }

// function getArrayNew(arr, padAmount, repeat) {
//     let edges = getArrEdges(arr, padAmount);
//     let j = 0;
//     while (j < repeat) {
//         arr.splice(0, 0, edges["first"]);
//         arr.splice(-1, 0, edges["last"]);
//         j++;
//     }

//     return arr.flat(2);
// }

// console.log(getArrayNew(myArr, 2, 1));



//  Task - 3

// function verifyPassLength() {
//     let lowerCaseLetters = /[a-z]/g;
//     let upperCaseLetters = /[A-Z]/g;
//     let numbers = /[0-9]/g;
//     let character = /[$#@]/g;
//     let password = document.getElementById("password").value;

//     if (password.match(lowerCaseLetters) && password.match(upperCaseLetters) && password.match(numbers) && password.match(character)) {
//         document.getElementById("message").innerHTML = "Valid";
//         document.getElementById("message").style.color = "blue";
//         alert("Valid");
//         return true;
//     }
//     if (!password.match(lowerCaseLetters) || !password.match(upperCaseLetters) || !password.match(numbers) || !password.match(character)) {
//         document.getElementById("message").innerHTML = "Invalid";
//         document.getElementById("message").style.color = "red";
//         return false;
//     }

//     if (password == "") {
//         document.getElementById("message").innerHTML = "Invalid";
//         document.getElementById("message").style.color = "red";
//         return false;
//     }

//     if (password.length < 6) {
//         document.getElementById("message").innerHTML = "Invalid";
//         document.getElementById("message").style.color = "red";
//         return false;
//     }

//     if (password.length > 16) {
//         document.getElementById("message").innerHTML = "Invalid";
//         document.getElementById("message").style.color = "red";
//         return false;
//     }
// }



//  Task - 4

// function printStar(n) {
//     let string = "";
//     for (let i = 0; i < n - 1; i++) {
//         for (let j = 0; j < i; j++) {
//           string += " ";
//         }
//         for (let k = (n - i) * 2 - 1; k >= 1; k--) {
//           if (k === 1 || k === (n - i) * 2 - 1) {
//             string += "*";
//           }
//           else {
//             string += " ";
//           }
//         }
//         string += "\n";
//       }

//     for (let i = 1; i <= n; i++) {
//       for (let j = n; j > i; j--) {
//         string += " ";
//       }
//       for (let k = 0; k < i * 2 - 1; k++) {
//         if (k === 0 || k === 2 * i - 2) {
//           string += "*";
//         }
//         else {
//           string += " ";
//         }
//       }
//       string += "\n";
//     }
//     console.log(string);

// }
// console.log(printStar(5))



//  Task - 5

// const str = 'Somewhere over the rainbow';

// function splitBySpaces (str) {
//     const arr = [];
//     let tmp = "";
//     for (let key of str) {
//         tmp += key;
//         if (key === " ") {
//             arr.push(tmp);
//             tmp = "";
//         }
//     }
//     arr.push(tmp);

//     return arr;
// }
// console.log(splitBySpaces(str));



//  Task - 6

// const myArr = [1, 1, 2, 2, 3];

// function getElemFrequency (arr) {
//     const obj = arr.reduce((acc, elem) => {
//         if (!acc.hasOwnProperty(elem)) {
//             acc[elem] = 0;
//         }
//         acc[elem] += 1;
//         return acc;
//     }, {});
//     const result = {};

//     for (let key in obj) {
//         result[key] = obj[key] / arr.length;
//     }

//     return result;
// }
// console.log(getElemFrequency(myArr));



//  Task - 7

// function printNumber(n) {
//     str = '';
//     for (let i = 1; i <= n; i++) {
//         str += i;
//         console.log(str);
//     }
//     let tmp = str;
//     for (let j = n; j >= 1; j--) {
//         tmp = tmp.slice(0, -1);
//         console.log(tmp);
//     }
// }

// printNumber(5);



//  Task - 8

//  Version - 1

// const myArr = [1, '10', 'hi', 2, 3];

// function getArrayInfo(arr) {
//     let numCount = 0, strCount = 0;
//     for (let i = 0; i < arr.length; i++) {
//         if (typeof arr[i] === "number") {
//             numCount += 1;
//         } else if (typeof arr[i] === "string") {
//             strCount += 1;
//         } else {
//             continue;
//         }
//     }
//     return `Numbers: ${numCount} , Strings: ${strCount}`;
// }

// console.log(getArrayInfo(myArr));

///////////////

//  Version - 2

// const myArr = [1, '10', 'hi', 2, 3];

// function getArrayInfo(arr) {
//     countNum = 0, countStr = 0;
//     const obj = arr.reduce((acc, elem) => {
//                 if (typeof elem === "number") {
//                     acc["Numbers"] = countNum += 1;
//                 } else if (typeof elem === "string") {
//                     acc["Strings"] = countStr += 1;
//                 }
//                 return acc;
//             }, {});
//         let result = ' ';
//         for (let key in obj) {
//             result +=  `${key} : ${obj[key]}` + ', ';
//         }
//         return result;
// }

// console.log(getArrayInfo(myArr));