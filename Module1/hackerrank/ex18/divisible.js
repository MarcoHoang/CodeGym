function divisibleSumPairs(arr, k) {
    let count = 0;
    for ( let i = 0; i < arr.length; i++ ) {
        for ( let j = i + 1; j < arr.length; j++ ) {
            if ( (arr[i] + arr[j]) % k === 0 ) {
                count++;
            }
        }
    }
    return count;
}

let arr = [1, 2, 3, 4, 5, 6];
console.log(divisibleSumPairs(arr, 5));