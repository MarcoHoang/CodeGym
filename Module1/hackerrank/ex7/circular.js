function circular(arr, k) {
    k = k % arr.length;
    let last;
    for ( let i = 0; i < k; i++ ) {
        last = arr[arr.length -1 ];
        arr.pop();
        arr.unshift(last);

        // let rotatedArr = arr.slice(-k).concat(arr.slice(0, n - k));
    }
    return arr;
}
let arr = [3, 4, 5];
console.log(circular(arr, 2));

// 'use strict';

// function circularArrayRotation(arr, k, queries) {
//     let n = arr.length;
//     k = k % n; // Giảm số lần xoay nếu k > n

//     // Xoay mảng bằng cách dùng slice()
//     let rotatedArr = arr.slice(-k).concat(arr.slice(0, n - k));

//     // Trả về các giá trị theo queries
//     return queries.map(q => rotatedArr[q]);
// }

// // Đọc input từ stdin (HackerRank format)
// process.stdin.resume();
// process.stdin.setEncoding('utf-8');

// let inputString = '';
// process.stdin.on('data', function (inputStdin) {
//     inputString += inputStdin;
// });

// process.stdin.on('end', function () {
//     let input = inputString.trim().split("\n");
//     let [n, k, q] = input[0].split(" ").map(Number);
//     let arr = input[1].split(" ").map(Number);
//     let queries = input.slice(2, 2 + q).map(Number);

//     let result = circularArrayRotation(arr, k, queries);
//     console.log(result.join("\n")); // In kết quả theo từng dòng
// });