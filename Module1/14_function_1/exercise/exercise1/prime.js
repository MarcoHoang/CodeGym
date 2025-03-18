// function prime(num) {
//     num = parseInt(num);
//     if ( isNaN(num) || num <= 1 ) {
//         return `${num} không phải số nguyên tố!`;
//     } else if ( num <=3 ) {
//         return `${num} là số nguyên tố!`;
//     } else {
//         for ( let i = 2; i <= Math.sqrt(num); i++ ) {
//             if ( num % i == 0 ) {
//                 return `${num} không phải số nguyên tố!`;
//             }
//         }
//         return `${num} là số nguyên tố!`
//     }

// }
// let prime1 = parseInt(prompt('Nhập vào 1 số nguyên dương: '));
// let result = prime(prime1);
// document.getElementById("result").innerHTML = result;

function prime(num) {
    num = parseInt(num);
    if ( isNaN(num) || num <= 1 ) {
        return "";
    } else if ( num <=3 ) {
        return `${num}`;
    } else {
        for ( let i = 2; i <= Math.sqrt(num); i++ ) {
            if ( num % i == 0 ) {
                return "";
            }
        }
        return `${num}`
    }
}

let result = "";
for ( let j = 0; j < 10000; j++ ) {
    let primeNumber = prime(j);
    if ( primeNumber !== "") {
        result += primeNumber + '<br>';
    }
}

document.getElementById("result").innerHTML = result;