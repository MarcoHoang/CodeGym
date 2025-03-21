// function square(number) {
//     let result = number * number;
//     return result;
// }

// function caculator() {
//     let input = document.getElementById('input').value;
//     let result = square(input);
//     document.getElementById('result').innerHTML = result;
// }

// function sum(a, b) {
//     return a + b;
// }

function getResult(a, b, c) {
    let result = (a + b + c) / 3;
    if ( result < 4) {
        return 'Không đạt';
    } else if ( result < 6 ) {
        return 'Đạt';
    } else if ( result < 8 ) {
        return 'Khá';
    } else {
        return 'Tốt';
    };
}
console.log(getResult(1, 2, 3));