function angryProfessor(arr, n) {
    let count = 0;
    for ( let i = 0; i < arr.length; i++ ) {
        if ( arr[i] <= 0 ) {
            count++;
        }
    }
    return count >= n ? 'Yes' : 'No';
}
let arr = [-10, -5, -1, 0, 3]
console.log(angryProfessor(arr, 3));