function minimumDistances(a) {
    let arr = [];
    let min;
    for ( let i = 0; i < a.length; i++ ) {
        for ( let j = i +1; j < a.length; j++ ) {
            if( a[i] === a[j] ) {
                arr.push(j - i);
            }
        }
    }
    if ( arr.length === 0 ) {
        return -1;
    } else {
        let min = arr[0];
        for ( let z = 1; z < arr.length; z++ ) {
            if ( min > arr[z] ) {
                min = arr[z];
            }
        }
        return min;
    }
}
let arr = [7, 1, 3, 4, 1, 7];
console.log(minimumDistances(arr));