function countAppear(arr) {
    const count =  arr.reduce((acc, num) => {
        acc[num] = (acc[num] || 0) + 1;
        return acc;
    }, {});
    let countMax = Math.max(...Object.values(count));  // Trả về giá trị lớn nhất trong danh sách các giá trị của object count.
    return arr.length - countMax;
}

// let arr = [1, 2, 3, 4, 1, 2, 1, 3, 4, 4];
// let arr = [3, 3, 2, 1, 3]; 
let arr = [78, 39, 34, 6, 78, 78, 36, 78, 34, 36, 78, 39, 36, 75, 95, 36, 72, 34, 75, 78, 6, 36, 95, 72, 75, 75, 75, 10, 10, 78, 6, 78, 72, 34, 34, 34, 36, 34, 78, 78, 36, 10, 6, 6, 36, 78, 72, 78, 75, 36, 78, 72, 10, 34, 72, 95, 39, 36, 95, 72, 10, 78, 72, 39, 6, 39, 10, 6, 39, 78, 95, 78, 95, 10, 34, 39, 78, 34, 34, 95, 10, 10, 6, 39, 78, 95, 36, 10, 39, 78, 36, 78, 75, 36, 36, 39, 78, 95]
// let arr = [1, 2, 2, 3]
console.log(countAppear(arr));

// 'use strict';

// process.stdin.resume();
// process.stdin.setEncoding('utf-8');

// let inputString = '';

// process.stdin.on('data', function (inputStdin) {
//     inputString += inputStdin;
// });

// process.stdin.on('end', function () {
//     let lines = inputString.trim().split("\n");
//     let arr = lines[1].split(" ").map(Number); 
//     console.log(countAppear(arr));
// });

// function countAppear(arr) {
//     const count = arr.reduce((acc, num) => {
//         acc[num] = (acc[num] || 0) + 1;
//         return acc;
//     }, {});

//     let countMax = Math.max(...Object.values(count)); 
//     return arr.length - countMax; 
// }
