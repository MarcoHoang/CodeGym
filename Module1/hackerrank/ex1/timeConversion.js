'use strict';

function convertToMilitaryTime(s) {

    let [time, modifier] = [s.slice(0, 8), s.slice(-2)];
    let [hours, minutes, seconds] = time.split(':');
    
    if (modifier === 'AM' && hours === '12') {
        hours = '00';
    } else if (modifier === 'PM' && hours !== '12') {
        hours = String(parseInt(hours, 10) + 12);
    }
    return `${hours}:${minutes}:${seconds}`;
}

// // Read input from stdin for HackerRank
// process.stdin.resume();
// process.stdin.setEncoding('utf-8');
// let inputString = '';
// process.stdin.on('data', function(inputStdin) {
//     inputString += inputStdin;
// });
// process.stdin.on('end', function() {
//     console.log(convertToMilitaryTime(inputString.trim()));
// });