function test() {
    let n = parseInt(prompt("Enter a positive number less than 1000: "));
    if ( n > 1000 || n <= 0 || isNaN(n) ) {
        alert('Please enter n as a positive integer less than 1000');
        return;
    }
    let arr = prompt(`Enter ${n} array elements separated by spaces (0 < arr[i] <= 1000)`).split(" ").map(Number);
    if ( arr.length !== n ) {
        alert('The number of elements does not match n!');
        return;
    } else {
    for ( let i = 0; i < n; i++ ) {
        if ( arr[i] <= 0 || arr[i] > 1000 || isNaN(arr[i])) {
            alert('Please enter elements that are positive integers less than 1000: ');
        } 
    }
    let sum = 0;
    for ( let j = 0; j < n; j++ ) {
        sum += arr[j];
    }
    return sum;
}
}
console.log(test());

// 'use strict';

// function test(input) {
//     let lines = input.trim().split("\n"); 
//     let n = parseInt(lines[0]); 

//     if (isNaN(n) || n <= 0 || n >= 1000) {
//         return "Please enter n as a positive integer less than 1000";
//     }

//     let arr = lines[1].split(" ").map(Number);

//     if (arr.length !== n) {
//         return "The number of elements does not match n!";
//     }

//     for (let num of arr) {
//         if (isNaN(num) || num <= 0 || num > 1000) {
//             return "Please enter elements that are positive integers less than 1000";
//         }
//     }

//     let sum = arr.reduce((acc, num) => acc + num, 0);
//     return sum;
// }

// process.stdin.resume();
// process.stdin.setEncoding("utf-8");
// let input = "";

// process.stdin.on("data", function (chunk) {
//     input += chunk;
// });

// process.stdin.on("end", function () {
//     console.log(test(input));
// });