'use strict';

function cutTheSticks(arr) {
    let result = []; 

    while (arr.length > 0) {
        result.push(arr.length); 
        let min = Math.min(...arr); 
        arr = arr.map(stick => stick - min).filter(stick => stick > 0); // Cắt và loại bỏ que có độ dài 0
    }

    return result;
}

// Đọc input từ stdin (HackerRank format)
process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
process.stdin.on('data', function (inputStdin) {
    inputString += inputStdin;
});

process.stdin.on('end', function () {
    let input = inputString.trim().split("\n");
    let n = parseInt(input[0], 10);
    let arr = input[1].split(" ").map(Number);

    console.log(cutTheSticks(arr).join("\n")); 
});