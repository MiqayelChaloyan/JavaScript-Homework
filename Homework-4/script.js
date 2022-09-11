//  Task - 1

// function  isAllDigitsOdd(n, tmp) {
//     if(n === 0) {
//         return true;
//       } else {
//         tmp = n % 10;
//         n = (n - tmp) / 10;
//         if(tmp % 2 === 0) {
//            return  false;
//         }
//         return  isAllDigitsOdd(n);
//       }
// }

// console.log(isAllDigitsOdd(7791));



//  Task - 2

// const myArr = [45, -9, 15, 5, -78];

// function x(arr, min = arr[0]) {
//     if (arr.length <= 1) {
//         return min >= 0 ? min : -1;
//     }

//     if (arr[0] >= 0) {
//         if (min > arr[0]) {
//             min = arr[0];
//             return x(arr, min);
//         } else {
//             arr.splice(0, 1)
//             return x(arr, min);
//         }
//     } else {
//         arr.splice(0, 1);
//         return x(arr, min);
//     }
// }

// console.log(x(myArr));



//  Task - 3

// const myArr = [-9, -4, -4,  3, 12, 4, 5];

// function getWrongPosition(arr, tmp = 1) {
//     if(tmp > arr.length) return -1;
//     if(arr[tmp] < arr[tmp - 1] && arr[tmp] < arr[tmp + 1] || arr[tmp] < arr[tmp - 1]) {
//         return tmp;
//     }
//     return getWrongPosition(arr, tmp += 1);
// }

// console.log(getWrongPosition(myArr));



//  Task - 4

// const myArr = [6, 78, 'n', 0, 1];

// function removeFirstElem(arr) {
//     if (arr.length > 2) {
//         arr.splice(0, 1)
//     } else {
//         removeFirstElem(arr);
//     }
//     return arr;
// }

// console.log(removeFirstElem(myArr))



//  Task - 5

// const myArr = [1, [3, 4, [1, 2]], 10];

// function flatten(array, result) {
//     if (array.length === 0) {
//       return result;
//     }
//     let head = array[0]
//     let rest = array.slice(1)
//     if (Array.isArray(head)) {
//       return flatten(head.concat(rest), result)
//     }
//     result.push(head)
//     return flatten(rest, result)
//   }

//   console.log(flatten(myArr, []));



//  Task - 6

// const myArr = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];

// function shiftSubArray(arr, n) {
//   if(arr.length - 1 <= n) return arr;
//   if(n === 0) return arr;
//   if(n < 0){
//     let last =  arr.pop();
//     arr.unshift(last);
//     n = n + 1;
//   }
//   else {
//     let first =  arr.shift();
//     arr.push(first);
//     n = n - 1;
//   }
//   return shiftSubArray(arr, n)
// }

// console.log(shiftSubArray(myArr, 3));



//  Task - 7

// const digSum = (num) => {
//     if(num < 10){
//        return num;
//     }
//     const lastDigit = num % 10;
//     const tmp = Math.floor(num / 10);
//     return digSum(lastDigit + digSum(tmp));
//  }

//  console.log(digSum(29));

