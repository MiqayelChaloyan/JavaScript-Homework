// Task - 1


// const myArr = [10, 10, 3, 4, 5];


// function getLargestMultiplication(arr) {
//     let current, max = -Infinity;
//     if(arr.length <= 1) return arr[0];
//     for (let i = 0; i < arr.length - 1; i++) {
//         current = arr[i] * arr[i + 1];
//         if (current > max) {
//             max = current;
//         }
//     }
//     return max;
// }

// console.log(getLargestMultiplication(myArr));


// Task - 2


// const myArr = [7, 1, 9, 6, 3];

// function countOfMissingNumbers(arr) {
//     let min = Math.min(...arr);
//     let max = Math.max(...arr);
//     return (max - min + 1 - arr.length)
// }
// console.log(countOfMissingNumbers(myArr));


// Task - 3


// const phrase = 'Prisoner of War';

// const getPhraseAcronym = (str) => {
//     let result = "";
//     let word = `${str[0]}`;
//     if (typeof str !== 'string') return `Invalid element - ${str}`;
//     for (let i = 0; i < str.length - 1; i++) {
//         if (str[i] === " ") {
//             word += str[i + 1];
//         }
//     }
//     word = word.toUpperCase();
//     for (elem of word) {
//         if (elem !== " ") {
//             result += elem;
//         }
//     };
//     return result;
// }

// console.log(getPhraseAcronym(phrase));



// Task - 4


// function getSmallelest(str, n) {
//     let tmp; arr = [];
//     while (n <= str.length) {
//         tmp = str.slice(0, n);
//         arr.push(tmp);
//         str = str.substring(1)
//     }
//     return arr;
// }

// console.log(getSmallelest('abcdfghz', 7));


// Task - 5


// const array = ['aeioulnrst', 'dg', 'bcmp', 'fhvwy', 'k', 'jx', 'qz'];

// function is_include(elem, letters) {
//     let score = 0;
//     for (let i = 0; i < letters.length; i++) {
//         for (let j = 0; j < letters[i].length; j++) {
//             if (letters[i][j] === elem) {
//                 score += i + 1;
//             } else {
//                 score += 0;
//             }
//         }
//     }
//     return score;
// }


// function getScrabbleScore(text, array) {
//     let sum = 0;
//     text = text.toLowerCase();
//     for (let key of text) {
//         sum += is_include(key, array);
//     }
//     return sum;
// }
// console.log(getScrabbleScore('quick', array));


// Task - 6

// const text = 'If man was meant to stay on the ground, god would have given us roots.';

// function trimAndLowercase(str, regex, char) {
//     return str.replace(regex, char).toLowerCase();
// }

// function messageEncode(plain) {
//     plain = trimAndLowercase(plain, /[^a-zA-Z0-9]+/g, "");
//     const l = plain.length;
//     let c = Math.ceil(Math.sqrt(l));
//     let cipher = "";
//     for (let i = 0; i < l; i++) {
//         if (c === i) {
//             cipher += '\n';
//             c += 8;
//             cipher += plain[i];
//         } else {
//             cipher += plain[i];
//         }
//     }

//     return cipher;
// }
// console.log(messageEncode(text));


// Task - 7

// const alphabet = "abcdefghijklmnopqrstuvwxyz";

// function shiftAlphabet(str, n) {
//     let newSTr = "";
//     for (let i = 0; i < alphabet.length; i++) {
//         let offset = (i + n) % alphabet.length;
//         newSTr += alphabet[offset];
//     }
//     return newSTr;
// }

// console.log(shiftAlphabet(alphabet, 13));


