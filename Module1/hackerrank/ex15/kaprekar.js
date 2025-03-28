function countDigits(n) {
    return n.toString().length;
}
console.log(countDigits(123821643612983));
// function splitStringInHalf(str) {
//     let mid = Math.ceil(str.length / 2);
//     let firstHalf = str.substring(0, mid);
//     let secondHalf = str.substring(mid);
//     return [firstHalf, secondHalf];
// }

// console.log(splitStringInHalf("abcdefg"));      
function kaprekarNumbers(p, q) {
    let result = [];
    for ( let n = p; n <= q; n++ ) {
        let squaredStr = (n * n).toString();
        let d = n.toString().length; // Số chữ số của n
        let right = squaredStr.slice(-d); // Lấy d số cuối
        let left = squaredStr.slice(0, squaredStr.length - d) || "0"; // Phần còn lại
        let leftNum = parseInt(left, 10) || 0;
        let rightNum = parseInt(right, 10) || 0;
        if ( leftNum + rightNum === n ) {
            result.push(n);
        }
    }   
    if ( result.length > 0 ) {
        console.log(result.join(" "));
    } else {
        console.log('INVALID RANGE');
    }
}

kaprekarNumbers(1, 100);