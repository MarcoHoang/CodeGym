function squares(a, b) {
    let count = 0;
    for ( let i = Math.ceil(Math.sqrt(a)); i <= Math.floor(Math.sqrt(b)); i++ ) {
        count++;
    }
    return count;
}
console.log(squares(24, 100));


// 'use strict';

// process.stdin.resume();
// process.stdin.setEncoding('utf-8');

// let inputString = '';

// process.stdin.on('data', function (inputStdin) {
//     inputString += inputStdin;
// });

// process.stdin.on('end', function () {
//     let input = inputString.trim().split("\n");
//     let q = parseInt(input[0]); // Số lượng test cases

//     for (let i = 1; i <= q; i++) {
//         let [a, b] = input[i].split(" ").map(Number);
//         console.log(squares(a, b));
//     }
// });

// function squares(a, b) {
//     let count = 0;
//     for (let i = Math.ceil(Math.sqrt(a)); i <= Math.floor(Math.sqrt(b)); i++) {
//         count++;
//     }
//     return count;
// }