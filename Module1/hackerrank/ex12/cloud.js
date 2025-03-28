function clouds(arr) {
    let count = 0;
    while ( arr.length > 1 ) {
        if ( arr[1] === 0 && arr[2] === 0 ) {
            count++;
            arr.shift();
            arr.shift();
        } else if ( arr[1] === 0 && arr[2] === 1 ) {
            count++;
            arr.shift();
        } else if ( arr[1] === 1 && arr[2] === 0 ) {
            count++;
            arr.shift();
            arr.shift();
        }
    }
    return count;  
}
// let arr = [0, 1, 0 ,0, 0, 1, 0]
// let arr = [0, 0, 1, 0, 0, 1, 0]
let arr = [0, 0, 0, 0, 1, 0]
console.log(clouds(arr));


'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';

process.stdin.on('data', function (inputStdin) {
    inputString += inputStdin;
});

process.stdin.on('end', function () {
    let input = inputString.trim().split("\n");
    let n = parseInt(input[0]); // Số lượng đám mây (không cần thiết nhưng có trong input)
    let clouds = input[1].split(" ").map(Number); // Mảng đám mây

    console.log(jumpOnClouds(clouds));
});

function jumpOnClouds(arr) {
    let count = 0;
    let i = 0;

    while (i < arr.length - 1) {
        if (i + 2 < arr.length && arr[i + 2] === 0) {
            i += 2; // Nhảy 2 bước nếu có thể
        } else {
            i += 1; // Nhảy 1 bước nếu không thể nhảy 2 bước
        }
        count++;
    }

    return count;
}
