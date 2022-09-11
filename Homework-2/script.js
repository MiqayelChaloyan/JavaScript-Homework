//Task-1  //forEach method

// const myArr = [1, 2, 3, 4, 5, 6, 7];

// function forEachMethod(array, func) {
//     for(let i = 0; i < array.length; i++){
//         func(array[i], i, array);
//     }
// }
// forEachMethod(myArr, ((currentValue, i, array) => {
//     console.log(`${currentValue} has position ${i} in [${array}]:`);
// }));


//Task-2  //map method

// let myArr = [
//     {
//         name: 'Mikayel',
//         date: 1999,
//         id: 1
//     },
//     {
//         name: 'Aram',
//         date: 2001,
//         id: 2
//     }
// ];



// Array.prototype.mapMethod = function (fun) {
//     const newArr = [];
//     let i = 0;
//     while(i < this.length) {
//         newArr.push(fun(this[i], i, this))
//         i++;
//     }
//     return newArr;
// }
// const result = myArr.mapMethod((elem => {
//     return elem.date;
// }));

// console.log(result);



//Task-3 //filter method

// const myArr = [1, -2, 3, 4, 74, 69, 84];

// Array.prototype.filterMethod = function (fun) {
//     const newArr = [];
//     let i = 0;
//     while(i < this.length) {
//         if (fun(this[i], i, this)) {
//             newArr.push(this[i]);
//         }
//         i++;
//     }
//     return newArr;
// };

// let result = myArr.filterMethod((elem => {
//     return elem % 2 !== 0;
// }));
    
// console.log(result);


//Task-4 //every method

// let myArr = [
//     {name: 'Vazgen', age: 17},
//     {name: 'Aram',   age: 19},
//     {name: 'Hrant',  age: 20},
//     {name: 'Anahit', age: 25},
//     {name: 'Harut',  age: 23}
// ];

// Array.prototype.everyMethod = function(func) {
//     if(this.length === 0) return false;
//     for(let i = 0; i < this.length; i++){
//         if(!func(this[i], i, this)) {
//             return false;
//         }
//     }
//     return true;
// }

// const result = myArr.everyMethod((el => {
//     return el.age < 24;
// }))
// console.log(result);


//Task-5 //some method

// let myArr = [
//     {name: 'Vazgen', age: 17},
//     {name: 'Aram',   age: 19},
//     {name: 'Hrant',  age: 20},
//     {name: 'Anahit', age: 25},
//     {name: 'Harut',  age: 23}
// ];

// Array.prototype.someMethod = function(func) {
//     if(this.length === 0) return false;
//     let flag = false;
//     for(let i = 0; i < this.length; i++){
//         if(func(this[i], i, this)) {
//             flag = true;
//             break;
//         }
//     }
//     return flag;
// }

// const result = myArr.someMethod((el => {
//     return el.age < 24;
// }))
// console.log(result);


// Task-6  //find  method

// let myArr = [
//     {
//         name: 'Mikayel',
//         surname: 'Chaloyan',
//         age: 23,
//         id: 1
//     },
//     {
//         name: 'Aram',
//         surname: 'Hakobyan',
//         age: 19,
//         id: 2
//     }
// ];

// Array.prototype.findMethod = function(num)  {
//     for(let i = 0; i < this.length; i++) {
//         if (this[i].id === num) {
//             return this[i];
//         }
//     }
//     return null;
// };

// const result = myArr.findMethod(2);

// console.log(result)


//Task-7 //flat method

// const myArr = [1, 2, null, [4, [11, 10]], 6, [7], 425]; 

// function flatMethod(arr) {  
//     let result = [];    
//     for(let i = 0; i < arr.length; i++) {    
//        const currentValue = arr[i]; 
//        if(Array.isArray(currentValue)) {
//          result = [...result, ...(flatMethod(currentValue))];
//        } else {      
//          if(currentValue != null) {        
//             result.push(currentValue);      
//          }
//       }
//     }
//     return result;  
//   } 
  
//   const result = flatMethod(myArr); 

//   console.log(result);


//Task-8 //indexOf method

// const myArr = [4, 7, 2, 9, 5, 2, 1, 9];

// Array.prototype.indexOfMethod = function (searchElement, fromIndex = 0) {
//         while(fromIndex < this.length) {
//             if(this[fromIndex] === searchElement) {
//                 return fromIndex;
//             } else {
//                 fromIndex++;
//             }
//         }
//     return -1;
// };
// const result = myArr.indexOfMethod(9, 1);

// console.log(result);


//Task-9 //pop method 

// let myArr = [4, 7, 2, 9, 5, 2, 1, 9];

// Array.prototype.popMethod = function() {
//     let arr = [];
//     let tmp = this[this.length - 1];
//     if(this.length === 0) return null;
//     for(let i = 0; i < this.length - 1; i++) {
//        arr[i] = this[i];
//     }
//     this.length = 0
//     for(let i = 0; i < arr.length; i++) {
//         this[i] =  arr[i];
//     }
//     return tmp;
// }

// const result = myArr.popMethod();

// console.log(result);
// console.log(myArr);


//Task-10 //reduce method

// const myArr = [1, 2, 3, 4];

// Array.prototype.reduceMethod = function (fun, accumulator) {
//     for(let i = 0; i < this.length; i++) {
//         accumulator = fun(accumulator, this[i], i, this);
//     }
//     return accumulator;
// };

// const result = myArr.reduceMethod(((accumulator, currentValue) => {
//     return accumulator + currentValue;
// }), 0);
    
// console.log(result);


//Task-11 //splice method

// let myArr = [4, 3, 2, 1];

// Array.prototype.spliceMethod =  function (index, deleteCount) {
//     let result = [];
//     let tmp = [];
//     for(let i = 0; i < this.length; i++) {
//        if(i >= index && i <= deleteCount) {
//           result.push(this[i]);
//        } else {
//           tmp.push(this[i]);
//        }
//     }
//     this.length = 0;
//     for(let j = 0; j < tmp.length; j++) {
//         this[j] =  tmp[j];
//     }
//     return result;
// }

// const value = myArr.spliceMethod(1, 2);

// console.log(value);
// console.log(myArr);


//Task-12 //join method

// let myArr = ['Fire', 'Air', 'Water'];

// Array.prototype.joinMethod = function(value = ',') {
//     let tmp = '';
//     if(this.length === 0) return tmp;
//     for(let i = 0; i < this.length; i++) {
//         if(this[i] === undefined || this[i] === null) return tmp;
//         if(this[i] !== this[this.length - 1])  {
//             tmp += this[i] + value;
//         } else {
//             tmp += this[i];
//         }
//     }
//     answer = tmp;
//     return answer;
// }

// const result = myArr.joinMethod(',');

// console.log(result);


//Task-13 //slice method

// const myArr = ["ant", "bison", "camel", "duck", "elephant"];

//  Array.prototype.sliceMethod = function(start, copyEnd) {
//     let newArr = [];
//     let i = 0;
//         while(i < this.length) {
//             if(i >= start && i < copyEnd) {
//                 newArr.push(this[i])
//             }
//             i++;
//     } 
//     return newArr;
// }
// const result = myArr.sliceMethod(1, 4);

// console.log(result);


//Task-14 //fill method

// let myArr = [1, 1, 1, 1, 1, 1, 1];

// Array.prototype.fillMethod = function(value, start = 0,  end = this.length) {
//     while(start < this.length) {
//         if(start < end) {
//             this[start] = value;
//         }
//         start++;
//     }
//     return this;
// };


// const result = myArr.fillMethod('14', 1);

// console.log(result);


