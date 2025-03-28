function hurdleRace(arr, k) {
        let max = arr[0];
        for ( let i = 1; i < arr.length; i++ ) {
            if ( max < arr[i] ) {
                max = arr[i];
            }
        }
        let x = Math.max((max - k), 0);
        return x;
}
let arr = [1, 2, 3, 4, 5, 6];
console.log(hurdleRace(arr, 10))


// 'use strict';

// function hurdleRace(k, height) {
//     let n = height.length;

//     // Kiểm tra điều kiện ràng buộc
//     if (n < 1 || n > 100 || k < 1 || k > 100) {
//         throw new Error("Invalid input: 1 ≤ n, k ≤ 100");
//     }
//     for (let h of height) {
//         if (h < 1 || h > 100) {
//             throw new Error("Invalid input: 1 ≤ height[i] ≤ 100");
//         }
//     }

//     let max = Math.max(...height); // Tìm độ cao lớn nhất
//     return Math.max(max - k, 0);   // Nếu max > k, trả về số liều thuốc cần dùng, ngược lại trả về 0
// }

// // 🚀 Đọc input từ stdin (phù hợp với HackerRank)
// process.stdin.resume();
// process.stdin.setEncoding('utf-8');

// let inputString = '';
// process.stdin.on('data', function (inputStdin) {
//     inputString += inputStdin;
// });

// process.stdin.on('end', function () {
//     let input = inputString.trim().split("\n");
//     let [n, k] = input[0].split(" ").map(Number); // Lấy n và k
//     let height = input[1].split(" ").map(Number); // Mảng độ cao các rào cản

//     try {
//         console.log(hurdleRace(k, height));
//     } catch (error) {
//         console.error(error.message);
//     }
// });