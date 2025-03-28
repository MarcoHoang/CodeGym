function findDigits(n) {
    let arr = Array.from(String(n), Number);
    let count = 0;
    for ( let i = 0; i < arr.length; i++ ) {
        if ( n % arr[i] === 0 && arr[i] !== 0 ) {
            count++;
        }
    }
    return count;
}

console.log(findDigits(11902890138790));