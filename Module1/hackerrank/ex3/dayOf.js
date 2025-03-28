function dayOfProgrammer() {
    let year = parseInt(prompt('Nhập vào 1 năm: '));
    let day = "";
    let month = '09';
    if ( year < 1700 || year > 2700 ) {
        alert('Nhập năm trong khoảng 1700 đến 2700: ');
        return;
    } else if ( year < 1918 ) {
        if ( year % 4 === 0 ) {
            day = 12;
        } else {
            day = 13;
        }
    } else if ( year == 1918 ) {
        day = 26;
    } else if ( year > 1918 ) {
        if ( year % 400 === 0 || (year % 4 === 0 && year % 100 !==0) ) {
            day = 12;
        } else {
            day =13;
        }
    }
    return `${day}.${month}.${year}`;
}

console.log(dayOfProgrammer());


// 'use strict';

// function dayOfProgrammer(year) {
//     let day, month = '09'; 

//     if (year === 1918) {
//         day = 26;
//     } else if (
//         (year < 1918 && year % 4 === 0) ||  
//         (year > 1918 && (year % 400 === 0 || (year % 4 === 0 && year % 100 !== 0))) 
//     ) {
//         day = 12; 
//     } else {
//         day = 13; 
//     }
//     return `${day}.${month}.${year}`;
// }

// process.stdin.resume();
// process.stdin.setEncoding('utf-8');

// let inputString = '';
// process.stdin.on('data', function (inputStdin) {
//     inputString += inputStdin;
// });

// process.stdin.on('end', function () {
//     const year = parseInt(inputString.trim(), 10);
//     console.log(dayOfProgrammer(year));
// });