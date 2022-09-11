

// const grid1 = [
//     [".", ".", ".", "1", "4", ".", ".", "2", "."],
//     [".", ".", "6", ".", ".", ".", ".", ".", "."],
//     [".", ".", ".", ".", ".", ".", ".", ".", "."],
//     [".", ".", "1", ".", ".", ".", ".", ".", "."],
//     [".", "6", "7", ".", ".", ".", ".", ".", "9"],
//     [".", ".", ".", ".", ".", ".", "8", "1", "."],
//     [".", "3", ".", ".", ".", ".", ".", ".", "6"],
//     [".", ".", ".", ".", ".", "7", ".", ".", "."],
//     [".", ".", ".", "5", ".", ".", ".", "7", "."],
// ];


// const grid2 = [
//     [".", ".", ".", ".", "2", ".", ".", "9", "."],
//     [".", ".", ".", ".", "6", ".", ".", ".", "."],
//     ["7", "1", ".", ".", "7", "5", ".", ".", "."],
//     [".", "7", ".", ".", ".", ".", ".", ".", "."],
//     [".", ".", ".", ".", "8", "3", ".", ".", "."],
//     [".", ".", "8", ".", ".", "7", ".", "6", "."],
//     [".", ".", ".", ".", ".", "2", ".", ".", "."],
//     [".", "1", ".", "2", ".", ".", ".", ".", "."],
//     [".", "2", ".", ".", "3", ".", ".", ".", "."],
// ];

// function solution(arr) {
//     const map = {};
//     for (let i = 0; i < arr.length; i++) {
//         for (let j = 0; j < arr[i].length; j++) {
//             const val = arr[i][j];
//             if (val === ".") {
//                 continue;
//             }
//             const rows = `row ${i}-${val}`;

//             for (let key in map) {
//                 if (rows === key) {
//                     return false
//                 }
//             }

//             const cols = `col-${j}-${val}`;

//             for (let key in map) {
//                 if (cols === key) {
//                     return false
//                 }
//             }

//             const x = parseInt(i / 3);
//             const y = parseInt(j / 3);

//             const box = `box-${x}-${y}-${val}`;

//             for (let key in map) {
//                 if (box === key) {
//                     return false
//                 }
//             }

//             map[rows] = "*";
//             map[cols] = "*";
//             map[box] = "*";
//         }
//     }
//     return true;
// }



// console.log(solution(grid1));




// function solution(arr) {
//     const map = {};
//     for (let i = 0; i < arr.length; i++) {
//       for (let j = 0; j < arr[i].length; j++) {
//         const val = arr[i][j];
//         if (val === ".") continue;

//         const rows = `row ${i}-${val}`;
//         if (map[rows]) return false

//         const cols = `col-${j}-${val}`;
//         if (map[cols]) return false

//         const x = parseInt(i / 3);
//         const y = parseInt(j / 3);
//         const box = `box-${x}-${y}-${val}`;
//         if (map[box]) return false

//         map[rows] = true;
//         map[cols] = true;
//         map[box] = true;
//       }
//     }
//     return true;
// }

// console.log(solution(grid1));


