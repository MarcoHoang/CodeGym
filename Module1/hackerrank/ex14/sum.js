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

// process.stdin.resume();
// process.stdin.setEncoding("utf-8");

// let inputString = '';

// process.stdin.on("data", function (inputStdin) {
//     inputString += inputStdin;
// });

// process.stdin.on("end", function () {
//     let lines = inputString.trim().split("\n");
//     let arr = lines[1].split(" ").map(Number);  // Chuyển dòng thứ 2 thành mảng số

//     console.log(test(arr));  // Gọi đúng hàm `test()`
// });

// function test(arr) {
//     let sum = arr.reduce((acc, num) => acc + num, 0);  // Tính tổng
//     return sum;
// }